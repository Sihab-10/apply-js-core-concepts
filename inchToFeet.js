// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// ----------------------------

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log("dada feet:", dadaFeet);

// ------------------------------

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log("dadi feet:", dadiFeet);

// -------------------------------------------------

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const dadaFeet = inchToFeet(84);
const dadiFeet = inchToFeet(70).toFixed(2);
console.log(dadaFeet, dadiFeet);
