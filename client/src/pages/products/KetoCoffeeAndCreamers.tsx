import ProductPage from "./ProductPage";

const products = [
  {
    "name": "NutPods Dairy-Free Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/nutpods-Unsweetened-Dairy-Free-Creamer-Variety/dp/B01B36A9PU",
    "description": "Rastlinná smotana do kávy bez cukru a sacharidov."
  },
  {
    "name": "Laird Superfood Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Laird-Superfood-Creamer-Unsweetened-Gluten-Free/dp/B01B36A9PU",
    "description": "Funkčná smotana s kokosovým mliekom a Aquaminom."
  },
  {
    "name": "Rapid Fire Ketogenic Coffee",
    "rating": 4.4,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Coffee-Instant/dp/B01B36A9PU",
    "description": "Instantná keto káva s maslom a MCT olejom."
  }
];

export default function KetoCoffeeAndCreamers() {{
  return <ProductPage category="Keto Coffee & Creamers" products={{products}} />;
}}
