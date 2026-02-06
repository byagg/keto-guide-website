import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Transparent Labs Whey Protein Isolate",
    "rating": 4.9,
    "link": "https://www.transparentlabs.com/products/protein-series-100-grass-fed-whey-protein-isolate",
    "description": "High-quality whey isolate from grass-fed cows."
  },
  {
    "name": "Keto Science Keto Shake Powder",
    "rating": 4.5,
    "link": "https://www.amazon.com/Keto-Science-Chocolate-Replacement-Collagen/dp/B07B9S6L9G",
    "description": "Complete meal replacement with MCT oil and collagen."
  },
  {
    "name": "Nutricost Whey Protein Isolate",
    "rating": 4.6,
    "link": "https://www.amazon.com/Nutricost-Whey-Protein-Isolate-Unflavored/dp/B01B36A9PU",
    "description": "Pure whey isolate without flavor or additives."
  }
];

export default function KetoProteinPowders() {{
  return <ProductPage category="Keto Protein Powders" products={{products}} />;
}}
