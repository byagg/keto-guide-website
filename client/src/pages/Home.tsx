import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Heart, 
  TrendingDown, 
  Zap, 
  Shield, 
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

/**
 * Design Philosophy: Scientific Editorial
 * - Magazine-inspired multi-column layouts
 * - Clean white base with deep navy for authority
 * - Bright teal accents for energy
 * - Professional editorial photography
 */

export default function Home() {
  useEffect(() => {
    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KetoMindset",
      "url": "https://ketomindset.org",
      "description": "Komplexný, vedecky podložený zdroj pre pochopenie a implementáciu ketogénnej diéty",
      "publisher": {
        "@type": "Organization",
        "name": "KetoMindset"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
            {/* Left Column - Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
                <AlertCircle size={16} />
                <span className="text-sm font-semibold">UPOZORNENIE: Prečítajte si pred začatím</span>
              </div>
              
              <h1 className="text-white mb-6">
                Kompletný sprievodca ketogénnou diétou
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Vedecky podložená cesta k transformácii metabolizmu — od molekulárnych mechanizmov v bunkách až po praktické využitie pri chudnutí, cukrovke 2. typu a metabolickom syndróme.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/start-guide">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8"
                  >
                    Začať s keto <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/veda">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8"
                  >
                    Preskúmať vedu
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>100% zadarmo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Bez kreditnej karty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Vedecky overené</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/images/keto-salmon-avocado.jpg" 
                  alt="Ketogénne jedlo - losos s avokádom"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-sm">Nové poznatky</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary">10,000+</div>
              <div className="text-sm text-muted-foreground">Spokojných čitateľov</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Vedeckých štúdií</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Založené na dôkazoch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - What is Keto */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header">Čo je ketogénna diéta?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Ketogénna diéta je stravovací režim charakterizovaný <span className="data-highlight">veľmi nízkym príjmom sacharidov (5-10% kalórií)</span>, vysokým príjmom tukov (70-80% kalórií) a stredným príjmom bielkovín (15-25% kalórií). Tento makronutrientový pomer vedie k metabolickému stavu nazývanému <strong>ketóza</strong>, v ktorom telo primárne využíva ketóny namiesto glukózy ako zdroj energie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">5-10%</div>
              <h4 className="font-bold mb-2">Sacharidy</h4>
              <p className="text-sm text-muted-foreground">Typicky 20-50g denne pre dosiahnutie ketózy</p>
            </Card>
            
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">70-80%</div>
              <h4 className="font-bold mb-2">Tuky</h4>
              <p className="text-sm text-muted-foreground">Zdravé tuky ako primárny zdroj energie</p>
            </Card>
            
            <Card className="editorial-card">
              <div className="text-4xl font-bold text-secondary mb-3">15-25%</div>
              <h4 className="font-bold mb-2">Bielkoviny</h4>
              <p className="text-sm text-muted-foreground">Dostatočné pre udržanie svalovej hmoty</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Viac ako len chudnutie</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Moderný výskum odhaľuje, že ketóny sú silné signálne molekuly, ktoré regulujú kritické bunkové procesy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Kognitívne funkcie</h3>
              <h4 className="text-lg font-semibold mb-3 text-secondary">Neuroprotekcia</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ketóny poskytujú mozgu stabilný zdroj energie, čo vedie k zlepšenej mentálnej jasnosti, koncentrácii a potenciálne neuroprotektívnym účinkom.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Stabilná mentálna energia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Menej "mozgovej hmly"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                  <span>Lepšia koncentrácia</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 2 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-xl mb-3">Metabolické zdravie</h3>
              <h4 className="text-lg font-semibold mb-3 text-accent">Kontrola zápalu</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beta-hydroxybutyrát priamo inhibuje NLRP3 inflammazóm, čím znižuje chronický zápal spojený s metabolickými ochoreniami.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Zníženie systémového zápalu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Zlepšená inzulínová senzitivita</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span>Nižšia hladina cukru v krvi</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 3 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingDown className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Kardiovaskulárne zdravie</h3>
              <h4 className="text-lg font-semibold mb-3 text-primary">Riadenie hmotnosti</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ketogénna diéta podporuje chudnutie prostredníctvom potlačenia hladu, zvýšeného výdaja energie a zníženia inzulínu.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Efektívne spaľovanie tukov</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Znížené triglycerídy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>Zvýšené HDL cholesterol</span>
                </li>
              </ul>
            </Card>

            {/* Benefit 4 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Stabilná energia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ketóny poskytujú konštantný prísun energie bez výkyvov hladiny cukru v krvi, čo eliminuje energetické "krachy" počas dňa.
              </p>
            </Card>

            {/* Benefit 5 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-accent" size={28} />
              </div>
              <h3 className="text-xl mb-3">Diabetes 2. typu</h3>
              <p className="text-muted-foreground leading-relaxed">
                Výrazné zlepšenie kontroly hladiny cukru v krvi, zníženie HbA1c a často umožňuje zníženie diabetických liekov.
              </p>
            </Card>

            {/* Benefit 6 */}
            <Card className="editorial-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Activity className="text-primary" size={28} />
              </div>
              <h3 className="text-xl mb-3">Stukovatená pečeň</h3>
              <p className="text-muted-foreground leading-relaxed">
                Štúdie ukazujú zníženie obsahu tuku v pečeni o 20-50% v priebehu 6-12 mesiacov na ketogénnej diéte.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-header">Ako funguje ketogénna diéta</h2>
          
          <div className="space-y-8 mt-12">
            <div className="numbered-item">
              <div className="numbered-item-number">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zníženie inzulínu</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Obmedzenie sacharidov výrazne znižuje hladinu inzulínu v krvi. Nízky inzulín je signál pre telo, aby začalo uvoľňovať tuk z tukových buniek (lipolýza).
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rozklad tukov (Lipolýza)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mastné kyseliny sa uvoľňujú z adipocytov a transportujú sa do pečene, kde sa konvertujú na ketónové telesá prostredníctvom procesu nazývaného ketogenéza.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Produkcia ketónov (Ketogenéza)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pečeň produkuje tri typy ketónových telies: <span className="data-highlight">beta-hydroxybutyrát (BHB)</span>, acetoacetat a acetón. BHB je primárny ketón, ktorý slúži ako palivo pre mozog, srdce a svaly.
                </p>
              </div>
            </div>

            <div className="numbered-item">
              <div className="numbered-item-number">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Metabolická adaptácia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Po 2-4 týždňoch sa telo plne adaptuje na využívanie ketónov a tukov ako primárneho zdroja energie. Tento stav sa nazýva <strong>keto-adaptácia</strong> alebo <strong>metabolická flexibilita</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="mt-16 bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Timeline adaptácie</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1-2
                </div>
                <div className="font-semibold mb-2">Deň 1-2</div>
                <p className="text-sm text-muted-foreground">Vyčerpanie glykogénu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  3-4
                </div>
                <div className="font-semibold mb-2">Deň 3-4</div>
                <p className="text-sm text-muted-foreground">Začiatok ketózy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1
                </div>
                <div className="font-semibold mb-2">Týždeň 1</div>
                <p className="text-sm text-muted-foreground">Adaptácia, keto chrípka</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  2-4
                </div>
                <div className="font-semibold mb-2">Týždeň 2-4</div>
                <p className="text-sm text-muted-foreground">Plná keto-adaptácia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="bg-muted py-20">
        <div className="container max-w-4xl">
          <h2 className="section-header mb-12">Často kladené otázky</h2>
          
          <div className="space-y-6">
            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Čo je ketogénna diéta?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ketogénna diéta (keto) je stravovací režim s veľmi nízkym obsahom sacharidov, stredným obsahom bielkovín a vysokým obsahom tukov. Cieľom je dostať telo do metabolického stavu nazývaného ketóza, v ktorom telo spaľuje tuky ako primárny zdroj energie namiesto sacharidov.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Ako funguje ketóza?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ketóza nastáva, keď obmedzíte príjem sacharidov na približne 20-50 gramov denne. Pečeň začne z mastných kyselín produkovať molekuly nazývané ketóny (napr. beta-hydroxybutyrát alebo BHB), ktoré slúžia ako alternatívny zdroj paliva pre mozog, svaly a ďalšie orgány.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Je ketogénna diéta bezpečná?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pre väčšinu zdravých ľudí je ketogénna diéta považovaná za bezpečnú, ak sa dodržiava správne a ideálne pod dohľadom odborníka. Nie je vhodná pre ľudí s určitými zdravotnými problémami (napr. ochorenia pankreasu, pečene, obličiek). Pred začatím akejkoľvek diéty je dôležité konzultovať to so svojím lekárom.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Aké sú hlavné výhody keto diéty?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Medzi hlavné výhody patrí efektívne chudnutie, zlepšená kontrola hladiny cukru v krvi, zvýšená mentálna jasnosť a energia, zníženie zápalu v tele a potenciálne zlepšenie niektorých neurologických ochorení.
              </p>
            </Card>

            <Card className="editorial-card">
              <h3 className="text-lg font-bold mb-3 text-secondary">Čo môžem jesť na keto diéte?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zamerajte sa na zdravé tuky (avokádo, olivový olej, orechy), mäso, ryby, vajcia a nízkosacharidovú zeleninu (listová zelenina, brokolica, karfiol). Vyhnite sa cukru, obilninám, strukovinám, väčšine ovocia a škrobovej zelenine.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Pripravení transformovať svoje zdravie?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Získajte kompletný sprievodca ako bezpečne začať s keto, zvládnuť vedľajšie účinky a dosiahnuť dlhodobý úspech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-guide">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8"
              >
                Sprievodca pre začiatočníkov <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/benefity">
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold text-lg px-8"
              >
                Výhody & Riziká
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
