let datoB = document.getElementById("datoBase");
let datoA = document.getElementById("datoAltura");
let btnCalcular = document.getElementById("btnCalcular");

let base: number = datoB.value;
let altura: number = datoA.value;

let area: number = base * altura;

btnCalcular.addEventListener("click", () => {
  console.log("el area del rectangulo es ", datoB.value * datoA.value);
});
