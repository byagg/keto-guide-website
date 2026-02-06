import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LMNT Keto Electrolyte Powder",
    "rating": 4.8,
    "link": "https://www.amazon.com/LMNT-Electrolyte-Powder-Packets-Hydration/dp/B084HQ4N92?tag=veinhealthhub-20",
    "description": "Premium electrolytes with high sodium, potassium, and magnesium. No sugar or artificial ingredients. Best choice to combat keto flu."
  },
  {
    "name": "Ultima Replenisher Hydration Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Ultima-Replenisher-Electrolyte-Powder-Hydration/dp/B000OP252C?tag=veinhealthhub-20",
    "description": "A popular blend of 6 key electrolytes sweetened with stevia. Great taste and zero calories for daily hydration."
  },
  {
    "name": "Dr. Berg's Electrolyte Powder",
    "rating": 4.6,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Supplement/dp/B00KFSR8S8?tag=veinhealthhub-20",
    "description": "Highly concentrated potassium in every serving, designed for maximum energy and muscle support during a keto diet."
  }
];

export default function KetoElectrolytes() {
  return <ProductPage category="Keto Electrolytes" products={products} />;
}
