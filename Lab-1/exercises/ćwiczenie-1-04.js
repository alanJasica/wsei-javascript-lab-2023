/**
 * Napisz skrypt, który generuje losowy łańcuch o długości w zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString
 */

let length = 7;
function generateRandomString(length) {
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = " ";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
let randomString = generateRandomString(length);
console.log(randomString);
