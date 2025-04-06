// quiz.js

const preguntas = [
    {
      pregunta: "¿Qué significa COBOL?",
      opciones: ["Code Of Business Language", "Common Business-Oriented Language", "Corporate Business Logic", "Computer Binary Operator Language"],
      correcta: 1
    },
    {
      pregunta: "¿En qué década fue creado COBOL?",
      opciones: ["1950s", "1960s", "1970s", "1980s"],
      correcta: 0
    },
    {
      pregunta: "¿Cuál es una sección común en un programa COBOL?",
      opciones: ["START SECTION", "WORKING-STORAGE SECTION", "FUNCTION SECTION", "MEMORY-ALLOC SECTION"],
      correcta: 1
    }
  ];
  
  let preguntaActual = 0;
  let puntaje = 0;
  
  const preguntaElemento = document.getElementById("question");
  const respuestasElemento = document.getElementById("answers");
  const siguienteBoton = document.getElementById("next-button");
  const puntajeElemento = document.getElementById("score");
  const volverBtn = document.getElementById("volver-btn");
  
  function mostrarPregunta() {
    const actual = preguntas[preguntaActual];
    preguntaElemento.textContent = actual.pregunta;
  
    respuestasElemento.innerHTML = "";
    actual.opciones.forEach((opcion, indice) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.addEventListener("click", () => seleccionarRespuesta(indice));
      respuestasElemento.appendChild(boton);
    });
  
    siguienteBoton.disabled = true;
    puntajeElemento.textContent = "";
  }
  
  function seleccionarRespuesta(indiceSeleccionado) {
    const correcta = preguntas[preguntaActual].correcta;
  
    const botones = respuestasElemento.querySelectorAll("button");
    botones.forEach((btn, idx) => {
      if (idx === correcta) {
        btn.style.backgroundColor = "#00ffcc";
        btn.style.color = "#000";
      } else {
        btn.style.opacity = 0.5;
      }
      btn.disabled = true;
    });
  
    if (indiceSeleccionado === correcta) {
      puntaje++;
      puntajeElemento.textContent = "✅ ¡Correcto!";
    } else {
      puntajeElemento.textContent = "❌ Incorrecto.";
    }
  
    siguienteBoton.disabled = false;
  }
  
  siguienteBoton.addEventListener("click", () => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultados();
    }
  });
  
  function mostrarResultados() {
    preguntaElemento.textContent = "Resultado final";
    respuestasElemento.innerHTML = "";
    siguienteBoton.style.display = "none";
    puntajeElemento.textContent = `Tu puntaje: ${puntaje} de ${preguntas.length}`;
  }
  
  volverBtn.addEventListener("click", () => {
    window.location.href = "juegos.html"; // se abre en la misma ventana
  });
  

  // --- Botón volver al menú de juegos con beep ---
document.addEventListener('DOMContentLoaded', () => {
    const volverBtn = document.getElementById('volver-btn');
  
    if (volverBtn) {
      const beep = new Audio('beep.mp3');
  
      volverBtn.addEventListener('click', () => {
        beep.currentTime = 0;
        beep.play();
  
        // Esperar un poco para que se escuche el beep antes de redirigir
        setTimeout(() => {
          window.location.href = 'juegos.html';
        }, 200);
      });
    }
  });
  
  mostrarPregunta();
  
  