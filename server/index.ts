import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { nanoid } from "nanoid";
import { parseStringPromise } from "xml2js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  image?: string;
}

function getPostsFilePath(): string {
  return path.resolve(__dirname, "posts.json");
}

function readPosts(): BlogPost[] {
  const filePath = getPostsFilePath();
  if (!existsSync(filePath)) {
    return [];
  }
  try {
    const data = readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

function writePosts(posts: BlogPost[]): void {
  const filePath = getPostsFilePath();
  try {
    writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing posts:", error);
    throw error;
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware for parsing JSON
  app.use(express.json());

  // API Routes for blog posts
  app.get("/api/posts", (req, res) => {
    try {
      const posts = readPosts();
      // Sort by publishedAt descending (newest first)
      const sortedPosts = posts.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      res.json(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:slug", (req, res) => {
    try {
      const posts = readPosts();
      const post = posts.find((p) => p.slug === req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", (req, res) => {
    try {
      const { title, excerpt, content, author, tags, image } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }

      const posts = readPosts();
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      // Check if slug already exists
      const existingPost = posts.find((p) => p.slug === slug);
      if (existingPost) {
        return res.status(400).json({ error: "A post with this title already exists" });
      }

      const now = new Date().toISOString();
      const newPost: BlogPost = {
        id: nanoid(),
        title,
        slug,
        excerpt: excerpt || content.substring(0, 200) + "...",
        content,
        author: author || "Anonymous",
        publishedAt: now,
        updatedAt: now,
        tags: tags || [],
        image: image || undefined,
      };

      posts.push(newPost);
      writePosts(posts);

      res.status(201).json(newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Failed to create post" });
    }
  });

  app.put("/api/posts/:id", (req, res) => {
    try {
      const posts = readPosts();
      const index = posts.findIndex((p) => p.id === req.params.id);

      if (index === -1) {
        return res.status(404).json({ error: "Post not found" });
      }

      const { title, excerpt, content, author, tags, image } = req.body;
      const updatedPost: BlogPost = {
        ...posts[index],
        ...(title && { title }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content !== undefined && { content }),
        ...(author !== undefined && { author }),
        ...(tags !== undefined && { tags }),
        ...(image !== undefined && { image }),
        updatedAt: new Date().toISOString(),
      };

      // Update slug if title changed
      if (title && title !== posts[index].title) {
        updatedPost.slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      posts[index] = updatedPost;
      writePosts(posts);

      res.json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ error: "Failed to update post" });
    }
  });

  app.delete("/api/posts/:id", (req, res) => {
    try {
      const posts = readPosts();
      const filteredPosts = posts.filter((p) => p.id !== req.params.id);

      if (posts.length === filteredPosts.length) {
        return res.status(404).json({ error: "Post not found" });
      }

      writePosts(filteredPosts);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Failed to delete post" });
    }
  });

  // RSS Feed endpoint
  app.get("/api/rss", async (req, res) => {
    try {
      const { url } = req.query;

      if (!url || typeof url !== "string") {
        return res.status(400).json({ error: "RSS URL is required. Use ?url=YOUR_RSS_URL" });
      }

      // Fetch RSS feed
      const response = await fetch(url);
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch RSS feed" });
      }

      const xmlData = await response.text();

      // Parse XML to JSON
      const result = await parseStringPromise(xmlData, {
        explicitArray: false,
        mergeAttrs: true,
        explicitCharkey: false,
        trim: true,
      });

      // Extract posts from RSS
      const rss = result.rss || result.feed;
      const channel = rss?.channel || rss;
      const items = channel?.item || channel?.entry || [];

      const posts = Array.isArray(items) ? items : [items];

      const formattedPosts = posts.map((item: any, index: number) => {
        // Handle different RSS formats (RSS 2.0, Atom, etc.)
        const title = item.title?._ || item.title || item.title?.[0]?._ || item.title?.[0] || `Post ${index + 1}`;
        const link = item.link?._ || 
                   item.link?.[0]?._ || 
                   item.link?.[0]?.$.href || 
                   item.link?.[0] || 
                   item.id || 
                   "";
        const description = item.description?._ || 
                          item.description || 
                          item.description?.[0]?._ ||
                          item.description?.[0] ||
                          item.summary?._ || 
                          item.summary || 
                          item.summary?.[0]?._ ||
                          item.summary?.[0] ||
                          item.content?._ || 
                          item.content ||
                          item.content?.[0]?._ ||
                          item.content?.[0] ||
                          "";
        const pubDate = item.pubDate || 
                       item.published || 
                       item.updated || 
                       item.pubDate?.[0] ||
                       item.published?.[0] ||
                       new Date().toISOString();
        const author = item.author?._ || 
                      item.author || 
                      item.author?.[0]?._ ||
                      item.author?.[0]?.name ||
                      item["dc:creator"]?._ || 
                      item["dc:creator"] || 
                      item["dc:creator"]?.[0]?._ ||
                      item["dc:creator"]?.[0] ||
                      "Unknown";
        
        // Extract image from various sources
        const image = item["media:thumbnail"]?.[0]?.$.url || 
                     item["media:content"]?.[0]?.$.url ||
                     item["media:content"]?.[0]?.$?.url ||
                     item.enclosure?.[0]?.$.url ||
                     item.enclosure?.$.url ||
                     item.image?.url ||
                     item.image?.[0]?.url ||
                     "";

        // Extract tags/categories
        const categories = item.category || [];
        const tags = Array.isArray(categories)
          ? categories.map((cat: any) => cat._ || cat || cat.$.term || "").filter(Boolean)
          : categories?._ ? [categories._] : categories?.$.term ? [categories.$.term] : [];

        // Generate slug from title
        const slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return {
          id: `rss-${index}`,
          title: String(title).trim(),
          slug: `${slug}-${index}`,
          excerpt: String(description).substring(0, 200) + (String(description).length > 200 ? "..." : ""),
          content: String(description),
          author: String(author).trim(),
          publishedAt: new Date(pubDate).toISOString(),
          updatedAt: new Date(pubDate).toISOString(),
          tags: tags,
          image: image || undefined,
          link: link || undefined,
          source: "rss",
        };
      });

      res.json({
        feed: {
          title: channel?.title?._ || channel?.title || channel?.title?.[0]?._ || channel?.title?.[0] || "RSS Feed",
          description: channel?.description?._ || channel?.description || channel?.description?.[0]?._ || channel?.description?.[0] || "",
          link: channel?.link?._ || channel?.link || channel?.link?.[0]?._ || channel?.link?.[0] || url,
        },
        posts: formattedPosts,
      });
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
      res.status(500).json({ error: "Failed to fetch RSS feed", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
