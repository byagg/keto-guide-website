import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LevelUp Keto Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/LevelUp-Clean-Keto-Creamer-MCT/dp/B07KPP7B3G",
    "description": "Premium coffee creamer with MCT oil and collagen. Adds creamy texture and energy to your morning coffee."
  },
  {
    "name": "Rapid Fire Keto Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Creamer-Ounces/dp/B071L6V23S",
    "description": "Powdered mix of healthy fats for quick keto coffee preparation anywhere. Contains grass-fed butter and MCT."
  },
  {
    "name": "Laird Superfood Coconut Creamer",
    "rating": 4.4,
    "link": "https://www.amazon.com/Laird-Superfood-Non-Dairy-Creamer-Unsweetened/dp/B01N23V8K1",
    "description": "Plant-based coconut alternative. No added sugar, rich in natural fats for delicious coffee flavor."
  }
];

export default function KetoCoffeeAndCreamers() {
  return <ProductPage category="Keto Coffee & Creamers" products={products} />;
}
