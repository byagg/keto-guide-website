import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Quest Nutrition Protein Bars",
    "rating": 4.8,
    "link": "https://www.amazon.com/Quest-Nutrition-Chocolate-Protein-12-Count/dp/B00DLDH1N2",
    "description": "A classic protein bar with high fiber and minimal net carbs. Available in a wide variety of flavors."
  },
  {
    "name": "IQBAR Brain and Body Plant Protein Bars",
    "rating": 4.6,
    "link": "https://www.amazon.com/IQBAR-Brain-Body-Plant-Protein/dp/B07G7L9Z1M",
    "description": "Vegan keto bars focused on brain health. Made with clean ingredients and no sugar alcohols."
  },
  {
    "name": "Perfect Keto Bars",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Bar-Chocolate-Almond/dp/B07L9P6S9W",
    "description": "Designed specifically for ketosis with minimal impact on blood sugar. Contains collagen and healthy fats."
  }
];

export default function KetoBars() {
  return <ProductPage category="Keto Bars" products={products} />;
}
