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
    title: `Najlepšie ${category} pre Keto Diétu 2026 | Porovnanie a Hodnotenie`,
    description: `Pozrite si náš výber top 3 ${category} pre rok 2026. Detailné hodnotenia, porovnania a priame odkazy na Amazon.`,
    url: `/products/${category.toLowerCase().replace(/ /g, "-")}`,
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl">
        <Link href="/products" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Späť na prehľad kategórií
        </Link>

        <h1 className="mb-4">Najlepšie {category}</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Náš redakčný výber top 3 produktov v kategórii {category} na základe popularity, zloženia a hodnotení používateľov na Amazone.
        </p>

        <div className="space-y-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        #{index + 1} MIESTO
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
                      Pozrieť na Amazon <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-bold mb-2">Prečo sme vybrali tento produkt:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Vysoká čistota zloženia vhodná pre ketózu</li>
                    <li>Tisíce pozitívnych recenzií od reálnych používateľov</li>
                    <li>Skvelý pomer ceny a kvality</li>
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-2xl">
          <h3 className="text-xl font-bold mb-4">Ako hodnotíme produkty?</h3>
          <p className="text-muted-foreground">
            Naše hodnotenia vychádzajú z kombinácie analýzy zloženia (čistota, prítomnosť skrytých cukrov), 
            popularity na platforme Amazon a spätnej väzby od keto komunity. Vždy odporúčame skontrolovať 
            aktuálne zloženie na obale produktu, keďže výrobcovia ho môžu meniť.
          </p>
        </div>
      </div>
    </div>
  );
}
