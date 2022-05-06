let btnCalcular = document.getElementById("btnCalcular");
let dato1 = document.getElementById("datoNro1");
let dato2 = document.getElementById("datoNro2");

btnCalcular.addEventListener("click", () => {

let nro1 : number = Number(dato1.value);
let nro2 : number = Number(dato2.value);
    console.log(nro1 + nro2);
    console.log(typeof nro1);
    console.log(typeof nro2);
});