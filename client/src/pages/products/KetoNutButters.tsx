import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Justin's Classic Almond Butter",
    "rating": 4.8,
    "link": "https://www.amazon.com/Justins-Classic-Almond-Butter-Ounce/dp/B000V79VSY?tag=veinhealthhub-20",
    "description": "Pure almond butter with minimal ingredients. Naturally keto-friendly and excellent as a quick snack.",
    "features": [
      "Only 2 ingredients",
      "No added sugar or oil",
      "Creamy texture",
      "Responsibly sourced"
    ]
  },
  {
    "name": "NuttZo Organic Power Fuel 7 Nut & Seed Butter",
    "rating": 4.7,
    "link": "https://www.amazon.com/NuttZo-Organic-Power-Crunchy-Butter/dp/B06Y3V3S2M?tag=veinhealthhub-20",
    "description": "A unique blend of 7 types of nuts and seeds without peanuts. Rich in nutrients and healthy fats.",
    "features": [
      "7 nuts and seeds blend",
      "Organic certified",
      "No added sugar",
      "Complete nutrient profile"
    ]
  },
  {
    "name": "Perfect Keto Nut Butter",
    "rating": 4.5,
    "link": "https://www.amazon.com/Perfect-Keto-Nut-Butter-Macadamia/dp/B07ZLGPRN3?tag=veinhealthhub-20",
    "description": "A blend of macadamia and cashew nuts with added MCT oil. Designed for maximum enjoyment without the sugar.",
    "features": [
      "Macadamia and cashew blend",
      "MCT oil added",
      "No palm oil",
      "No added sugar"
    ]
  }
];

export default function KetoNutButters() {
  return <ProductPage category="Keto Nut Butters" products={products} />;
}
