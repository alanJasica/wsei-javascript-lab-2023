/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzymską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie zmieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
let decNumber = 10;
let romanNumber = " ";
if (decNumber === undefined || decNumber === null) {
  romanNumber = "Decimal number is undefined or null!";
} else if (decNumber < 1 || decNumber > 10) {
  romanNumber = "Decimal number is out of range!";
} else {
  let romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  romanNumber = romanNumerals[decNumber - 1];
}

console.log(romanNumber);
