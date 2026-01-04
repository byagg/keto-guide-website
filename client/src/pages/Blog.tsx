import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function Blog() {
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
            <p className="text-muted-foreground leading-relaxed">
              We're preparing in-depth articles covering keto science, practical tips, and real-world success stories. Stay tuned!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
