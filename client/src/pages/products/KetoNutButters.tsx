import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Justin's Almond Butter",
    "rating": 4.7,
    "link": "https://www.amazon.com/Justins-Classic-Almond-Butter-Ounce/dp/B00E1XPY66",
    "description": "Klasické mandľové maslo s čistým zložením."
  },
  {
    "name": "SuperFat Nut Butters",
    "rating": 4.5,
    "link": "https://www.amazon.com/SuperFat-Keto-Nut-Butter-Variety/dp/B07M9S6L9G",
    "description": "Zmesi orechových masiel s funkčnými ingredienciami."
  },
  {
    "name": "Barney Butter Almond Butter",
    "rating": 4.6,
    "link": "https://www.amazon.com/Barney-Butter-Almond-Smooth-Ounce/dp/B00E1XPY66",
    "description": "Hladké mandľové maslo bez šupiek, skvelá chuť."
  }
];

export default function KetoNutButters() {{
  return <ProductPage category="Keto Nut Butters" products={{products}} />;
}}
