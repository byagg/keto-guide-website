import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
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

export default function BlogPost() {
    const { getLocalizedPath } = useLanguage();
    const [match, params] = useRoute("/:lang/blog/:slug");
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (params?.slug) {
            fetchPost(params.slug);
        }
    }, [params?.slug]);

    const fetchPost = async (slug: string) => {
        try {
            setLoading(true);
            const response = await fetch("/data/posts.json");
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            const posts: BlogPost[] = await response.json();
            const foundPost = posts.find((p) => p.slug === slug);

            if (foundPost) {
                setPost(foundPost);
                setError(null);
            } else {
                setError("Post not found");
            }
        } catch (err) {
            console.error("Error fetching post:", err);
            setError("Failed to load post");
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
            <div className="container py-12 text-center">
                <p className="text-muted-foreground">Loading post...</p>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="container py-12 text-center">
                <p className="text-destructive font-bold mb-4">{error || "Post not found"}</p>
                <Link href={getLocalizedPath("/blog")}>
                    <Button variant="outline">Back to Blog</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content Column */}
                <article className="lg:col-span-2 space-y-8">
                    <Link href={getLocalizedPath("/blog")}>
                        <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-2">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="font-bold uppercase tracking-wide text-xs">Back to Blog</span>
                        </div>
                    </Link>

                    <header className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-gray-100 pb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span className="font-medium text-foreground">{post.author}</span>
                            </div>
                            {post.tags && (
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            <Tag className="h-3 w-3 mr-1" /> {tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </header>

                    {post.image && (
                        <div className="rounded-xl overflow-hidden shadow-sm">
                            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
                        {/* Simple newline to br conversion for now, or raw html if trusted */}
                        {post.content.split('\n').map((paragraph, idx) => (
                            paragraph ? <p key={idx}>{paragraph}</p> : <br key={idx} />
                        ))}
                    </div>
                </article>

                {/* Sidebar Column */}
                <aside className="lg:col-span-1">
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
