/**
 * Napisz skrypt, który w łańcuchu triangle generuje ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierszy powinna odpowiadać
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * #####
 * Uruchom skrypt dla różnych wartości height np:
 * height = 1
 * height = 0
 * height = 10
 */
let hgt = 10;
let triangle = "";
for (let i = 1; i <= hgt; i++) {
  for (let j = 1; j <= i; j++) {
    triangle += "#";
  }
  console.log(triangle);
}
