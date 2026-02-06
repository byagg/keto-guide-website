import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Purely Optimal Keto BHB Capsules",
    "rating": 4.7,
    "link": "https://www.amazon.com/Purely-Optimal-Keto-BHB-Supplements/dp/B07G7P6P7B",
    "description": "Exogénne ketóny vo forme kapsúl pre ľahšie dosiahnutie a udržanie ketózy a zvýšenie hladiny energie."
  },
  {
    "name": "Keto Science Ketones Powder",
    "rating": 4.6,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Exogenous-Ketones/dp/B079M2K6W3",
    "description": "Prášok s obsahom BHB solí a elektrolytov pre rýchly štart spaľovania tukov a podporu metabolizmu."
  },
  {
    "name": "Dr. Boz Keto BHB Powder",
    "rating": 4.5,
    "link": "https://www.amazon.com/Dr-Boz-Keto-BHB-Powder/dp/B08D6X9G6X",
    "description": "Vysoko kvalitné exogénne ketóny od lekárky špecializujúcej sa na keto, navrhnuté pre maximálnu účinnosť."
  }
];

export default function KetoSupplements() {
  return <ProductPage category="Keto Supplements" products={products} />;
}
