import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function BMICalculator() {
  const { t } = useLanguage();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      // Height in cm to meters
      const heightInMeters = h / 100;
      const bmiValue = w / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory("bmi.underweight");
      else if (bmiValue < 25) setCategory("bmi.normal");
      else if (bmiValue < 30) setCategory("bmi.overweight");
      else setCategory("bmi.obese");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8 bg-white/50 backdrop-blur-sm border-primary/10">
      <CardHeader>
        <CardTitle className="text-xl text-primary text-center">{t("bmi.title")}</CardTitle>
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
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white"
          onClick={calculateBMI}
        >
          {t("bmi.calculate")}
        </Button>

        {bmi !== null && (
          <div className="mt-6 text-center p-4 bg-primary/5 rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">{t("bmi.result")}</div>
            <div className="text-3xl font-bold text-primary mb-2">{bmi}</div>
            <div className="text-lg font-medium text-primary/80">
              {t(category)}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
