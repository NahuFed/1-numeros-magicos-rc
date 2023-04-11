const formulario = document.querySelector("form");
let numeroMagico = parseInt(Math.random() * 100);
let intentos = 0;
formulario.addEventListener("submit", leerDatosFormularios);

function leerDatosFormularios(e) {
  console.log("desde la funcion del formulario");
  e.preventDefault();
 
  let numeroUsuario = parseInt(document.querySelector('input').value)
  console.log(numeroUsuario)
  
 
         
      if (isNaN(numeroUsuario)) {
        alert("Numero Ingresado no valido, ingrese un numero");
      } else if (numeroUsuario < 0 || numeroUsuario > 100) {
        alert(
          "Numero ingresado no valido, ingrese un numero en el rango del 0 al 100"
        );
      } else {
        intentos++;
        console.log(intentos);
        console.log(numeroMagico);
      }
    

    if (numeroMagico === numeroUsuario) {
      alert(
        "Felicidades! Adivinaste el numero! \nnumero de intentos: " + intentos
      );
    } else if (numeroMagico > numeroUsuario) {
      alert("El numero magico es mayor");
    } else alert("El numero magico es menor");
  
}
