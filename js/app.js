const boton = document.querySelector(".btn");

boton.addEventListener("click", () => {
  let numeroMagico = parseInt(Math.random() * 100);
  let numeroUsuario;
  let intentos = 0
  do {
    do {
      numeroUsuario = parseInt(prompt("Seleccione un numero del 0 al 100"));
      if (isNaN(numeroUsuario)) {
        alert("Numero Ingresado no valido, ingrese un numero");
      } else if (numeroUsuario < 0 || numeroUsuario > 100) {
        alert(
          "Numero ingresado no valido, ingrese un numero en el rango del 0 al 100"
        );
      }else{
          intentos ++
        console.log(intentos)
      }
    } while (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 100);

    if (numeroMagico === numeroUsuario) {
      alert("Felicidades! Adivinaste el numero! \nnumero de intentos: " + intentos);
    } else if (numeroMagico > numeroUsuario) {
      alert("El numero magico mayor");
    } else alert("El numero magico es menor");
  } while (confirm("volver a intentar?"));
});
