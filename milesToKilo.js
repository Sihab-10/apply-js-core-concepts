function mileToKilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const myDistance = 5;
const myDistnaceToOffice = mileToKilo(myDistance);
console.log(myDistnaceToOffice);
