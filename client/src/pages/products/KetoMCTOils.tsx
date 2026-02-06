import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Sports Research Organic MCT Oil",
    "rating": 4.8,
    "link": "https://www.amazon.com/Sports-Research-Organic-MCT-Oil/dp/B00P9S6D9E",
    "description": "Čistý organický MCT olej z kokosových orechov bohatý na C8 a C10. Bez chuti a zápachu, ideálny do nepriestrelnej kávy."
  },
  {
    "name": "Nature's Way Organic MCT Oil",
    "rating": 4.7,
    "link": "https://www.amazon.com/Natures-Way-Organic-MCT-Oil/dp/B0181U4X06",
    "description": "Cenovo dostupný a vysoko kvalitný MCT olej, ktorý poskytuje rýchlu energiu pre mozog a podporuje spaľovanie tukov."
  },
  {
    "name": "Bulletproof Brain Octane C8 MCT Oil",
    "rating": 4.6,
    "link": "https://www.amazon.com/Bulletproof-Brain-Octane-Oil-Ounces/dp/B00P8E0QQG",
    "description": "Najčistejšia forma C8 MCT oleja pre maximálnu produkciu ketónov a mentálnu jasnosť. Zlatý štandard v kategórii."
  }
];

export default function KetoMCTOils() {
  return <ProductPage category="Keto MCT Oils" products={products} />;
}
