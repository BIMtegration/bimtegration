import data from "./data.json" with { type: "json" };
const tablero = document.getElementById("tablero");
const a = 10;
const b = 60;
const colores = data
let texto = "";
for (var i = 0; i < a; i++) {
  for (var j = 1; j <= b; j++) {
    for (let [keys, values] of Object.entries(colores)) {
      for (let [key, value] of Object.entries(values)) {
        let posicion = String(i + "," + j);
        if (posicion === value) {
          texto += j + "px " + i + "px 0 " + keys + " ,";
        }
      }
    }
  }
}
texto = texto.substring(0, texto.length - 1);
tablero.style.boxShadow = texto;
