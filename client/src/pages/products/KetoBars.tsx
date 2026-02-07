import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Quest Nutrition Protein Bars",
    "rating": 4.8,
    "link": "https://www.amazon.com/Quest-Nutrition-Chocolate-Protein-12-Count/dp/B00DLDH1N2?tag=veinhealthhub-20",
    "description": "A classic protein bar with high fiber and minimal net carbs. Available in a wide variety of flavors.",
    "features": [
      "20g protein per bar",
      "Only 4g net carbs",
      "No sugar added",
      "Satisfying texture"
    ]
  },
  {
    "name": "IQBAR Brain and Body Plant Protein Bars",
    "rating": 4.6,
    "link": "https://www.amazon.com/IQBAR-Brain-Body-Plant-Protein/dp/B07Y7H3FHB?tag=veinhealthhub-20",
    "description": "Vegan keto bars focused on brain health. Made with clean ingredients and no sugar alcohols.",
    "features": [
      "12g plant-based protein",
      "2-3g net carbs",
      "No sugar alcohols",
      "Brain-supporting nutrients"
    ]
  },
  {
    "name": "Perfect Keto Bars",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Bar-Chocolate-Almond/dp/B07J1YD6MY?tag=veinhealthhub-20",
    "description": "Designed specifically for ketosis with minimal impact on blood sugar. Contains collagen and healthy fats.",
    "features": [
      "10g protein with collagen",
      "3g net carbs",
      "MCT oil for energy",
      "No artificial sweeteners"
    ]
  }
];

export default function KetoBars() {
  return <ProductPage category="Keto Bars" products={products} />;
}
