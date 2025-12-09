import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Droplets, Pill, Utensils, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function Guide() {
  return (
    <div className="container max-w-4xl py-12 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <Link href="/">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </div>
        </Link>
        <Badge variant="outline" className="px-3 py-1 text-sm border-primary/20 text-primary bg-primary/5">
          Practical Application
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-foreground">
          Getting Started with Keto: <br className="hidden md:block" />
          <span className="text-primary">The First Two Weeks</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A step-by-step guide to navigating the induction phase, managing side effects, and setting yourself up for long-term success.
        </p>
      </div>

      {/* Step 1: Medical Prep */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">1</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Medical Preparation</h2>
        </div>
        
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6 space-y-4">
            <p className="text-muted-foreground">Before embarking on a ketogenic diet, it is best practice to:</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 rounded-md h-fit mt-0.5"><Pill className="h-4 w-4 text-primary" /></div>
                <div>
                  <span className="font-bold block text-foreground">Review Medications</span>
                  <span className="text-sm text-muted-foreground">Discuss with your doctor, especially for diabetes and blood pressure meds.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 rounded-md h-fit mt-0.5"><ActivityIcon className="h-4 w-4 text-primary" /></div>
                <div>
                  <span className="font-bold block text-foreground">Baseline Lab Work</span>
                  <span className="text-sm text-muted-foreground">Fasting glucose, HbA1c, lipid panel, liver enzymes, and kidney function.</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Step 2: Induction */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">2</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">The Induction Phase (Days 1-14)</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">What to Expect</h3>
            <p className="text-muted-foreground leading-relaxed">
              During the first 3-14 days, your body transitions to ketosis. You will likely experience rapid water weight loss as glycogen stores are depleted.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" /> The "Keto Flu"
              </h4>
              <p className="text-sm text-muted-foreground">
                Transient symptoms like headache, fatigue, brain fog, and nausea are common but temporary.
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img 
              src="/images/keto_weightloss.png" 
              alt="Person measuring waist" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Step 3: Management */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">3</div>
          <h2 className="text-2xl font-bold font-serif text-foreground">Managing Side Effects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit text-blue-600 dark:text-blue-400">
                <Droplets className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Stay Hydrated</h3>
              <p className="text-sm text-muted-foreground">Drink plenty of water to replace lost fluids.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit text-green-600 dark:text-green-400">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Electrolytes</h3>
              <p className="text-sm text-muted-foreground">Supplement sodium, potassium, and magnesium.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit text-purple-600 dark:text-purple-400">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold">Ease Into It</h3>
              <p className="text-sm text-muted-foreground">Gradually reduce carbs if symptoms are severe.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Long Term */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-foreground">Long-Term Success & Pitfalls</h2>
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground">
          <p>
            The biggest challenge is sustainability. To succeed long-term, find your "why," plan meals ahead, and connect with a supportive community.
          </p>
          <p>
            <strong>Watch out for:</strong> Nutrient deficiencies (eat your veggies!), kidney stones (stay hydrated!), and elevated LDL cholesterol (monitor with your doctor).
          </p>
        </div>
      </section>
    </div>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
