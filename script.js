// Reloj
function actualizarReloj() {
    const ahora = new Date();
    const formatoHora = ahora.toLocaleTimeString("es-ES");
    const formatoFecha = ahora.toLocaleDateString("es-ES");
    document.getElementById("reloj").textContent = `Fecha: ${formatoFecha} - Hora: ${formatoHora}`;
  }
  setInterval(actualizarReloj, 1000);
  actualizarReloj();
  
  // Consola
  const consoleInput = document.getElementById("consoleInput");
  const consoleOutput = document.getElementById("consoleOutput");
  
  consoleInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const comando = consoleInput.value.trim().toLowerCase();
      consoleInput.value = "";
      ejecutarComando(comando);
    }
  });
  
  function ejecutarComando(cmd) {
    let respuesta = "";
  
    switch (cmd) {
      case "help":
        respuesta = "Comandos disponibles: help, about, team, frase, cobol, nasdaq, alyc, glomo, migracion, mt103, fatca, clear";
        break;
      case "about":
        respuesta = "Terminal HOST - BBVA. Proyecto interno del COBOL team para CyB.";
        break;
      case "team":
        respuesta = "Alan Gregorat/Martin Rizzo/Facundo Losio/Sergio Benitez.";
        break;
      case "frase":
        respuesta = obtenerFraseRandom();
        break;
      case "cobol":
        respuesta = obtenerExplicacionCobol();
        break;
      case "nasdaq":
        respuesta = "📈 Aca van las interfaces y desarrollos para Nasdaq.";
        break;
      case "alyc":
        respuesta = "🏛️ Aca van las transacciones para Alyc.";
        break;
      case "glomo":
        respuesta = "🌐 Aca va la apertura de custodia a traves de GLOMO";
        break;
      case "migracion":
        respuesta = "⚙️ Aca va la migracion de las pantallas con el java team.";
        break;
      case "mt103":
        respuesta = "🌐 Aca va el desarrollo para comex.";
        break;    
      case "fatca":
        respuesta = "⚙️ Aca va el desarrollo de FATCA.";
        break;    
      case "clear":
        consoleOutput.innerHTML = "";
        return;
      default:
        respuesta = `Comando no reconocido: ${cmd}`;
    }
  
    const linea = document.createElement("p");
    linea.textContent = `> ${respuesta}`;
    consoleOutput.appendChild(linea);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
  
  function obtenerFraseRandom() {
    const frases = [
      "Compilando... por favor, no apagues el 3270.",
      "No hay error que un buen DISPLAY no pueda encontrar.",
      "La magia está en el JCL.",
      "En COBOL no hay bugs, hay *features documentadas*.",
      "Todo gran sistema tiene un COPYBOOK olvidado.",
      "Usa el REDEFINES... con responsabilidad.",
      "Solo los valientes pisan producción sin probar en test.",
      "Si no es en batch, no es serio.",
      "Todo está en el SYSOUT… todo.",
      "La consola no se toca, se respeta.",
      "La producción es sagrada. Amén.",
      "¿Test? El verdadero test es el pase a producción.",
      "Quien nunca hizo un ABEND, que tire la primera tarjeta perforada.",
      "En la duda, DISPLAY.",
      "Lo urgente no quita lo crítico.",
      "Un buen programador COBOL siempre deja trazas.",
      "Un COPYBOOK bien hecho es poesía pura.",
      "Las cadenas de Control-M son como la vida: si fallás un paso, todo se cae.",
      "Un compilado sin warnings es como un café sin azúcar: raro pero aceptable.",
      "JCL no se aprende, se sobrevive.",
      "¿No te anda? Revisá el parámetro del STEP.",
      "Si te sale a la primera, desconfía.",
      "Un PIC X(100) lo resuelve todo.",
      "El verdadero programador COBOL comenta en mayúsculas."
    ];
    return frases[Math.floor(Math.random() * frases.length)];
  }
  
  function obtenerExplicacionCobol() {
    const explicaciones = [
      "📘 COBOL: Lenguaje de programación orientado a negocios, muy usado en bancos. Usa estructuras como PERFORM para ciclos y WORKING-STORAGE para variables.",
      "💾 DB2: Sistema de gestión de bases de datos relacional en mainframes. Se accede desde COBOL usando sentencias EXEC SQL ... END-EXEC.",
      "📄 JCL: Job Control Language. Sirve para definir cómo se ejecutan programas en el mainframe. Controla archivos de entrada/salida, pasos y condiciones.",
      "🔄 PERFORM: Usado para ejecutar secciones o párrafos. Puede ser con o sin ciclo.",
      "📂 COPYBOOK: Archivo externo que contiene estructuras de datos. Se incluye en el programa con la sentencia COPY.",
      "🚨 ABEND: Error de ejecución en el mainframe. Generalmente registrado en el SYSOUT o en el dump.",
      "🔎 DISPLAY: Comando de COBOL para imprimir valores y ayudar en la depuración.",
      "🧾 SYSIN: Medio para pasar parámetros a los programas desde el JCL.",
      "📈 CONTROL-M: Planificador de jobs batch. Permite automatizar ejecuciones en el mainframe.",
      "📍 WORKING-STORAGE: Sección del programa COBOL donde se declaran variables persistentes durante la ejecución.",
        "📌 LINKAGE SECTION: Sección usada para recibir datos de otros programas o del JCL mediante parámetros.",
        "🧠 EVALUATE: Similar a un SWITCH en otros lenguajes. Permite tomar decisiones múltiples en base a una variable.",
        "📊 PIC: Define el tipo y tamaño de una variable. Ejemplo: PIC X(10) para texto de 10 caracteres.",
        "🔗 PERFORM UNTIL: Bucle que se repite hasta que se cumpla una condición. Muy usado para procesar archivos.",
        "📎 OPEN/READ/CLOSE: Secuencia típica para trabajar con archivos en COBOL. Primero se abre, luego se lee línea por línea, y finalmente se cierra.",
        "📤 WRITE: Usado para escribir un registro en un archivo de salida secuencial.",
        "📝 ACCEPT: Captura datos desde el JCL o desde el sistema (por ejemplo, la fecha o la hora actual).",
        "🧾 MOVE: Copia el contenido de una variable a otra. Muy común para trabajar con estructuras y campos.",
        "🧮 COMPUTE: Permite realizar operaciones matemáticas. Alternativa más moderna a ADD, SUBTRACT, MULTIPLY.",
        "📘 EXEC SQL COMMIT: En DB2, se usa para guardar cambios realizados por un programa tras inserciones o actualizaciones.",
        "⚠️ EXEC SQL WHENEVER SQLERROR: Define qué hacer en caso de error SQL, como redirigir a una rutina de error.",
        "💡 DSN: En JCL, identifica el nombre completo de un dataset (archivo).",
        "🔍 DISP=SHR: Permite compartir un archivo con otros jobs en lectura.",
        "🔐 DISP=MOD: Abre el archivo para agregar información al final sin borrar lo anterior.",
        "🧰 SYSOUT=* : Envía la salida estándar del job a la cola de impresión o visualización.",
        "🔄 IF/THEN/ELSE en JCL: Sirve para ejecutar pasos condicionalmente según el resultado del paso anterior.",
        "🗂️ INCLUDE en JCL: Permite incluir bloques JCL comunes definidos en otro archivo. Ayuda a modularizar.",
        "🚀 CALL 'programa': Desde COBOL, se puede invocar otro programa (subprograma) en tiempo de ejecución.",
        "🌐 PLAN y PACKAGE en DB2: Son objetos compilados para ejecutar SQL embebido desde COBOL.",
        "📍 WORKING-STORAGE: Sección del programa COBOL donde se declaran variables persistentes durante la ejecución.",
        "📌 LINKAGE SECTION: Sección usada para recibir datos de otros programas o del JCL mediante parámetros.",
        "🧠 EVALUATE: Similar a un SWITCH en otros lenguajes. Permite tomar decisiones múltiples en base a una variable.",
        "📊 PIC: Define el tipo y tamaño de una variable. Ejemplo: PIC X(10) para texto de 10 caracteres.",
        "🔗 PERFORM UNTIL: Bucle que se repite hasta que se cumpla una condición. Muy usado para procesar archivos.",
        "📎 OPEN/READ/CLOSE: Secuencia típica para trabajar con archivos en COBOL. Primero se abre, luego se lee línea por línea, y finalmente se cierra.",
        "📤 WRITE: Usado para escribir un registro en un archivo de salida secuencial.",
        "📝 ACCEPT: Captura datos desde el JCL o desde el sistema (por ejemplo, la fecha o la hora actual).",
        "🧾 MOVE: Copia el contenido de una variable a otra. Muy común para trabajar con estructuras y campos.",
        "🧮 COMPUTE: Permite realizar operaciones matemáticas. Alternativa más moderna a ADD, SUBTRACT, MULTIPLY.",
        "📘 EXEC SQL COMMIT: En DB2, se usa para guardar cambios realizados por un programa tras inserciones o actualizaciones.",
        "⚠️ EXEC SQL WHENEVER SQLERROR: Define qué hacer en caso de error SQL, como redirigir a una rutina de error.",
        "💡 DSN: En JCL, identifica el nombre completo de un dataset (archivo).",
        "🔍 DISP=SHR: Permite compartir un archivo con otros jobs en lectura.",
        "🔐 DISP=MOD: Abre el archivo para agregar información al final sin borrar lo anterior.",
        "🧰 SYSOUT=* : Envía la salida estándar del job a la cola de impresión o visualización.",
        "🔄 IF/THEN/ELSE en JCL: Sirve para ejecutar pasos condicionalmente según el resultado del paso anterior.",
        "🗂️ INCLUDE en JCL: Permite incluir bloques JCL comunes definidos en otro archivo. Ayuda a modularizar.",
        "🚀 CALL 'programa': Desde COBOL, se puede invocar otro programa (subprograma) en tiempo de ejecución.",
        "🌐 PLAN y PACKAGE en DB2: Son objetos compilados para ejecutar SQL embebido desde COBOL."
    ];
    return explicaciones[Math.floor(Math.random() * explicaciones.length)];
  }
  
  
  
  