import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LevelUp Keto Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/LevelUp-Clean-Keto-Creamer-MCT/dp/B079ZCLL8R?tag=veinhealthhub-20",
    "description": "A premium coffee creamer with MCT oil and collagen. Adds a creamy texture and energy for your whole morning.",
    "features": [
      "MCT oil for sustained energy",
      "Grass-fed collagen peptides",
      "Naturally sweetened",
      "Creamy, smooth texture"
    ]
  },
  {
    "name": "Rapid Fire Keto Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Creamer-Ounces/dp/B07M79P6GN?tag=veinhealthhub-20",
    "description": "A powdered blend of healthy fats for quick keto coffee prep anywhere. Contains grass-fed butter and MCTs.",
    "features": [
      "Grass-fed butter powder",
      "MCT oil blend",
      "Zero carbs",
      "Instant mixing"
    ]
  },
  {
    "name": "Laird Superfood Coconut Creamer",
    "rating": 4.4,
    "link": "https://www.amazon.com/Laird-Superfood-Non-Dairy-Creamer-Unsweetened/dp/B06ZYDJ41T?tag=veinhealthhub-20",
    "description": "A plant-based coconut alternative. No added sugar, rich in natural fats for a delicious coffee flavor.",
    "features": [
      "100% plant-based",
      "No added sugar",
      "Rich coconut flavor",
      "Vegan-friendly"
    ]
  }
];

export default function KetoCoffeeAndCreamers() {
  return <ProductPage category="Keto Coffee & Creamers" products={products} />;
}
