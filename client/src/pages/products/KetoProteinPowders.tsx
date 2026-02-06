import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Optimum Nutrition Gold Standard 100% Whey",
    "rating": 4.8,
    "link": "https://www.amazon.com/Optimum-Nutrition-Standard-Protein-Chocolate/dp/B000QSNYGI?tag=veinhealthhub-20",
    "description": "The world's best-selling whey protein with excellent taste and low carb content, ideal for muscle recovery."
  },
  {
    "name": "Isopure Zero Carb Protein Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Isopure-Protein-Powder-Isolate-Flavor/dp/B000E95HP0?tag=veinhealthhub-20",
    "description": "Pure whey protein isolate with zero carbs. Perfect for those looking to maximize protein intake without added sugar."
  },
  {
    "name": "Keto Science Keto Shake",
    "rating": 4.5,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Meal-Replacement/dp/B078XG9N5T?tag=veinhealthhub-20",
    "description": "A comprehensive meal replacement designed specifically for keto, containing MCT oils and quality fats to support ketosis."
  }
];

export default function KetoProteinPowders() {
  return <ProductPage category="Keto Protein Powders" products={products} />;
}
