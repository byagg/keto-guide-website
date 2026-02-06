import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Purely Optimal Keto BHB Capsules",
    "rating": 4.7,
    "link": "https://www.amazon.com/Purely-Optimal-Keto-BHB-Supplements/dp/B0814C2PHN?tag=veinhealthhub-20",
    "description": "Exogenous ketones in capsule form to help you reach and maintain ketosis more easily while boosting energy."
  },
  {
    "name": "Keto Science Ketones Powder",
    "rating": 4.6,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Exogenous-Ketones/dp/B07K2VQ9N3?tag=veinhealthhub-20",
    "description": "A powder containing BHB salts and electrolytes to jumpstart fat burning and support your metabolism."
  },
  {
    "name": "Dr. Berg's Electrolyte Powder",
    "rating": 4.5,
    "link": "https://www.amazon.com/Dr-Bergs-Electrolyte-Powder-Supplement/dp/B06W9F3X88?tag=veinhealthhub-20",
    "description": "Highly concentrated potassium in every serving, designed for maximum energy and muscle support during a keto diet."
  }
];

export default function KetoSupplements() {
  return <ProductPage category="Keto Supplements" products={products} />;
}
