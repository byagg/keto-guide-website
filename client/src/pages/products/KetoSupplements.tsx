import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Perfect Keto Exogenous Ketones",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Exogenous-Ketones-Supplement/dp/B01M0S6L9G",
    "description": "BHB salts for faster entry into ketosis and energy."
  },
  {
    "name": "Kiss My Keto Exogenous Ketones",
    "rating": 4.3,
    "link": "https://www.amazon.com/Kiss-My-Keto-Exogenous-Ketones/dp/B01M0S6L9G",
    "description": "Effective supplement for increasing ketone levels."
  },
  {
    "name": "Nutricost Exogenous Ketones",
    "rating": 4.4,
    "link": "https://www.amazon.com/Nutricost-Exogenous-Ketones-BHB-Salts/dp/B01M0S6L9G",
    "description": "Affordable BHB supplement for the keto diet."
  }
];

export default function KetoSupplements() {{
  return <ProductPage category="Keto Supplements" products={{products}} />;
}}
