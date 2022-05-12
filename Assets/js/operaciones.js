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
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "1") {   
    resultado.innerText += "1"; 
    resultado.focus(); 
  }
});

addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "2") {   
    resultado.innerText += "2";
    resultado.focus();  
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "3") {   
    resultado.innerText += "3";
    resultado.focus();  
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "4") {   
    resultado.innerText += "4";
    resultado.focus();  
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "5") {   
    resultado.innerText += "5";
    resultado.focus();  
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "6") {   
    resultado.innerText += "6";
    resultado.focus();  
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "7") {   
    resultado.innerText += "7";
    resultado.focus(); 
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "8") {   
    resultado.innerText += "8";
    resultado.focus(); 
  }
});
addEvent(document,"keypress", (e) => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
    igual.focus();
  } 
  if (e.key === "9") {   
    resultado.innerText += "9";
    resultado.focus();
  }
});
addEvent(document,"keypress", (e) => {
  if (e.key === "0") {   
    resultado.innerText += "0";
  }
});
addEvent(document,"keypress", (e) => {
  if (e.key === "+") {   
    operacion ="+"
    resultado.innerText += "+";
  }
});
addEvent(document,"keypress", (e) => {
  if (e.key === "-") {   
    operacion ="-";
    resultado.innerText += "-";
  }
});
addEvent(document,"keypress", (e) => {
  if (e.key === "*") {   
    operacion ="*";
    resultado.innerText += "*";
  }
});
addEvent(document,"keypress", (e) => {
  if (e.key === "/") {   
    operacion ="/";
    resultado.innerText += "/";
  }
});

addEvent(document,"keypress", (e) => {
  if (e.key === "Enter") {   
    resolver();
  }
});

const limpiarDisplay=()=>{
  resultado.innerText = "";
}

uno.addEventListener("click", () => {
  console.log(resultado.innerText)
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "1";
  

});
dos.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "2";
});
tres.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "3";
});
cuatro.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "4";
});
cinco.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "5";
});
seis.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "6";
});
siete.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "7";
});
ocho.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "8";
});
nueve.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "9";
});
cero.addEventListener("click", () => {
  if (resultado.innerText ==="0") {
    limpiarDisplay();
  } 
  resultado.innerText += "0";
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
  if (resultado.innerText ==="") {
    resultado.innerText ="0";
  } else {
  resolver();
  }
});

const limpiar = () => {
  resultado.innerText = "0";
};

reset.addEventListener("click", () => {
  if ( (resultado.innerText!="") || (resultado.innerText ==="")) {
    resultado.innerText = "0";
    igual.focus();
  }  
  limpiar();
   operacion = "";
 
});




const  numberFloatpoint = (x) => {
  return Number.parseFloat(x).toFixed(3);
}


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
    default:
      res = parseFloat(eval(resultado.innerText));
      break;
  }
  resultado.innerText = numberFloatpoint(res);

};