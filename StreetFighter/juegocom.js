let jugador1 = '';
const opciones = ['piedra', 'papel', 'tijera'];
computadora = opciones[Math.floor(Math.random() * opciones.length)];
ocultar_botones1();

function elejir(eleccion, jugador) {

    if (jugador === 1) {

      document.querySelector('.puño1').setAttribute('style', 'display: none;');
      document.querySelector('.papel1').setAttribute('style', 'display: none;');
      document.querySelector('.tijera1').setAttribute('style', 'display: none;');
     
  
      if (eleccion === 'piedra') {
        ocultar_botones();
      } else if (eleccion === 'papel') {
        ocultar_botones();
      } else if (eleccion === 'tijera') {
        ocultar_botones();
      }
  
      jugador1 = eleccion;

    } 

}

function manejarTeclado(event) {

  if (event.key === 'a') {

      elejir('piedra', 1);

  } else if (event.key === 's') {

      elejir('papel', 1);

  } else if (event.key === 'd') {

      elejir('tijera', 1);

  }

}

document.addEventListener('keydown', manejarTeclado);

function determineganador1() {
  let resultText = '';

  if (!jugador1 && computadora) {
    resultText = 'jugador 2 gana por defecto!';
    ocultar();
    computadora_gana();
    return;
  }

  if (jugador1 && !computadora) {
    resultText = '¡Jugador 1 gana por defecto!';
    ocultar();
    jugador1_gana();
    return;
  }

  if (jugador1 === computadora) {
    resultText = '¡Es un empate!';
    ocultar();
    empate();
    return;
  }

  if (
    (jugador1 === 'piedra' && computadora === 'tijera') ||
    (jugador1 === 'papel' && computadora === 'piedra') ||
    (jugador1 === 'tijera' && computadora === 'papel')
  ) {
    resultText = '¡Jugador 1 gana!';
    ocultar();
    jugador1_gana();

  } else {
    resultText = '¡Jugador 2 gana!';
    ocultar();
    computadora_gana();

  }
}

function ocultar(){

  document.querySelector('.personaje1').setAttribute('style', 'display: none;');
  document.querySelector('.personaje').setAttribute('style', 'display: none;');
  document.querySelector('.contador').setAttribute('style', 'visibility: hidden;');

}

function ocultar_botones(){

  document.querySelector('.boton1').setAttribute('style', 'visibility: hidden;');

}

function ocultar_botones1(){

  document.querySelector('.boton2').setAttribute('style', 'visibility: hidden;');

}

