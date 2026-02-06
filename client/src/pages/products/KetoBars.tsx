import ProductPage from "./ProductPage";

const products = [
  {
    "name": "IQBAR Brain + Body Protein Bars",
    "rating": 4.6,
    "link": "https://www.amazon.com/IQBAR-Brain-Body-Protein-Bars/dp/B07M9S6L9G",
    "description": "Proteínové tyčinky s nootropikami pre podporu mozgu."
  },
  {
    "name": "Perfect Keto Bars",
    "rating": 4.4,
    "link": "https://www.amazon.com/Perfect-Keto-Bars-Chocolate-Chip/dp/B07M9S6L9G",
    "description": "Čisté zloženie bez umelých sladidiel a plnív."
  },
  {
    "name": "Built Bar Protein Bars",
    "rating": 4.5,
    "link": "https://www.amazon.com/Built-Bar-Protein-Bars-Variety/dp/B07M9S6L9G",
    "description": "Tyčinky s textúrou podobnou marshmallow a skvelou chuťou."
  }
];

export default function KetoBars() {{
  return <ProductPage category="Keto Bars" products={{products}} />;
}}
