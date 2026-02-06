import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Sports Research Organic MCT Oil",
    "rating": 4.8,
    "link": "https://www.amazon.com/Sports-Research-Organic-MCT-Oil/dp/B00P9S6D9E?tag=veinhealthhub-20",
    "description": "Pure organic MCT oil from coconuts, rich in C8 and C10. Flavorless and odorless, perfect for bulletproof coffee."
  },
  {
    "name": "Nature's Way Organic MCT Oil",
    "rating": 4.7,
    "link": "https://www.amazon.com/Natures-Way-Organic-MCT-Oil/dp/B0181U4X06?tag=veinhealthhub-20",
    "description": "Affordable and high-quality MCT oil that provides quick brain energy and supports fat burning."
  },
  {
    "name": "Bulletproof Brain Octane C8 MCT Oil",
    "rating": 4.6,
    "link": "https://www.amazon.com/Bulletproof-Brain-Octane-Oil-Ounces/dp/B00P8E0QQG?tag=veinhealthhub-20",
    "description": "The purest form of C8 MCT oil for maximum ketone production and mental clarity. The gold standard in its category."
  }
];

export default function KetoMCTOils() {
  return <ProductPage category="Keto MCT Oils" products={products} />;
}
