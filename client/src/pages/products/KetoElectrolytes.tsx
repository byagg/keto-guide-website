import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LMNT Keto Electrolyte Powder",
    "rating": 4.8,
    "link": "https://www.amazon.com/LMNT-Electrolyte-Powder-Packets-Hydration/dp/B084HQ4N92",
    "description": "Prémiové elektrolyty s vysokým obsahom sodíka, draslíka a horčíka bez cukru a umelých prísad. Najlepšia voľba proti keto chrípke."
  },
  {
    "name": "Ultima Replenisher Hydration Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Ultima-Replenisher-Electrolyte-Powder-Hydration/dp/B000OP252C",
    "description": "Obľúbená zmes 6 kľúčových elektrolytov sladená stéviou. Skvelá chuť a nulové kalórie pre každodennú hydratáciu."
  },
  {
    "name": "Dr. Berg's Electrolyte Powder",
    "rating": 4.6,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Supplement/dp/B00KFSR8S8",
    "description": "Vysoko koncentrovaný draslík v každej dávke, navrhnutý pre maximálnu energiu a podporu svalov počas keto diéty."
  }
];

export default function KetoElectrolytes() {
  return <ProductPage category="Keto Electrolytes" products={products} />;
}
