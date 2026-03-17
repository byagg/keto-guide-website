import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

export default function Blog() {
  useSEO({
    title: "Keto Blog: Latest Research, Tips & Success Stories",
    description: "Latest research, tips, and success stories from the keto community. In-depth articles covering keto science, practical tips, and real-world experiences.",
    url: "/blog",
    type: "article",
  });
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="mx-auto mb-6" size={48} />
            <h1 className="mb-6">Keto Blog</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Latest research, tips, and success stories from the keto community
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="editorial-card">
            <h2 className="text-2xl mb-4">Coming Soon</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're preparing in-depth articles covering keto science, practical tips, and real-world success stories. Stay tuned!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/science" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">The Science</Link>
              <Link href="/start-guide" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">Beginner's Guide</Link>
              <Link href="/benefits" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">Benefits & Risks</Link>
              <Link href="/faq" className="text-secondary hover:text-secondary/80 transition-colors font-semibold">FAQ</Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
