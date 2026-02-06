import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Purely Optimal Keto BHB Capsules",
    "rating": 4.7,
    "link": "https://www.amazon.com/Purely-Optimal-Keto-BHB-Supplements/dp/B07G7P6P7B",
    "description": "Exogenous ketones in capsule form to help you reach and maintain ketosis more easily while boosting energy."
  },
  {
    "name": "Keto Science Ketones Powder",
    "rating": 4.6,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Exogenous-Ketones/dp/B079M2K6W3",
    "description": "A powder containing BHB salts and electrolytes to jumpstart fat burning and support your metabolism."
  },
  {
    "name": "Dr. Boz Keto BHB Powder",
    "rating": 4.5,
    "link": "https://www.amazon.com/Dr-Boz-Keto-BHB-Powder/dp/B08D6X9G6X",
    "description": "High-quality exogenous ketones from a keto-specialist doctor, designed for maximum effectiveness."
  }
];

export default function KetoSupplements() {
  return <ProductPage category="Keto Supplements" products={products} />;
}
