/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######
 */
let rectWidth = 10;
let rectHeight = 10;
let rectBorderSymbol = "#";
function validateVariables(width, height, symbol) {
  return (
    width >= 0 &&
    width < 81 &&
    height >= 0 &&
    height < 81 &&
    symbol.trim().length === 1
  );
}

if (!validateVariables(rectWidth, rectHeight, rectBorderSymbol)) {
  console.log("Nieprawidłowe wartości zmiennych.");
} else {
  let rectString = "";

  for (let i = 0; i < rectHeight; i++) {
    if (i === 0 || i === rectHeight - 1) {
      rectString += rectBorderSymbol.repeat(rectWidth) + "\n";
    } else {
      rectString +=
        rectBorderSymbol + " ".repeat(rectWidth - 2) + rectBorderSymbol + "\n";
    }
  }
  console.log(rectString);
}
