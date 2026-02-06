import ProductPage from "./ProductPage";

const products = [
  {
    "name": "LevelUp Keto Creamer",
    "rating": 4.7,
    "link": "https://www.amazon.com/LevelUp-Clean-Keto-Creamer-MCT/dp/B07KPP7B3G",
    "description": "Prémiová smotana do kávy s MCT olejom a kolagénom. Dodá káve krémovú textúru a energiu na celé dopoludnie."
  },
  {
    "name": "Rapid Fire Keto Creamer",
    "rating": 4.5,
    "link": "https://www.amazon.com/Rapid-Fire-Ketogenic-Creamer-Ounces/dp/B071L6V23S",
    "description": "Prášková zmes zdravých tukov pre rýchlu prípravu keto kávy kdekoľvek. Obsahuje maslo z trávy a MCT."
  },
  {
    "name": "Laird Superfood Coconut Creamer",
    "rating": 4.4,
    "link": "https://www.amazon.com/Laird-Superfood-Non-Dairy-Creamer-Unsweetened/dp/B01N23V8K1",
    "description": "Rastlinná alternatíva na báze kokosu. Bez pridaného cukru, bohatá na prírodné tuky pre lahodnú chuť kávy."
  }
];

export default function KetoCoffeeAndCreamers() {
  return <ProductPage category="Keto Coffee & Creamers" products={products} />;
}
