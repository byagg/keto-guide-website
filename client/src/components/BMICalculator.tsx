import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export function BMICalculator() {
  const { t } = useLanguage();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "light" | "moderate" | "active" | "very-active">("moderate");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);
  const [ketoCalories, setKetoCalories] = useState<number | null>(null);

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    "very-active": 1.9,
  };

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (h > 0 && w > 0 && a > 0) {
      // Calculate BMI
      const heightInMeters = h / 100;
      const bmiValue = w / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory("bmi.underweight");
      else if (bmiValue < 25) setCategory("bmi.normal");
      else if (bmiValue < 30) setCategory("bmi.overweight");
      else setCategory("bmi.obese");

      // Calculate BMR using Mifflin-St Jeor Equation
      let bmrValue: number;
      if (gender === "male") {
        bmrValue = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmrValue = 10 * w + 6.25 * h - 5 * a - 161;
      }
      setBmr(Math.round(bmrValue));

      // Calculate TDEE (Total Daily Energy Expenditure)
      const tdeeValue = bmrValue * activityMultipliers[activityLevel];
      setTdee(Math.round(tdeeValue));

      // Keto calories (typically 20% deficit for weight loss, or maintenance)
      // For weight loss, use 20% deficit; for maintenance, use TDEE
      const deficit = category === "bmi.obese" || category === "bmi.overweight" ? 0.8 : 1.0;
      const ketoCaloriesValue = Math.round(tdeeValue * deficit);
      setKetoCalories(ketoCaloriesValue);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-foreground text-center">{t("bmi.title")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="height">{t("bmi.height")} (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">{t("bmi.weight")} (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="30"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={gender}
              onChange={(e) => setGender(e.target.value as "male" | "female")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <select
            id="activity"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value as typeof activityLevel)}
          >
            <option value="sedentary">Sedentary (little/no exercise)</option>
            <option value="light">Light (exercise 1-3 days/week)</option>
            <option value="moderate">Moderate (exercise 3-5 days/week)</option>
            <option value="active">Active (exercise 6-7 days/week)</option>
            <option value="very-active">Very Active (intense exercise daily)</option>
          </select>
        </div>
        
        <Button 
          className="w-full"
          onClick={calculateBMI}
        >
          {t("bmi.calculate")}
        </Button>

        {bmi !== null && bmr !== null && tdee !== null && ketoCalories !== null && (
          <div className="mt-6 space-y-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">{t("bmi.result")}</div>
              <div className="text-3xl font-bold text-primary mb-2">{bmi}</div>
              <div className="text-lg font-medium text-foreground">
                {t(category)}
              </div>
            </div>

            <Separator />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="text-xs text-muted-foreground mb-1">Basal Metabolic Rate</div>
                <div className="text-2xl font-bold text-foreground">{bmr}</div>
                <div className="text-xs text-muted-foreground mt-1">kcal/day</div>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="text-xs text-muted-foreground mb-1">Total Daily Energy</div>
                <div className="text-2xl font-bold text-foreground">{tdee}</div>
                <div className="text-xs text-muted-foreground mt-1">kcal/day (TDEE)</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-xs text-muted-foreground mb-1">Recommended Keto Intake</div>
                <div className="text-2xl font-bold text-primary">{ketoCalories}</div>
                <div className="text-xs text-muted-foreground mt-1">kcal/day</div>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Macro Breakdown (for {ketoCalories} kcal):</p>
              <div className="space-y-1">
                <p>• Protein: ~{Math.round(ketoCalories * 0.2 / 4)}g (20% of calories)</p>
                <p>• Carbs: ~{Math.round(ketoCalories * 0.05 / 4)}g (5% of calories, max 20-50g)</p>
                <p>• Fat: ~{Math.round(ketoCalories * 0.75 / 9)}g (75% of calories)</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
