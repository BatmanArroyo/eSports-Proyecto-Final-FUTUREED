
function cambiar_fifa() {
    let titulo_juego = document.querySelector("#juego-seleccionado h2");
    titulo_juego.innerHTML = "FIFA";
    let caja = document.querySelector("#juego-seleccionado img");
    caja.src = "imagenes/Fifalogo.png";
    let desc_juego = document.querySelector("#juego-seleccionado p");
    desc_juego.innerHTML = "FIFA Fútbol es un simulador deportivo de fútbol de plataforma móvil desarrollado por la compañía Electronic Arts. Se puede descargar en Google Play, y App Store. Contiene micropago. Es posible jugar teniendo la opción de escoger entre más de 30 ligas, 700 equipos y 17000 jugadores reales.";
  }
  
  function cambiar_nba() {
    let titulo_juego = document.querySelector("#juego-seleccionado h2");
    titulo_juego.innerHTML = "NBA 2k";
    let caja = document.querySelector("#juego-seleccionado img");
    caja.src = "imagenes/Nbalogo.png";
    let desc_juego = document.querySelector("#juego-seleccionado p");
    desc_juego.innerHTML = "NBA 2K Mobile Basketball es un juego de baloncesto en tres dimensiones, que nos permitirá trasladar la experiencia de la saga NBA 2K a dispositivos móviles. Podremos crear el equipo de nuestros sueños, eligir con qué cinco jugadores queremos saltar a la cancha, y competir a través de Internet contra otros jugadores de todo el mundo. ";
  }
  
  function cambiar_nfl() {
    let titulo_juego = document.querySelector("#juego-seleccionado h2");
    titulo_juego.innerHTML = "Madden NFL";
    let caja = document.querySelector("#juego-seleccionado img");
    caja.src = "imagenes/nflmobile.png";
    let desc_juego = document.querySelector("#juego-seleccionado p");
    desc_juego.innerHTML = "Madden NFL Mobile es un juego de deportes móviles de fútbol americano basado en la National Football League, desarrollado y publicado por Electronic Arts. Una entrada en la serie Madden NFL, el juego fue lanzado para dispositivos Android e iOS el 26 de agosto de 2014.";
  }

  function cambiar_formula() {
    let titulo_juego = document.querySelector("#juego-seleccionado h2");
    titulo_juego.innerHTML = "Formula 1";
    let caja = document.querySelector("#juego-seleccionado img");
    caja.src = "imagenes/F1.png";
    let desc_juego = document.querySelector("#juego-seleccionado p");
    desc_juego.innerHTML = "F1 Mobile Racing es un videojuego de carreras desarrollado por Eden Games y publicado por Codemasters y Electronic Arts para iOS y Android. Fue lanzado para iOS el 9 de octubre de 2018 y para Android el 27 de noviembre de 2018."
  }
  
  let contenedor = document.getElementById("juegos-lista");
  
  for(let i = 0; i < juegos.length; i++) {
    contenedor.innerHTML += "<button>" + juegos[i] + "</button>";
  }