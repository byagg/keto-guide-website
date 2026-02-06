import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Optimum Nutrition Gold Standard 100% Whey",
    "rating": 4.8,
    "link": "https://www.amazon.com/Optimum-Nutrition-Standard-Protein-Chocolate/dp/B000QSNYGI",
    "description": "Svetovo najpredávanejší srvátkový proteín s vynikajúcou chuťou a nízkym obsahom sacharidov, ideálny pre regeneráciu svalov."
  },
  {
    "name": "Isopure Zero Carb Protein Powder",
    "rating": 4.7,
    "link": "https://www.amazon.com/Isopure-Protein-Powder-Isolate-Flavor/dp/B000E95HP0",
    "description": "Čistý srvátkový izolát s absolútne nulovým obsahom sacharidov. Perfektný pre tých, ktorí chcú maximalizovať príjem bielkovín bez cukru."
  },
  {
    "name": "Keto Science Keto Shake",
    "rating": 4.5,
    "link": "https://www.amazon.com/Keto-Science-Ketogenic-Meal-Replacement/dp/B078XG9N5T",
    "description": "Komplexná náhrada jedla navrhnutá špeciálne pre keto, s obsahom MCT olejov a kvalitných tukov pre podporu ketózy."
  }
];

export default function KetoProteinPowders() {
  return <ProductPage category="Keto Protein Powders" products={products} />;
}
