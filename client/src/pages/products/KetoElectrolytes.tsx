import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LMNT Keto Electrolyte Powder",
    "rating": 4.9,
    "link": "https://www.amazon.com/LMNT-Electrolyte-Powder-Packets-Hydration/dp/B084HQ4NMM",
    "description": "Špičkové elektrolyty bez cukru, navrhnuté špeciálne pre keto."
  },
  {
    "name": "Ultima Replenisher Electrolyte Mix",
    "rating": 4.7,
    "link": "https://www.amazon.com/Ultima-Replenisher-Electrolyte-Powder-Variety/dp/B01IIGVUQA",
    "description": "Kompletný mix 6 elektrolytov a minerálov bez kalórií."
  },
  {
    "name": "Dr. Berg Zero Sugar Hydration",
    "rating": 4.8,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Hydration/dp/B00P2X19S0",
    "description": "Vysoký obsah draslíka pre optimálnu hydratáciu pri keto."
  }
];

export default function KetoElectrolytes() {{
  return <ProductPage category="Keto Electrolytes" products={{products}} />;
}}
