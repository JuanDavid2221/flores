// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "¡Feliz aniversario!", time: 15 },
  { text: "Ayer celebramos 9 meses juntos", time: 18 },
  { text: " y quiero que sepas", time: 27 },
  { text: "cuánto significas para mí.", time: 32 },
  { text: "Cada día a tu lado es un regalo", time: 33 },
  { text: "y atesoro todos los momentos", time: 41 },
  { text: "que hemos compartido.", time: 47 },
  { text: "Te amoooooooo 💛", time: 54 },
  { text: "Si no me entendio se lo digo en ingles", time: 59 },
  { text: "Happy anniversary!", time: 67 },
  { text: "Yesterday we celebrated 9 months together", time: 72 },
  { text: "Sand I want you to know", time: 78 },
  { text: "how much you mean to me.", time: 83 },
  { text: "Every day with you is a gift", time: 91 },
  { text: "and I cherish all the moments", time: 97 },
  { text: "we've shared", time: 104 },
  { text: "I love you so much 💛", time: 108 },
  { text: "Siempre seras", time: 144 },
  { text: "Mi novia 💛", time: 148 },
  { text: "Mi amiga 💛", time: 153 },
  { text: "Mi esposa 💛", time: 158 },
  { text: "La mujer de mi vida 💛", time: 164 },
  { text: "El amor de mi vida 💛", time: 169  },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);