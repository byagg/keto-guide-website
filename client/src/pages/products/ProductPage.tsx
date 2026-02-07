import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Badge } from "@/components/ui/badge";

interface Product {
  name: string;
  rating: number;
  link: string;
  description: string;
  image?: string;
  features?: string[];
}

interface ProductPageProps {
  category: string;
  products: Product[];
}

export default function ProductPage({ category, products }: ProductPageProps) {
  useSEO({
    title: `Best ${category} for Keto Diet 2026 | Comparison & Reviews`,
    description: `Check out our top 3 picks for ${category} in 2026. Detailed reviews, comparisons, and direct Amazon links.`,
    url: `/products/${category.toLowerCase().replace(/ /g, "-")}`,
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-5xl">
        <Link href="/products" className="inline-flex items-center text-primary hover:underline mb-8 transition-all hover:-translate-x-1">
          <ArrowLeft className="mr-2" size={16} />
          Back to categories
        </Link>

        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">Editorial Selection 2026</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Best {category}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our expert selection of the top-rated {category} based on nutritional profile, ingredient purity, and real user feedback.
          </p>
        </div>

        <div className="grid gap-10">
          {products && Array.isArray(products) && products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="grid md:grid-cols-12 gap-0">
                {/* Product Image Section */}
                <div className="md:col-span-4 bg-muted/30 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-border/50">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-w-full max-h-[240px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground italic">
                      Image coming soon
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:col-span-8 p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`
                        ${index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-slate-400' : 'bg-amber-700'} 
                        text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider
                      `}>
                        #{index + 1} Best Choice
                      </span>
                      <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                        <Star size={14} fill="currentColor" />
                        <span className="ml-1.5 font-bold text-sm">{product.rating} / 5</span>
                      </div>
                    </div>
                    
                    <Button asChild size="sm" className="hidden md:inline-flex shadow-sm hover:shadow-md">
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        Check Price <ExternalLink className="ml-2" size={14} />
                      </a>
                    </Button>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{product.name}</h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(product.features || [
                        "Keto-friendly ingredients",
                        "High user satisfaction",
                        "Excellent nutritional value"
                      ]).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full md:hidden mt-2">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      View on Amazon <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-10 bg-muted/50 rounded-3xl border border-border/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our Evaluation Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every product we recommend undergoes a rigorous review process. We analyze ingredient lists for hidden sugars and artificial additives, 
              verify macronutrient ratios to ensure they fit a ketogenic lifestyle, and cross-reference thousands of verified buyer reviews to ensure 
              consistency in quality and taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
