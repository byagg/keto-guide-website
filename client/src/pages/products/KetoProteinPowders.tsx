import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Optimum Nutrition Gold Standard 100% Whey",
    "rating": 4.8,
    "link": "https://www.amazon.com/Optimum-Nutrition-Standard-Protein-Chocolate/dp/B000QSNYGI",
    "description": "World's best-selling whey protein with excellent taste and low carb content, ideal for muscle recovery and maintenance during ketosis."
  },
  {
    "name": "Isopure Zero Carb Protein Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Isopure-Protein-Powder-Isolate-Flavor/dp/B000E95HP0",
    "description": "Pure whey protein isolate with absolutely zero carbs. Perfect for those wanting to maximize protein intake without any sugar."
  },
  {
    "name": "Keto Science Keto Shake",
    "rating": 4.5,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Meal-Replacement/dp/B078XG9N5T",
    "description": "Complete meal replacement powder designed specifically for keto, with MCT oils and quality fats to support ketosis."
  }
];

export default function KetoProteinPowders() {
  return <ProductPage category="Keto Protein Powders" products={products} />;
}
