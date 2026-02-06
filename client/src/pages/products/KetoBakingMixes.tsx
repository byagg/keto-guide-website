import ProductPage from "./ProductPage";

const products = [
  {
    "name": "King Arthur Keto Wheat Flour",
    "rating": 4.7,
    "link": "https://www.amazon.com/King-Arthur-Flour-Keto-Wheat/dp/B08F6S7L9G",
    "description": "Pšeničná múka so zníženým obsahom sacharidov pre pečenie."
  },
  {
    "name": "Birch Benders Keto Pancake Mix",
    "rating": 4.5,
    "link": "https://www.amazon.com/Birch-Benders-Pancake-Waffle-Keto/dp/B07M9S6L9G",
    "description": "Najlepšia zmes na keto palacinky a vafle."
  },
  {
    "name": "Carbquik Biscuit & Baking Mix",
    "rating": 4.6,
    "link": "https://www.amazon.com/Carbquik-Biscuit-Baking-Mix-3-lb/dp/B005YVU6L2",
    "description": "Univerzálna zmes na pečenie s nízkym obsahom sacharidov."
  }
];

export default function KetoBakingMixes() {{
  return <ProductPage category="Keto Baking Mixes" products={{products}} />;
}}
