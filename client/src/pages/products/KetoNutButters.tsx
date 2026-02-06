import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Justin's Classic Almond Butter",
    "rating": 4.8,
    "link": "https://www.amazon.com/Justins-Classic-Almond-Butter-Ounce/dp/B00E1XPY96",
    "description": "Čisté mandľové maslo s minimom ingrediencií. Prirodzene keto a vynikajúce ako rýchly snack."
  },
  {
    "name": "NuttZo Organic Power Fuel 7 Nut & Seed Butter",
    "rating": 4.7,
    "link": "https://www.amazon.com/NuttZo-Organic-Power-Crunchy-Butter/dp/B005P0U2MK",
    "description": "Unikátna zmes 7 druhov orechov a semienok bez arašidov. Bohaté na živiny a zdravé tuky."
  },
  {
    "name": "Perfect Keto Nut Butter",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Nut-Butter-Macadamia/dp/B07KPP7B3G",
    "description": "Zmes makadamových a kešu orechov s prídavkom MCT oleja. Navrhnuté pre maximálny pôžitok bez cukru."
  }
];

export default function KetoNutButters() {
  return <ProductPage category="Keto Nut Butters" products={products} />;
}
