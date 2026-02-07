import ProductPage from "./ProductPage";

const products = [
  {
    "name": "King Arthur Keto Wheat Pancake Mix",
    "rating": 4.7,
    "link": "https://www.amazon.com/King-Arthur-Baking-Company-Pancake/dp/B01ARKOT4U?tag=veinhealthhub-20",
    "description": "A low-carb pancake mix that tastes like the real thing. Simple to prepare with a great texture.",
    "features": [
      "Gluten-free formula",
      "Low net carbs per serving",
      "Easy to prepare",
      "Great taste and texture"
    ]
  },
  {
    "name": "Good Dee's Corn Bread Baking Mix",
    "rating": 4.6,
    "link": "https://www.amazon.com/Good-Dees-Corn-Bread-Baking/dp/B07DK7RVG1?tag=veinhealthhub-20",
    "description": "An amazing cornbread alternative without grains or sugar. Perfect with soups or as a side dish.",
    "features": [
      "Grain-free and sugar-free",
      "Made with almond flour",
      "Naturally sweetened",
      "Authentic cornbread taste"
    ]
  },
  {
    "name": "FitBake Keto Brownie Mix",
    "rating": 4.5,
    "link": "https://www.amazon.com/FitBake-Low-Carb-Brownie-Baking-Mix/dp/B0C2GQFK54?tag=veinhealthhub-20",
    "description": "Moist and chocolatey brownies with minimal carbs. A quick dessert to satisfy your sweet tooth.",
    "features": [
      "Only 1g net carb per brownie",
      "Premium almond flour base",
      "Rich chocolate flavor",
      "No artificial sweeteners"
    ]
  }
];

export default function KetoBakingMixes() {
  return <ProductPage category="Keto Baking Mixes" products={products} />;
}
