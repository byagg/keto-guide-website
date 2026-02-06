import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Quest Nutrition Protein Bars",
    "rating": 4.8,
    "link": "https://www.amazon.com/Quest-Nutrition-Chocolate-Protein-12-Count/dp/B00DLDH1N2",
    "description": "Klasika medzi proteínovými tyčinkami s vysokým obsahom vlákniny a minimom čistých sacharidov. Široká škála príchutí."
  },
  {
    "name": "IQBAR Brain and Body Plant Protein Bars",
    "rating": 4.6,
    "link": "https://www.amazon.com/IQBAR-Brain-Body-Plant-Protein/dp/B07G7L9Z1M",
    "description": "Vegánske keto tyčinky zamerané na zdravie mozgu. Obsahujú čisté ingrediencie a žiadne cukrové alkoholy."
  },
  {
    "name": "Perfect Keto Bars",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Bar-Chocolate-Almond/dp/B07L9P6S9W",
    "description": "Navrhnuté špeciálne pre ketózu s minimálnym vplyvom na hladinu cukru v krvi. Obsahujú kolagén a zdravé tuky."
  }
];

export default function KetoBars() {
  return <ProductPage category="Keto Bars" products={products} />;
}
