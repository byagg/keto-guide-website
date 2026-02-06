import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Swerve Ultimate Sugar Replacement",
    "rating": 4.8,
    "link": "https://www.amazon.com/Swerve-Sweetener-Granular-12-Ounce/dp/B0079OYALS",
    "description": "The best 1:1 sugar replacement that behaves and tastes like real sugar with no glycemic impact. Ideal for baking."
  },
  {
    "name": "Lakanto Monk Fruit Sweetener",
    "rating": 4.7,
    "link": "https://www.amazon.com/Lakanto-Monkfruit-Sweetener-Sugar-Substitute/dp/B00CF2B0BC",
    "description": "A blend of monk fruit and erythritol. A natural zero-calorie sweetener with great taste and no bitter aftertaste."
  },
  {
    "name": "Wholesome Allulose Sweetener",
    "rating": 4.6,
    "link": "https://www.amazon.com/Wholesome-Sweeteners-Allulose-12-Ounce/dp/B07H8QHD7Z",
    "description": "A rare sugar that the body doesn't metabolize. It caramelizes like sugar and is ideal for ice cream and desserts."
  }
];

export default function KetoSweeteners() {
  return <ProductPage category="Keto Sweeteners" products={products} />;
}
