/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`.
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 34;
let m = 190;
let progress = (n / m) * 100;
progress = progress.toFixed(1);

function generateProgressBar(progress, length) {
  let progressBar = "|";
  let spaces = "                    ";

  let numHashes = Math.round((progress / 100) * length);
  let numSpaces = length - numHashes;

  progressBar += "#".repeat(numHashes);
  progressBar += spaces.substring(0, numSpaces);
  progressBar += "|";

  return progressBar;
}

let progressBar = generateProgressBar(progress, 50);

let description = "0%                            100%";
let spaces = "                    ";
if (progress > 0) {
  let middle = Math.round(progress);
  description = "0%";
  description += spaces.substring(0, 20 - 2);
  description += middle + "%";
  description += spaces.substring(0, 20 - middle.toString().length - 2);
  description += "100%";
}

console.log(progressBar);
console.log(description);
