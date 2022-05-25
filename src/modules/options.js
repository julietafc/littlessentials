const sizes = [
  { name: "Newborn", age: "(0-3 months)" },
  { name: "Baby", age: "(3-12 months)" },
  { name: "Junior", age: "(1-3 years)" },
  { name: "Youngster", age: "(3-6 years)" },
];

const clothStyles = [
  {
    name: "playful",
    colors: ["F6ECEC", "EEEFFD", "C1C0CF", "DD8C58", "383F48"],
    url1: "./assets/img08.png",
    url2: "./assets/img09.png",
  },
  {
    name: "earth",
    colors: ["FFF8F8", "F2E3DB", "D0D0D0", "E5AE4A", "AB5E11"],
    url1: "./assets/im01.png",
    url2: "./assets/img07.png",
  },
  {
    name: "poetic",
    colors: ["F5F5FC", "EAD2BF", "F0AFA7", "B17562", "89482B"],
    url1: "./assets/im01.png",
    url2: "./assets/img07.png",
  },
];

const plans = [
  {
    name: "Basic essentials",
    period: "(monthly subsription)",
    items: 15,
    price: 249,
    products: ["2 Short  & 2 long onesies", "2 Pijamas", "3 Pants", "1 Sweater", "1 Hat", "2 Burping clothes", "2 Socks", "1 Raddle", "2 Pacifier & 2 clips", "1 Toy", "1 Cuddle cloth", "1 Portable changing mat", "1 Swaddle", "1 Teether"],
    btnLabel: "Select Basic",
    bestValue: false,
  },
  {
    name: "Seasonal essentials",
    period: "(3 months subsription)",
    items: 36,
    price: 499,
    products: ["2 Short  & 2 long onesies", "2 Pijamas", "3 Pants", "1 Sweater", "1 Hat", "2 Burping clothes", "2 Socks", "1 Raddle", "2 Pacifier & 2 clips", "1 Toy", "1 Cuddle cloth", "1 Portable changing mat", "1 Swaddle", "1 Teether"],
    btnLabel: "Select Seasonal",
    bestValue: true,
  },
];

class Subscription {
  constructor(userID, size, style, plan) {}
}

export { sizes, clothStyles, plans };
