import ProductPage from "./ProductPage";

const products = [
  {
    "name": "HighKey Mini Cookies",
    "rating": 4.8,
    "link": "https://www.amazon.com/HighKey-Snacks-Keto-Food-Cookies/dp/B07JGR6N7Y",
    "description": "Low-carb cookies without added sugar, ideal for the keto diet. Tastes nearly identical to regular cookies but with clean ingredients."
  },
  {
    "name": "Quest Tortilla Style Protein Chips",
    "rating": 4.7,
    "link": "https://www.amazon.com/Quest-Nutrition-Tortilla-Protein-Chips/dp/B07F9S6L9G",
    "description": "Crunchy protein chips with minimal carbohydrates. A great alternative to regular chips for savory snack lovers."
  },
  {
    "name": "Whisps Cheese Crisps",
    "rating": 4.6,
    "link": "https://www.amazon.com/Whisps-Cheese-Crisps-Parmesan-Gluten-Free/dp/B01B36A9PU",
    "description": "100% cheese snacks, naturally carb-free. Made from pure quality cheese, baked until crispy."
  }
];

export default function KetoSnacks() {
  return <ProductPage category="Keto Snacks" products={products} />;
}
