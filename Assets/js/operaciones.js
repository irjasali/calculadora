let operandoA, operandoB, operacion;

const referenciasBotones = () => {
  const resultado = document.getElementById("resultado");
  const nueve = document.getElementById("nueve");
  const ocho = document.getElementById("ocho");
  const siete = document.getElementById("siete");
  const sies = document.getElementById("seis");
  const cinco = document.getElementById("cinco");
  const cuatro = document.getElementById("cuatro");
  const tres = document.getElementById("tres");
  const dos = document.getElementById("dos");
  const uno = document.getElementById("uno");
  const cero = document.getElementById("cero");
  const multiplicacion = document.getElementById("multiplicacion");
  const division = document.getElementById("division");
  const surma = document.getElementById("surma");
  const resta = document.getElementById("resta");
  const igual = document.getElementById("igual");
  const reset = document.getElementById("reset");
};

function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, callback);
  } else {
      element["on" + eventName] = callback;
  }
}




// var teclaPresionada = false;

// addEvent(document, "keypress", function (e) {

//   if(!teclaPresionada){
  
//     console.log("Tecla Presionada");
  
//     teclaPresionada = true;
//   }
  
// });


// addEvent(document, "keyup", function (e) {

//   if(teclaPresionada){
  
//     console.log("Tecla Liberada");
  
//     teclaPresionada = false;
//   }
  
// });

referenciasBotones();


addEvent(document,"keypress", (e) => {
  if (e.key === "1") {   
    resultado.innerText += "1";1
  }
});
111


uno.addEventListener("click", () => {
  resultado.innerText += "1";
});
dos.addEventListener("click", () => {
  resultado.innerText += "2";
});
tres.addEventListener("click", () => {
  resultado.innerText += "3";
});
cuatro.addEventListener("click", () => {
  resultado.innerText += "4";
});
cinco.addEventListener("click", () => {
  resultado.innerText += "5";
});
seis.addEventListener("click", () => {
  resultado.innerText += "6";
});
siete.addEventListener("click", () => {
  resultado.innerText += "7";
});
ocho.addEventListener("click", () => {
  resultado.innerText += "8";
});
nueve.addEventListener("click", () => {
  resultado.innerText += "9";
});
cero.addEventListener("click", () => {
  resultado.innerText += "0";
});
reset.addEventListener("click", () => {
  resultado.innerText = "";
});
suma.addEventListener("click", () => {
  operacion = "+";
  resultado.innerText += operacion;
});
resta.addEventListener("click", () => {
  operacion = "-";
  resultado.innerText += operacion;
});
multiplicacion.addEventListener("click", () => {
  operacion = "*";
  resultado.innerText += operacion;
});
division.addEventListener("click", () => {
  operacion = "/";
  resultado.innerText += operacion;
});
igual.addEventListener("click", () => {
  resolver();
});

const limpiar = () => {
  resultado.innerText = "";
};

reset.addEventListener("click", () => {
  limpiar();
  operandoA = 0;
  operandoB = 0;
  operacion = "";
  resultado.innerText = "";
});

let keyP = document.getElementById("cadena");

uno.addEventListener("keypress", (e) => {
  if (e.key === "11111") {
    alert("Hola");
  }
});

const resolver = () => {
  let res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(eval(resultado.innerText));
      break;
    case "-":
      res = parseFloat(eval(resultado.innerText));
      break;
    case "*":
      res = parseFloat(eval(resultado.innerText));
      break;
    case "/":
      res = parseFloat(eval(resultado.innerText));
      break;
  }
  resultado.innerText = res;
};
