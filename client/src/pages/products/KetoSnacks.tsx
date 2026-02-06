import ProductPage from "./ProductPage";

const products = [
  {
    "name": "HighKey Mini Cookies",
    "rating": 4.8,
    "link": "https://www.amazon.com/HighKey-Snacks-Keto-Food-Cookies/dp/B07JGR6N7Y",
    "description": "Nízkosacharidové sušienky bez pridaného cukru, ideálne pre keto diétu."
  },
  {
    "name": "Quest Tortilla Style Protein Chips",
    "rating": 4.7,
    "link": "https://www.amazon.com/Quest-Nutrition-Tortilla-Protein-Chips/dp/B07F9S6L9G",
    "description": "Chrumkavé proteínové chipsy s minimom sacharidov."
  },
  {
    "name": "Whisps Cheese Crisps",
    "rating": 4.6,
    "link": "https://www.amazon.com/Whisps-Cheese-Crisps-Parmesan-Gluten-Free/dp/B01B36A9PU",
    "description": "100% syrové snacky, prirodzene bez sacharidov."
  }
];

export default function KetoSnacks() {{
  return <ProductPage category="Keto Snacks" products={{products}} />;
}}
