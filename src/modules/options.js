const sizes = [
  { name: "Newborn", age: "(0-3 months)" },
  { name: "Baby", age: "(3-12 months)" },
  { name: "Junior", age: "(1-3 years)" },
  { name: "Youngster", age: "(3-6 years)" },
];

const clothStyles = [
  {
    name: "Playful",
    colors: ["F6ECEC", "EEEFFD", "C1C0CF", "DD8C58", "383F48"],
    url1: "./assets/webP/littlessentials_playful-package.webp",
    url2: "./assets/webP/littlessentials_playful-package2.webp",
  },
  {
    name: "Earth",
    colors: ["FFF8F8", "F2E3DB", "D0D0D0", "E5AE4A", "AB5E11"],
    url1: "./assets/webP/littlessentials_earth-package.webp",
    url2: "./assets/webP/littlessentials_earth-package2.webp",
  },
  {
    name: "Poetic",
    colors: ["F5F5FC", "EAD2BF", "F0AFA7", "B17562", "89482B"],
    url1: "./assets/webP/littlessentials_poetic-package.webp",
    url2: "./assets/webP/littlessentials_poetic-package2.webp",
  },
];

const plans = [
  {
    name: "Basic essentials",
    period: "(monthly subscription)",
    periodNom: "month",
    items: 15,
    price: 249,
    products: ["2 short onesies", "2 long onesies", "2 pijamas", "2 pants", "1 sweater", "2 burping cloths", "2 socks", "1 pacifier & 1 clip"],
    btnLabel: "Select Basic",
    bestValue: false,
  },
  {
    name: "Seasonal essentials",
    period: "(3 months subscription)",
    periodNom: "3 months",
    items: 36,
    price: 499,
    products: ["2 short  & 2 long onesies", "2 pijamas", "3 pants", "1 sweater", "1 hat", "2 burping cloths", "2 socks", "1 rattle", "2 pacifier & 2 clips", "1 toy", "1 cuddle cloth", "1 portable changing mat", "1 swaddle", "1 teether"],
    btnLabel: "Select Seasonal",
    bestValue: true,
  },
];

class Subscription {
  constructor(_theuser) {
    this.theuser = _theuser;
    this.size = null;
    this.style = null;
    this.plan = null;
    this.address = null;
  }

  //getters
  get theuser() {
    return this.theuser;
  }

  get userID() {
    return this.theuser.uid;
  }
  get userFullName() {
    return this.theuser.displayName;
  }
  get userFirstName() {
    return this.firstName();
  }

  get size() {
    return this.size;
  }

  get style() {
    return this.style;
  }

  get plan() {
    return this.plan;
  }

  get price() {
    return this.plan.price;
  }

  get address() {
    return this.address;
  }

  //setters
  set theuser(usuario) {
    this.theuser = usuario;
  }

  set size(size) {
    this.size = sizes[size];
  }

  set style(style) {
    this.style = clothStyles[style];
  }

  set plan(plan) {
    this.plan = plans[plan];
  }

  set address(address) {
    this.address = address;
  }

  //methods
  firstName() {
    if (!this.theuser.displayName) {
      return null;
    }
    const fullName = this.theuser.displayName.split(" ");
    return fullName[0];
  }
}

export { sizes, clothStyles, plans, Subscription };
