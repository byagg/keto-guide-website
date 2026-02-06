import ProductPage from "./ProductPage";

const products = [
  {
    "name": "Swerve Ultimate Sugar Replacement",
    "rating": 4.8,
    "link": "https://www.amazon.com/Swerve-Sweetener-Granular-12-Ounce/dp/B0079OYALS",
    "description": "Najlepšia náhrada cukru 1:1, ktorá sa správa a chutí ako skutočný cukor bez glykemického dopadu. Ideálne na pečenie."
  },
  {
    "name": "Lakanto Monk Fruit Sweetener",
    "rating": 4.7,
    "link": "https://www.amazon.com/Lakanto-Monkfruit-Sweetener-Sugar-Substitute/dp/B00CF2B0BC",
    "description": "Zmes mníšskeho ovocia (Monk Fruit) a erytritolu. Prírodné sladidlo s nulovým obsahom kalórií a skvelou chuťou bez pachuti."
  },
  {
    "name": "Wholesome Allulose Sweetener",
    "rating": 4.6,
    "link": "https://www.amazon.com/Wholesome-Sweeteners-Allulose-12-Ounce/dp/B07H8QHD7Z",
    "description": "Vzácny cukor, ktorý telo nemetabolizuje. Karamelizuje ako cukor a je ideálny do zmrzlín a dezertov."
  }
];

export default function KetoSweeteners() {
  return <ProductPage category="Keto Sweeteners" products={products} />;
}
