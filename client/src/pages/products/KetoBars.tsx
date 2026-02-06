import ProductPage from "./ProductPage";

const products = [
  {
    "name": "IQBAR Brain + Body Protein Bars",
    "rating": 4.6,
    "link": "https://www.amazon.com/IQBAR-Brain-Body-Protein-Bars/dp/B07M9S6L9G",
    "description": "Protein bars with nootropics for brain support."
  },
  {
    "name": "Perfect Keto Bars",
    "rating": 4.4,
    "link": "https://www.amazon.com/Perfect-Keto-Bars-Chocolate-Chip/dp/B07M9S6L9G",
    "description": "Clean ingredients without artificial sweeteners and fillers."
  },
  {
    "name": "Built Bar Protein Bars",
    "rating": 4.5,
    "link": "https://www.amazon.com/Built-Bar-Protein-Bars-Variety/dp/B07M9S6L9G",
    "description": "Bars with a marshmallow-like texture and great taste."
  }
];

export default function KetoBars() {{
  return <ProductPage category="Keto Bars" products={{products}} />;
}}
