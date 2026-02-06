import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Lakanto Monk Fruit Sweetener",
    "rating": 4.8,
    "link": "https://www.amazon.com/Lakanto-Monkfruit-Sweetener-Sugar-Substitute/dp/B00CF2B04Q",
    "description": "Najobľúbenejšia náhrada cukru z mníšskeho ovocia."
  },
  {
    "name": "Swerve Sweetener",
    "rating": 4.7,
    "link": "https://www.amazon.com/Swerve-Sweetener-Granular-12-Ounce/dp/B0079OYLLS",
    "description": "Prírodné sladidlo, ktoré sa správa a chutí ako cukor."
  },
  {
    "name": "Wholesome Allulose Sweetener",
    "rating": 4.6,
    "link": "https://www.amazon.com/Wholesome-Sweeteners-Allulose-Sweetener-Ounce/dp/B07JGR6N7Y",
    "description": "Vzácny cukor alulóza, ktorý nezvyšuje hladinu inzulínu."
  }
];

export default function KetoSweeteners() {{
  return <ProductPage category="Keto Sweeteners" products={{products}} />;
}}
