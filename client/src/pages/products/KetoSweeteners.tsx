import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Swerve Ultimate Sugar Replacement",
    "rating": 4.8,
    "link": "https://www.amazon.com/Swerve-Sweetener-Granular-12-Ounce/dp/B0079OYALS",
    "description": "Best 1:1 sugar replacement that behaves and tastes like real sugar without glycemic impact. Ideal for baking and cooking."
  },
  {
    "name": "Lakanto Monk Fruit Sweetener",
    "rating": 4.7,
    "link": "https://www.amazon.com/Lakanto-Monkfruit-Sweetener-Sugar-Substitute/dp/B00CF2B0BC",
    "description": "Blend of monk fruit and erythritol. Natural sweetener with zero calories and great taste without aftertaste."
  },
  {
    "name": "Wholesome Allulose Sweetener",
    "rating": 4.6,
    "link": "https://www.amazon.com/Wholesome-Sweeteners-Allulose-12-Ounce/dp/B07H8QHD7Z",
    "description": "Rare sugar that your body doesn't metabolize. Caramelizes like sugar and is ideal for ice cream and desserts."
  }
];

export default function KetoSweeteners() {
  return <ProductPage category="Keto Sweeteners" products={products} />;
}
