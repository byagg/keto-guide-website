import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Bulletproof Brain Octane C8 MCT Oil",
    "rating": 4.8,
    "link": "https://www.amazon.com/Bulletproof-Brain-Octane-Oil-16-Ounce/dp/B00P8E0QQG",
    "description": "Pure C8 MCT oil for instant brain energy."
  },
  {
    "name": "Sports Research MCT Oil",
    "rating": 4.7,
    "link": "https://www.amazon.com/Sports-Research-MCT-Oil-Coconuts/dp/B00IDNW694",
    "description": "Versatile MCT oil from coconuts, ideal for coffee."
  },
  {
    "name": "Nature's Way Organic MCT Oil",
    "rating": 4.6,
    "link": "https://www.amazon.com/Natures-Way-Organic-MCT-Oil/dp/B01BW29S6M",
    "description": "Organic MCT oil with high user ratings."
  }
];

export default function KetoMCTOils() {{
  return <ProductPage category="Keto MCT Oils" products={{products}} />;
}}
