import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Perfect Keto Exogenous Ketones",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Exogenous-Ketones-Supplement/dp/B01M0S6L9G",
    "description": "BHB soli pre rýchlejší vstup do ketózy a energiu."
  },
  {
    "name": "Kiss My Keto Exogenous Ketones",
    "rating": 4.3,
    "link": "https://www.amazon.com/Kiss-My-Keto-Exogenous-Ketones/dp/B01M0S6L9G",
    "description": "Efektívny doplnok pre zvýšenie hladiny ketónov."
  },
  {
    "name": "Nutricost Exogenous Ketones",
    "rating": 4.4,
    "link": "https://www.amazon.com/Nutricost-Exogenous-Ketones-BHB-Salts/dp/B01M0S6L9G",
    "description": "Cenovo dostupný BHB doplnok pre keto diétu."
  }
];

export default function KetoSupplements() {{
  return <ProductPage category="Keto Supplements" products={{products}} />;
}}
