import ProductPage from "./ProductPage";

const products = [
  {
    "name": "King Arthur Keto Wheat Pancake Mix",
    "rating": 4.7,
    "link": "https://www.amazon.com/King-Arthur-Baking-Company-Pancake/dp/B08L5R8Z7H",
    "description": "Low-carb pancake mix that tastes like the real thing. Easy preparation and great texture."
  },
  {
    "name": "Good Dee's Corn Bread Baking Mix",
    "rating": 4.6,
    "link": "https://www.amazon.com/Good-Dees-Corn-Bread-Baking/dp/B079Y9W7D7",
    "description": "Amazing cornbread alternative without grains and sugar. Perfect with soups or as a side dish."
  },
  {
    "name": "FitBake Keto Brownie Mix",
    "rating": 4.5,
    "link": "https://www.amazon.com/FitBake-Low-Carb-Brownie-Baking-Mix/dp/B08D6V2Z9Y",
    "description": "Moist and chocolatey brownies with minimal carbs. Quick dessert that satisfies sweet cravings."
  }
];

export default function KetoBakingMixes() {
  return <ProductPage category="Keto Baking Mixes" products={products} />;
}
