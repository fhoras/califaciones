//let alumno = document.getElementById("apenom");

let apenom: string = prompt("Ingrese apellido y nombre: ");
let notaFinal: number = 0;

while (apenom !== "") {
  let notaPractica: number = Number(prompt("Nota práctica"));
  let notaProblemas: number = Number(prompt("Nota problemas"));
  let notaTeorica: number = Number(prompt("Nota teórica"));
  if (
    notaPractica <= 10 &&
    notaPractica >= 0 &&
    notaProblemas <= 10 &&
    notaProblemas >= 0 &&
    notaTeorica <= 10 &&
    notaTeorica >= 0
  ) {
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
    console.log("La nota final del alumno " + apenom + " es: " + notaFinal);
  } else {
    console.log("Error en el ingreso de notas, vuelva a intentar");
  }
  apenom = prompt("Ingrese apellido y nombre: ");
}
console.log("Fin de la carga de notas");
