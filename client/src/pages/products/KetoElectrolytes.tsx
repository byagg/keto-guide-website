import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LMNT Electrolyte Powder",
    "rating": 4.9,
    "link": "https://www.amazon.com/LMNT-Electrolyte-Powder-Packets-Hydration/dp/B084HQ4DYQ?tag=veinhealthhub-20",
    "description": "A tasty electrolyte drink mix with everything you need and nothing you don't. Perfect for low-carb and ketogenic lifestyles.",
    "features": [
      "No sugar, no gluten, no fillers",
      "High sodium for keto needs",
      "Delicious science-backed ratios",
      "Convenient travel packets"
    ]
  },
  {
    "name": "Ultima Replenisher Electrolyte Powder",
    "rating": 4.8,
    "link": "https://www.amazon.com/Ultima-Replenisher-Electrolyte-Powder-Hydration/dp/B08XQZX9K3?tag=veinhealthhub-20",
    "image": "/images/products/ultima-electrolytes.jpg",
    "description": "Complete hydration with 6 key electrolytes plus support minerals. Naturally sweetened and flavored.",
    "features": [
      "Zero calories and zero sugar",
      "Includes 6 essential electrolytes",
      "Plant-based colors and flavors",
      "Non-GMO and Vegan certified"
    ]
  },
  {
    "name": "Dr. Berg's Electrolyte Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Supplement/dp/B06W9F3X88?tag=veinhealthhub-20",
    "image": "/images/products/dr-berg-electrolytes.jpg",
    "description": "Enhanced with 1000mg of potassium per serving. Designed specifically for those on a ketogenic diet to prevent 'keto flu'.",
    "features": [
      "Massive 1000mg potassium dose",
      "No maltodextrin or sugar",
      "Real pink Himalayan salt",
      "Helps with energy and focus"
    ]
  }
];

export default function KetoElectrolytes() {
  return <ProductPage category="Keto Electrolytes" products={products} />;
}
