import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { 
  Cookie, 
  Dumbbell, 
  Droplets, 
  Candy, 
  Flame, 
  ChefHat, 
  Coffee, 
  Zap, 
  ShieldCheck, 
  Nut 
} from "lucide-react";

const categories = [
  { name: "Keto Snacks", slug: "snacks", icon: Cookie, desc: "Slané a sladké pochúťky s nízkym obsahom sacharidov." },
  { name: "Keto Protein Powders", slug: "protein-powders", icon: Dumbbell, desc: "Proteíny optimalizované pre udržanie svalov v ketóze." },
  { name: "Keto Electrolytes", slug: "electrolytes", icon: Droplets, desc: "Nevyhnutné minerály pre prevenciu keto chrípky." },
  { name: "Keto Sweeteners", slug: "sweeteners", icon: Candy, desc: "Prírodné náhrady cukru, ktoré nezvyšujú inzulín." },
  { name: "Keto MCT Oils", slug: "mct-oils", icon: Flame, desc: "Rýchly zdroj energie pre mozog a spaľovanie tukov." },
  { name: "Keto Baking Mixes", slug: "baking-mixes", icon: ChefHat, desc: "Zmesi na pečenie chleba, palaciniek a koláčov." },
  { name: "Keto Coffee & Creamers", slug: "coffee-creamers", icon: Coffee, desc: "Vylepšite svoju rannú kávu zdravými tukmi." },
  { name: "Keto Bars", slug: "bars", icon: Zap, desc: "Praktické tyčinky na cesty s čistým zložením." },
  { name: "Keto Supplements", slug: "supplements", icon: ShieldCheck, desc: "Exogénne ketóny a doplnky pre podporu metabolizmu." },
  { name: "Keto Nut Butters", slug: "nut-butters", icon: Nut, desc: "Lahodné orechové maslá bez pridaného cukru." },
];

export default function Products() {
  useSEO({
    title: "Najlepšie Keto Produkty 2026 | Porovnanie a Recenzie",
    description: "Kompletný sprievodca najlepšími keto produktmi na trhu. Porovnávame top 3 produkty v 10 kategóriách podľa Amazonu.",
    url: "/products",
  });

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-4">Najlepšie Keto Produkty 2026</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vybrali sme pre vás tie najlepšie hodnotené a najobľúbenejšie produkty, ktoré vám uľahčia cestu v ketogénnej diéte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/products/${cat.slug}`}>
              <Card className="p-6 hover:border-primary transition-all cursor-pointer group h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-muted-foreground">{cat.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
