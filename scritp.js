document.addEventListener("DOMContentLoaded", function () {
  const buttonEncrip = document.getElementById("btnEncriptar");
  const buttonDesencrip = document.getElementById("btnDesencriptar");
  const buttonCopy = document.getElementById("buttonCopy");
  const textInput = document.getElementById("textInput");
  const textInputProcess = document.getElementById("textOutput");

  // Función para encriptar el texto
  function btnEncriptar() {
    let input = textInput.value.toLowerCase();
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    for (let i = 0; i < matrizCodigo.length; ++i) {
      if (input.includes(matrizCodigo[i][0])) {
        input = input.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }

    textInputProcess.value = input;
    textInputProcess.style.background = "white";
    textInputProcess.click();

    window.getSelection().removeAllRanges();
  }

  // Función para desencriptar el texto
  function btnDesencriptar() {
    let output = textInput.value.toLowerCase();
    const matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    for (let i = 0; i < matrizCodigo.length; ++i) {
      if (output.includes(matrizCodigo[i][0])) {
        output = output.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }

    textInputProcess.value = output;
    textInputProcess.style.background = "white";
    textInputProcess.click();
  }

  // Función para copiar el resultado
  function copy() {
    const aux = document.createElement("input");
    aux.setAttribute("value", textInputProcess.value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    showAlert();
  }

  // Event listeners
  buttonEncrip.onclick = btnEncriptar;
  buttonDesencrip.onclick = btnDesencriptar;
  buttonCopy.onclick = copy;

  // Alerta
  function showAlert() {
    swal("Copiado", "El mensaje se ha copiado", "success");
  }

  // Mostrar y ocultar elementos
  const textProcess = document.getElementById("outputContainer");
  const imagen = document.getElementById("image");

  textProcess.addEventListener("mouseover", () => {
    if (textInputProcess.value === "") {
      textInputProcess.value = "";
    }
    textInputProcess.style.display = "inline";
    imagen.style.display = "none";
    buttonCopy.style.display = "inline";
  });

  textProcess.addEventListener("mouseleave", () => {
    if (textInputProcess.value === "") {
      textInputProcess.value = "";
      imagen.style.display = "inline";
      textInputProcess.style.display = "none";
      buttonCopy.style.display = "none";
    }
  });

  textProcess.addEventListener("click", () => {
    if (textInputProcess.value.length === 0) {
      textInputProcess.value = "";
    }
    textInputProcess.style.display = "inline";
    imagen.style.display = "none";
    buttonCopy.style.display = "inline";
  });
});
