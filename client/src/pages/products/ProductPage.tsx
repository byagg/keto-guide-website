import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

interface Product {
  name: string;
  rating: number;
  link: string;
  description: string;
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
      <div className="container max-w-4xl">
        <Link href="/products" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Back to categories
        </Link>

        <h1 className="mb-4">Best {category}</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Our editorial selection of the top 3 products in the {category} category based on popularity, ingredients, and user reviews on Amazon.
        </p>

        <div className="space-y-8">
          {products && Array.isArray(products) && products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        #{index + 1} RANK
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <span className="ml-1 font-bold">{product.rating} / 5</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                  </div>
                  <Button asChild className="w-full md:w-auto">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      View on Amazon <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-bold mb-2">Why we chose this product:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>High purity ingredients suitable for ketosis</li>
                    <li>Thousands of positive reviews from real users</li>
                    <li>Great value for money</li>
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-2xl">
          <h3 className="text-xl font-bold mb-4">How do we rate products?</h3>
          <p className="text-muted-foreground">
            Our ratings are based on a combination of ingredient analysis (purity, presence of hidden sugars), 
            popularity on the Amazon platform, and feedback from the keto community. We always recommend checking 
            the current ingredients on the product packaging, as manufacturers may change them.
          </p>
        </div>
      </div>
    </div>
  );
}
