import ProductPage from "./ProductPage";

const products = [
  {
    "name": "HighKey Mini Cookies",
    "rating": 4.8,
    "link": "https://www.amazon.com/HighKey-Snacks-Keto-Food-Cookies/dp/B08QW7L2CJ?tag=veinhealthhub-20",
    "image": "/images/products/highkey-cookies.jpg",
    "description": "Low-carb cookies with no added sugar, perfect for the keto diet. They taste almost identical to classic cookies but with a clean ingredient profile.",
    "features": [
      "Only 1g net carb per serving",
      "Gluten-free and grain-free",
      "Naturally sweetened with Erythritol",
      "Perfect crunchy texture"
    ]
  },
  {
    "name": "Quest Tortilla Style Protein Chips",
    "rating": 4.7,
    "link": "https://www.amazon.com/Quest-Nutrition-Tortilla-Protein-Chips/dp/B07RQVPYT7?tag=veinhealthhub-20",
    "image": "/images/products/quest-chips.png",
    "description": "Crunchy protein chips with minimal carbs. A great alternative to traditional chips for those who love savory snacks.",
    "features": [
      "18g-19g protein per bag",
      "Only 4g net carbs",
      "Baked, never fried",
      "Available in many savory flavors"
    ]
  },
  {
    "name": "Whisps Cheese Crisps",
    "rating": 4.6,
    "link": "https://www.amazon.com/Whisps-Cheese-Crisps-Parmesan-Gluten-Free/dp/B07D5JGVN6?tag=veinhealthhub-20",
    "image": "/images/products/whisps-crisps.png",
    "description": "100% cheese snacks, naturally carb-free. Made from high-quality cheese and baked to a perfect crunch.",
    "features": [
      "Single ingredient: 100% real cheese",
      "Zero grams of sugar",
      "Excellent source of calcium",
      "High protein, low carb snack"
    ]
  }
];

export default function KetoSnacks() {
  return <ProductPage category="Keto Snacks" products={products} />;
}
