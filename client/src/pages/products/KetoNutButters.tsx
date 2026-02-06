import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Justin's Almond Butter",
    "rating": 4.7,
    "link": "https://www.amazon.com/Justins-Classic-Almond-Butter-Ounce/dp/B00E1XPY66",
    "description": "Classic almond butter with clean ingredients."
  },
  {
    "name": "SuperFat Nut Butters",
    "rating": 4.5,
    "link": "https://www.amazon.com/SuperFat-Keto-Nut-Butter-Variety/dp/B07M9S6L9G",
    "description": "Nut butter blends with functional ingredients."
  },
  {
    "name": "Barney Butter Almond Butter",
    "rating": 4.6,
    "link": "https://www.amazon.com/Barney-Butter-Almond-Smooth-Ounce/dp/B00E1XPY66",
    "description": "Smooth almond butter without skins, great taste."
  }
];

export default function KetoNutButters() {{
  return <ProductPage category="Keto Nut Butters" products={{products}} />;
}}
