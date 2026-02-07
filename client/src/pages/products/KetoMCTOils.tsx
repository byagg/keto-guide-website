import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Sports Research Organic MCT Oil",
    "rating": 4.8,
    "link": "https://www.amazon.com/Sports-Research-Organic-MCT-Oil/dp/B071W661GD?tag=veinhealthhub-20",
    "description": "Pure organic MCT oil from coconuts, rich in C8 and C10. Flavorless and odorless, perfect for bulletproof coffee.",
    "features": [
      "USDA organic certified",
      "C8 and C10 blend",
      "Flavorless and odorless",
      "Great value for money"
    ]
  },
  {
    "name": "Nature's Way Organic MCT Oil",
    "rating": 4.7,
    "link": "https://www.amazon.com/Natures-Way-Organic-MCT-Oil/dp/B0181U4TOI?tag=veinhealthhub-20",
    "description": "Affordable and high-quality MCT oil that provides quick brain energy and supports fat burning.",
    "features": [
      "Organic coconut source",
      "Rapid energy conversion",
      "Supports ketone production",
      "Affordable pricing"
    ]
  },
  {
    "name": "Bulletproof Brain Octane C8 MCT Oil",
    "rating": 4.6,
    "link": "https://www.amazon.com/Bulletproof-Brain-Octane-Oil-Ounces/dp/B00P8E0QQG?tag=veinhealthhub-20",
    "description": "The purest form of C8 MCT oil for maximum ketone production and mental clarity. The gold standard in its category.",
    "features": [
      "100% pure C8 MCT",
      "Maximum ketone production",
      "Enhanced mental clarity",
      "Premium quality"
    ]
  }
];

export default function KetoMCTOils() {
  return <ProductPage category="Keto MCT Oils" products={products} />;
}
