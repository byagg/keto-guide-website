import ProductPage from "./ProductPage";

const products = [
  {
    "name": "NutPods Dairy-Free Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/nutpods-Unsweetened-Dairy-Free-Creamer-Variety/dp/B01B36A9PU",
    "description": "Plant-based coffee creamer without sugar and carbs."
  },
  {
    "name": "Laird Superfood Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Laird-Superfood-Creamer-Unsweetened-Gluten-Free/dp/B01B36A9PU",
    "description": "Functional creamer with coconut milk and Aquamin."
  },
  {
    "name": "Rapid Fire Ketogenic Coffee",
    "rating": 4.4,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Coffee-Instant/dp/B01B36A9PU",
    "description": "Instant keto coffee with butter and MCT oil."
  }
];

export default function KetoCoffeeAndCreamers() {{
  return <ProductPage category="Keto Coffee & Creamers" products={{products}} />;
}}
