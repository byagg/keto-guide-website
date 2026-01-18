import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Info } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

/**
 * Design Philosophy: Scientific Editorial
 * Interactive keto macro calculator with visual results
 */

interface MacroResults {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  proteinCalories: number;
  fatCalories: number;
  carbCalories: number;
}

export default function KetoCalculator() {
  useSEO({
    title: "Keto Macro Calculator: Calculate Your Daily Macros",
    description: "Free keto macro calculator to determine your personalized daily macronutrient targets. Calculate calories, protein, fat, and carbs for optimal ketosis.",
    url: "/keto-calculator",
  });
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [results, setResults] = useState<MacroResults | null>(null);

  const calculateMacros = () => {
    if (!age || !gender || !weight || !height || !activityLevel || !goal) {
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }

    // Apply activity multiplier
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const tdee = bmr * activityMultipliers[activityLevel];

    // Adjust for goal
    let targetCalories: number;
    if (goal === "loss") {
      targetCalories = tdee * 0.8; // 20% deficit
    } else if (goal === "gain") {
      targetCalories = tdee * 1.1; // 10% surplus
    } else {
      targetCalories = tdee; // maintenance
    }

    // Calculate macros for keto (70% fat, 25% protein, 5% carbs)
    const proteinGrams = (targetCalories * 0.25) / 4; // 4 cal per gram
    const fatGrams = (targetCalories * 0.7) / 9; // 9 cal per gram
    const carbGrams = (targetCalories * 0.05) / 4; // 4 cal per gram

    setResults({
      calories: Math.round(targetCalories),
      protein: Math.round(proteinGrams),
      fat: Math.round(fatGrams),
      carbs: Math.round(carbGrams),
      proteinCalories: Math.round(targetCalories * 0.25),
      fatCalories: Math.round(targetCalories * 0.7),
      carbCalories: Math.round(targetCalories * 0.05),
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="mx-auto mb-6" size={48} />
            <h1 className="mb-6">Keto Macro Calculator</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Calculate your personalized macronutrient targets for optimal ketosis
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <Card className="editorial-card">
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>

                <div className="space-y-6">
                  {/* Age */}
                  <div>
                    <Label htmlFor="age">Age (years)</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 35"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Weight */}
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="e.g., 75"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Height */}
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="e.g., 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  {/* Activity Level */}
                  <div>
                    <Label htmlFor="activity">Activity Level</Label>
                    <Select value={activityLevel} onValueChange={setActivityLevel}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                        <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                        <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Goal */}
                  <div>
                    <Label htmlFor="goal">Goal</Label>
                    <Select value={goal} onValueChange={setGoal}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loss">Weight Loss (20% deficit)</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="gain">Muscle Gain (10% surplus)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateMacros}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg"
                    size="lg"
                  >
                    <Calculator className="mr-2" size={20} />
                    Calculate My Macros
                  </Button>
                </div>
              </Card>

              {/* Info Card */}
              <Card className="editorial-card mt-6 bg-accent/5">
                <div className="flex items-start gap-3">
                  <Info className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold mb-2">How it works:</p>
                    <p>
                      This calculator uses the Mifflin-St Jeor equation to estimate your daily calorie needs,
                      then distributes them according to standard ketogenic ratios: 70% fat, 25% protein, 5% carbs.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="space-y-6">
                  {/* Daily Calories */}
                  <Card className="editorial-card bg-secondary/5 border-2 border-secondary">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Daily Calorie Target</p>
                      <p className="text-5xl font-bold text-secondary mb-2">{results.calories}</p>
                      <p className="text-sm text-muted-foreground">calories per day</p>
                    </div>
                  </Card>

                  {/* Macro Breakdown */}
                  <Card className="editorial-card">
                    <h3 className="text-xl font-bold mb-6">Your Daily Macros</h3>

                    <div className="space-y-6">
                      {/* Fat */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Fat</span>
                          <span className="text-2xl font-bold text-primary">{results.fat}g</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: "70%" }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                          <span>70% of calories</span>
                          <span>{results.fatCalories} cal</span>
                        </div>
                      </div>

                      {/* Protein */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Protein</span>
                          <span className="text-2xl font-bold text-accent">{results.protein}g</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: "25%" }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                          <span>25% of calories</span>
                          <span>{results.proteinCalories} cal</span>
                        </div>
                      </div>

                      {/* Carbs */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Carbs</span>
                          <span className="text-2xl font-bold text-secondary">{results.carbs}g</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-secondary rounded-full"
                            style={{ width: "5%" }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-sm text-muted-foreground">
                          <span>5% of calories</span>
                          <span>{results.carbCalories} cal</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Visual Pie Chart */}
                  <Card className="editorial-card">
                    <h3 className="text-xl font-bold mb-6">Macro Distribution</h3>
                    <div className="flex items-center justify-center">
                      <svg width="240" height="240" viewBox="0 0 240 240">
                        {/* Fat - 70% (252 degrees) */}
                        <circle
                          cx="120"
                          cy="120"
                          r="100"
                          fill="none"
                          stroke="oklch(0.623 0.214 259.815)"
                          strokeWidth="60"
                          strokeDasharray="439.8 628.3"
                          transform="rotate(-90 120 120)"
                        />
                        {/* Protein - 25% (90 degrees) */}
                        <circle
                          cx="120"
                          cy="120"
                          r="100"
                          fill="none"
                          stroke="oklch(0.704 0.191 180)"
                          strokeWidth="60"
                          strokeDasharray="157.1 628.3"
                          strokeDashoffset="-439.8"
                          transform="rotate(-90 120 120)"
                        />
                        {/* Carbs - 5% (18 degrees) */}
                        <circle
                          cx="120"
                          cy="120"
                          r="100"
                          fill="none"
                          stroke="oklch(0.623 0.214 259.815)"
                          strokeWidth="60"
                          strokeDasharray="31.4 628.3"
                          strokeDashoffset="-596.9"
                          transform="rotate(-90 120 120)"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2" />
                        <p className="text-sm font-semibold">Fat</p>
                        <p className="text-xs text-muted-foreground">70%</p>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-2" />
                        <p className="text-sm font-semibold">Protein</p>
                        <p className="text-xs text-muted-foreground">25%</p>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 bg-secondary rounded-full mx-auto mb-2 opacity-50" />
                        <p className="text-sm font-semibold">Carbs</p>
                        <p className="text-xs text-muted-foreground">5%</p>
                      </div>
                    </div>
                  </Card>

                  {/* Tips */}
                  <Card className="editorial-card bg-accent/5">
                    <h3 className="text-lg font-bold mb-3">Next Steps</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Track your food intake using a macro tracking app</li>
                      <li>• Weigh your food for the first few weeks to learn portion sizes</li>
                      <li>• Adjust based on results after 2-3 weeks</li>
                      <li>• Stay hydrated and supplement electrolytes</li>
                      <li>• Be patient - full keto-adaptation takes 2-4 weeks</li>
                    </ul>
                  </Card>
                </div>
              ) : (
                <Card className="editorial-card h-full flex items-center justify-center">
                  <div className="text-center text-muted-foreground py-20">
                    <Calculator className="mx-auto mb-4" size={64} />
                    <p className="text-lg">Fill in your information and click Calculate</p>
                    <p className="text-sm mt-2">Your personalized macros will appear here</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-header mb-12">Understanding Your Results</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-3">Fat (70%)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your primary energy source on keto. Focus on healthy fats like olive oil, avocados, nuts, and fatty fish.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>9 calories per gram</strong>
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-3">Protein (25%)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Essential for muscle maintenance and repair. Aim for 1.2-2.0g per kg body weight depending on activity.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>4 calories per gram</strong>
                </p>
              </Card>

              <Card className="editorial-card">
                <h3 className="text-lg font-bold mb-3">Carbs (5%)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Keep very low (20-50g net carbs) to maintain ketosis. Focus on low-carb vegetables and berries.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>4 calories per gram</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
