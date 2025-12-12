import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, User, Tag, Rss, ExternalLink } from "lucide-react";
import axios from "axios";

interface RSSPost {
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
  link?: string;
  source: string;
}

interface RSSFeed {
  title: string;
  description: string;
  link: string;
}

export default function RSSFeed() {
  const { t, getLocalizedPath } = useLanguage();
  const [rssUrl, setRssUrl] = useState("");
  const [feed, setFeed] = useState<RSSFeed | null>(null);
  const [posts, setPosts] = useState<RSSPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRSS = async (url: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/api/rss", {
        params: { url },
      });
      setFeed(response.data.feed);
      setPosts(response.data.posts);
    } catch (err: any) {
      console.error("Error fetching RSS:", err);
      setError(err.response?.data?.error || "Failed to load RSS feed");
      setFeed(null);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rssUrl.trim()) {
      fetchRSS(rssUrl.trim());
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="container max-w-4xl py-12 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link href={getLocalizedPath("/")}>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          RSS Feed
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          RSS Feed Reader
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Load and display articles from any RSS feed
        </p>
      </div>

      {/* RSS URL Input */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rss-url">RSS Feed URL</Label>
              <div className="flex gap-2">
                <Input
                  id="rss-url"
                  type="url"
                  placeholder="https://example.com/feed.xml"
                  value={rssUrl}
                  onChange={(e) => setRssUrl(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={loading || !rssUrl.trim()}>
                  <Rss className="h-4 w-4 mr-2" />
                  {loading ? "Loading..." : "Load Feed"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      {/* Feed Info */}
      {feed && (
        <div className="bg-muted/30 rounded-xl p-6 border border-border/50 space-y-2">
          <h2 className="text-2xl font-bold font-serif text-foreground">{feed.title}</h2>
          {feed.description && (
            <p className="text-muted-foreground">{feed.description}</p>
          )}
          {feed.link && (
            <a
              href={feed.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              Visit source
            </a>
          )}
        </div>
      )}

      {/* Posts List */}
      {posts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold font-serif text-foreground">
            Articles ({posts.length})
          </h3>
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {post.image && (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-foreground">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary bg-primary/5"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {post.link && (
                    <div className="pt-2">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Read full article
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && posts.length === 0 && feed === null && (
        <div className="text-center py-12">
          <Rss className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Enter an RSS feed URL above to load articles</p>
        </div>
      )}
    </div>
  );
}

