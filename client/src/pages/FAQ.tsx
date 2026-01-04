import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Everything you need to know about the ketogenic diet
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What is the ketogenic diet?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                The ketogenic diet (keto) is a dietary regimen with very low carbohydrate content (5-10% of calories), moderate protein (15-25%), and high fat content (70-80%). The goal is to get the body into a metabolic state called ketosis, where the body burns fat as its primary energy source instead of carbohydrates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                How does ketosis work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Ketosis occurs when you restrict carbohydrate intake to approximately 20-50 grams per day. The liver begins producing molecules called ketones (e.g., beta-hydroxybutyrate or BHB) from fatty acids, which serve as an alternative fuel source for the brain, muscles, and other organs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Is the ketogenic diet safe?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                For most healthy people, the ketogenic diet is considered safe when followed correctly and ideally under professional supervision. It is not suitable for people with certain health conditions (e.g., pancreatic, liver, or kidney diseases). It's important to consult with your doctor before starting any diet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What are the main benefits of the keto diet?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Main benefits include effective weight loss (8-10 kg in 6 months), improved blood sugar control (HbA1c reduction of 0.9-1.5%), increased mental clarity and energy, reduced inflammation in the body, improved cardiovascular markers (30-50% triglyceride reduction), and potential improvement of certain neurological conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What can I eat on the keto diet?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Focus on healthy fats (avocado, olive oil, nuts, butter), meat, fish, eggs, and low-carb vegetables (leafy greens, broccoli, cauliflower, zucchini). Avoid sugar, grains, legumes, most fruits, and starchy vegetables. Aim for 20-50g net carbs per day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What is "keto flu" and how do I avoid it?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Keto flu refers to flu-like symptoms (fatigue, headache, irritability, nausea) during the first 1-2 weeks as your body adapts to ketosis. It's caused by electrolyte imbalances and dehydration. Prevent it by increasing sodium (3-5g/day), potassium (3-4g/day), and magnesium (300-400mg/day), and staying well-hydrated.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                How long does it take to enter ketosis?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Most people enter ketosis within 2-4 days of restricting carbs to 20-50g per day. However, full keto-adaptation (where your body becomes efficient at using ketones) takes 2-4 weeks. Blood ketone levels of 0.5-3.0 mmol/L indicate nutritional ketosis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                How do I know if I'm in ketosis?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Signs include increased energy, mental clarity, reduced hunger, weight loss, and sometimes "keto breath" (fruity smell). For accurate measurement, use blood ketone meters (most accurate, target 0.5-3.0 mmol/L), breath ketone meters, or urine strips (less reliable after adaptation).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Can I exercise on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Yes! After keto-adaptation (2-4 weeks), most people can exercise normally. Endurance athletes often perform well on keto. High-intensity activities may require a targeted ketogenic diet (TKD) with small amounts of carbs around workouts. Give your body time to adapt before judging performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Will I lose muscle on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                No, if done correctly. Ensure adequate protein intake (1.2-2.0g per kg body weight), resistance training, and sufficient calories. Studies show keto preserves lean muscle mass better than low-fat diets during weight loss. The key is eating enough protein and maintaining strength training.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What about cholesterol on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Most people see improved lipid markers: triglycerides drop 30-50%, HDL increases 10-20%, and LDL particle size improves. However, some people experience LDL increases. Monitor your lipid panel regularly and consult a doctor if LDL rises significantly. The clinical significance of LDL changes on keto is debated.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Can I drink alcohol on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                In moderation, yes. Choose low-carb options: spirits (vodka, whiskey, gin, rum - 0g carbs), dry wine (3-4g carbs per glass), or light beer (3-6g carbs). Avoid sugary mixers, regular beer, and sweet wines. Note that alcohol may lower your alcohol tolerance on keto and temporarily pause fat burning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                What if I cheat on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                A high-carb meal will kick you out of ketosis temporarily. You may experience bloating, energy crashes, and need to re-adapt (1-3 days). Don't let one mistake derail your progress—simply return to your keto plan immediately. Frequent cheating prevents adaptation and reduces benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Do I need supplements on keto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Recommended supplements include: electrolytes (sodium, potassium, magnesium), vitamin D, omega-3 fatty acids, and possibly a multivitamin. MCT oil can help boost ketone production. Fiber supplements (psyllium husk) may help with digestion. Always prioritize whole foods first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="editorial-card">
              <AccordionTrigger className="text-lg font-bold px-6">
                Is keto sustainable long-term?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                Many people follow keto for years successfully. Some prefer cyclical approaches (keto during the week, higher carbs on weekends) or eventually transition to a moderate low-carb diet (50-100g carbs). The key is finding what works for your lifestyle, goals, and health. Regular medical monitoring is recommended for long-term keto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
