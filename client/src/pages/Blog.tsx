import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";

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

export default function Blog() {
  const { t, getLocalizedPath } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/posts", {
        timeout: 3000,
        validateStatus: () => true, // Don't throw on any status code
      });
      
      // If API is not available (404, 400, etc.), use empty array
      if (response.status >= 400 || !response.data) {
        console.warn("API endpoint not available (expected on Cloudflare Pages static hosting)");
        setPosts([]);
        setError(null); // Don't show error for missing API
      } else {
        setPosts(Array.isArray(response.data) ? response.data : []);
        setError(null);
      }
    } catch (err: any) {
      // Network errors or timeouts - API not available (expected on static hosting)
      if (err.code === 'ECONNABORTED' || err.code === 'ERR_NETWORK' || err.message?.includes('timeout')) {
        console.warn("API not available (expected on static hosting)");
      } else {
        console.warn("Error fetching posts:", err);
      }
      setPosts([]);
      setError(null); // Don't show error for missing API
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="container max-w-4xl py-12 md:py-24">
        <div className="text-center">
          <p className="text-muted-foreground">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-4xl py-12 md:py-24">
        <div className="text-center">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <Link href={getLocalizedPath("/")}>
          <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-bold uppercase tracking-wide text-xs">Back to Home</span>
          </div>
        </Link>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
          KetoMindset Blog
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Actionable advice for your low-carb journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          {posts.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-muted-foreground font-medium">No posts available right now.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
                <Link key={post.id} href={getLocalizedPath(`/blog/${post.slug}`)}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/10">
                    {post.image && (
                      <div className="h-64 sm:h-80 overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-black hover:bg-white font-bold shadow-sm">
                            <Calendar className="h-3 w-3 mr-1" /> {formatDate(post.publishedAt)}
                          </Badge>
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-primary transition-colors mb-4 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-bold text-gray-500 uppercase">{post.author}</span>
                        </div>
                        <span className="text-primary font-bold flex items-center group-hover:underline">
                          Read Article <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Column */}
        <aside className="lg:col-span-1">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}

