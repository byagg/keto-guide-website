import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LevelUp Keto Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/LevelUp-Clean-Keto-Creamer-MCT/dp/B07KPP7B3G?tag=veinhealthhub-20",
    "description": "A premium coffee creamer with MCT oil and collagen. Adds a creamy texture and energy for your whole morning."
  },
  {
    "name": "Rapid Fire Keto Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Creamer-Ounces/dp/B071L6V23S?tag=veinhealthhub-20",
    "description": "A powdered blend of healthy fats for quick keto coffee prep anywhere. Contains grass-fed butter and MCTs."
  },
  {
    "name": "Laird Superfood Coconut Creamer",
    "rating": 4.4,
    "link": "https://www.amazon.com/Laird-Superfood-Non-Dairy-Creamer-Unsweetened/dp/B01N23V8K1?tag=veinhealthhub-20",
    "description": "A plant-based coconut alternative. No added sugar, rich in natural fats for a delicious coffee flavor."
  }
];

export default function KetoCoffeeAndCreamers() {
  return <ProductPage category="Keto Coffee & Creamers" products={products} />;
}
