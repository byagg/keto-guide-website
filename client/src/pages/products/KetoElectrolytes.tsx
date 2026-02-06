import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LMNT Keto Electrolyte Powder",
    "rating": 4.9,
    "link": "https://www.amazon.com/LMNT-Electrolyte-Powder-Packets-Hydration/dp/B084HQ4NMM",
    "description": "Top-tier sugar-free electrolytes, designed specifically for keto."
  },
  {
    "name": "Ultima Replenisher Electrolyte Mix",
    "rating": 4.7,
    "link": "https://www.amazon.com/Ultima-Replenisher-Electrolyte-Powder-Variety/dp/B01IIGVUQA",
    "description": "Complete mix of 6 electrolytes and minerals without calories."
  },
  {
    "name": "Dr. Berg Zero Sugar Hydration",
    "rating": 4.8,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Hydration/dp/B00P2X19S0",
    "description": "High potassium content for optimal hydration during keto."
  }
];

export default function KetoElectrolytes() {{
  return <ProductPage category="Keto Electrolytes" products={{products}} />;
}}
