import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { nanoid } from "nanoid";
import { parseStringPromise } from "xml2js";

// RSS Feed Cache
interface CachedFeed {
  data: any;
  timestamp: number;
  url: string;
}

const RSS_CACHE = new Map<string, CachedFeed>();
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
const MAX_CACHE_SIZE = 100; // Maximum number of cached feeds

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

function getImagesFilePath(): string {
  return path.resolve(__dirname, "images.json");
}

function readImages(): any[] {
  const filePath = getImagesFilePath();
  if (!existsSync(filePath)) {
    return [];
  }
  try {
    const data = readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.images || [];
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
  }
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

function getImagesFilePath(): string {
  return path.resolve(__dirname, "images.json");
}

function readImages(): any[] {
  const filePath = getImagesFilePath();
  if (!existsSync(filePath)) {
    return [];
  }
  try {
    const data = readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.images || [];
  } catch (error) {
    console.error("Error reading images:", error);
    return [];
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

  // Images/Infographics API endpoint
  app.get("/api/images", async (req, res) => {
    try {
      const { category, usedIn, id, source } = req.query;

      // Try Cloudflare D1 first if configured
      if (source === "cloudflare" || process.env.CLOUDFLARE_D1_DATABASE_ID) {
        const { getImageMetadata, isCloudflareConfigured } = await import("./cloudflare.js");
        if (isCloudflareConfigured()) {
          const cloudflareImages = await getImageMetadata(
            id as string | undefined,
            category as string | undefined,
            usedIn as string | undefined
          );
          if (cloudflareImages.length > 0 || source === "cloudflare") {
            if (id && cloudflareImages.length > 0) {
              return res.json(cloudflareImages[0]);
            }
            return res.json({ images: cloudflareImages, source: "cloudflare" });
          }
        }
      }

      // Fallback to local JSON
      const images = readImages();
      let filtered = images;

      if (category) {
        filtered = filtered.filter((img: any) => img.category === category);
      }

      if (usedIn) {
        const usedInArray = Array.isArray(usedIn) ? usedIn : [usedIn];
        filtered = filtered.filter((img: any) =>
          usedInArray.some((ui: string) => img.usedIn?.includes(ui))
        );
      }

      if (id) {
        filtered = filtered.filter((img: any) => img.id === id);
        if (filtered.length > 0) {
          return res.json({ ...filtered[0], source: "local" });
        }
        return res.status(404).json({ error: "Image not found" });
      }

      res.json({ images: filtered, source: "local" });
    } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).json({ error: "Failed to fetch images" });
    }
  });

  // Upload image to Cloudflare R2
  app.post("/api/images/upload", async (req, res) => {
    try {
      const { uploadToCloudflare } = await import("./cloudflare.js");
      const { imageBuffer, filename, contentType, metadata } = req.body;

      if (!imageBuffer || !filename) {
        return res.status(400).json({ error: "imageBuffer and filename are required" });
      }

      // Convert base64 to buffer if needed
      let buffer: Buffer;
      if (typeof imageBuffer === "string") {
        buffer = Buffer.from(imageBuffer, "base64");
      } else {
        buffer = Buffer.from(imageBuffer);
      }

      const cloudflareUrl = await uploadToCloudflare(buffer, filename, contentType);

      if (cloudflareUrl && metadata) {
        const { storeImageMetadata } = await import("./cloudflare.js");
        await storeImageMetadata({
          ...metadata,
          cloudflareUrl,
          uploadedAt: new Date().toISOString(),
        });
      }

      res.json({
        success: true,
        url: cloudflareUrl,
        message: cloudflareUrl ? "Image uploaded to Cloudflare R2" : "Cloudflare not configured, using local storage",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  });

  // Helper function to clean old cache entries
  function cleanCache() {
    if (RSS_CACHE.size > MAX_CACHE_SIZE) {
      const entries = Array.from(RSS_CACHE.entries());
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
      const toRemove = entries.slice(0, RSS_CACHE.size - MAX_CACHE_SIZE);
      toRemove.forEach(([key]) => RSS_CACHE.delete(key));
    }
  }

  // Helper function to get cached feed or fetch new one
  async function fetchRSSFeed(url: string, retries = 2): Promise<any> {
    // Check cache first
    const cached = RSS_CACHE.get(url);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }

    // Fetch with retry logic
    let lastError: Error | null = null;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; KetoGuide RSS Reader)',
            'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const xmlData = await response.text();
        
        // Parse XML to JSON
        const result = await parseStringPromise(xmlData, {
          explicitArray: false,
          mergeAttrs: true,
          explicitCharkey: false,
          trim: true,
          normalize: true,
          normalizeTags: false,
        });

        // Cache the result
        cleanCache();
        RSS_CACHE.set(url, {
          data: result,
          timestamp: Date.now(),
          url: url,
        });

        return result;
      } catch (error: any) {
        lastError = error;
        if (attempt < retries && error.name !== 'AbortError') {
          // Wait before retry (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
          continue;
        }
      }
    }

    throw lastError || new Error('Failed to fetch RSS feed');
  }

  // RSS Feed endpoint
  app.get("/api/rss", async (req, res) => {
    try {
      const { url } = req.query;

      if (!url || typeof url !== "string") {
        return res.status(400).json({ error: "RSS URL is required. Use ?url=YOUR_RSS_URL" });
      }

      // Validate URL
      try {
        new URL(url);
      } catch {
        return res.status(400).json({ error: "Invalid URL format" });
      }

      // Fetch RSS feed (with caching and retry)
      const result = await fetchRSSFeed(url);

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
        
        // Extract image from various sources (more comprehensive)
        let image = item["media:thumbnail"]?.[0]?.$.url || 
                    item["media:content"]?.[0]?.$.url ||
                    item["media:content"]?.[0]?.$?.url ||
                    item.enclosure?.[0]?.$.url ||
                    item.enclosure?.$.url ||
                    item.image?.url ||
                    item.image?.[0]?.url ||
                    "";

        // Try to extract image from description/content HTML
        if (!image && description) {
          const imgMatch = String(description).match(/<img[^>]+src=["']([^"']+)["']/i);
          if (imgMatch && imgMatch[1]) {
            image = imgMatch[1];
          }
        }

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
