const frases = [
    "Welcome to Gorgeous Garden",
    "We bring life to your outdoor spaces",
    "Your dream garden starts here"
  ];
  
  let i = 0;      // índice de letra
  let j = 0;      // índice de frase
  let escribiendo = true;
  
  function typeWriterLoop() {
    const currentPhrase = frases[j];
    const typeElement = document.getElementById("type");
  
    if (escribiendo) {
      if (i < currentPhrase.length) {
        typeElement.innerHTML += currentPhrase.charAt(i);
        i++;
        setTimeout(typeWriterLoop, 80); // velocidad al escribir
      } else {
        escribiendo = false;
        setTimeout(typeWriterLoop, 1500); // pausa antes de borrar
      }
    } else {
      if (i > 0) {
        typeElement.innerHTML = currentPhrase.substring(0, i - 1);
        i--;
        setTimeout(typeWriterLoop, 30); // velocidad al borrar
      } else {
        escribiendo = true;
        j = (j + 1) % frases.length; // próxima frase
        setTimeout(typeWriterLoop, 500);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", typeWriterLoop);