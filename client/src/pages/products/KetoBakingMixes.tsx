import ProductPage from "./ProductPage";

const products = [
  {
    "name": "King Arthur Keto Wheat Pancake Mix",
    "rating": 4.7,
    "link": "https://www.amazon.com/King-Arthur-Baking-Company-Pancake/dp/B08L5R8Z7H",
    "description": "Zmes na palacinky s nízkym obsahom sacharidov, ktoré chutia ako tie klasické. Jednoduchá príprava a skvelá textúra."
  },
  {
    "name": "Good Dee's Corn Bread Baking Mix",
    "rating": 4.6,
    "link": "https://www.amazon.com/Good-Dees-Corn-Bread-Baking/dp/B079Y9W7D7",
    "description": "Úžasná alternatíva kukuričného chleba bez obilia a cukru. Ideálne k polievkam alebo ako príloha."
  },
  {
    "name": "FitBake Keto Brownie Mix",
    "rating": 4.5,
    "link": "https://www.amazon.com/FitBake-Low-Carb-Brownie-Baking-Mix/dp/B08D6V2Z9Y",
    "description": "Vláčne a čokoládové brownies s minimom sacharidov. Rýchly dezert, ktorý uspokojí chute na sladké."
  }
];

export default function KetoBakingMixes() {
  return <ProductPage category="Keto Baking Mixes" products={products} />;
}
