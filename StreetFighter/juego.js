let jugador1 = '';
let jugador2 = '';


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

    } else if (jugador === 2) {

      document.querySelector('.puño2').setAttribute('style', 'display: none;');
      document.querySelector('.papel2').setAttribute('style', 'display: none;');
      document.querySelector('.tijera2').setAttribute('style', 'display: none;');

      if (eleccion === 'piedra') { 
        ocultar_botones1();
      } else if (eleccion === 'papel') { 
        ocultar_botones1();
      } else if (eleccion === 'tijera') {
        ocultar_botones1();
      } 
      jugador2 = eleccion;
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

  if (event.key === 'j') {

      elejir('piedra', 2);

  } else if (event.key === 'k') {

      elejir('papel', 2);

  } else if (event.key === 'l') {

      elejir('tijera', 2);
      
  }

}

document.addEventListener('keydown', manejarTeclado);

function determineganador() {
  
  let resultText = '';

  if (!jugador1 && jugador2) {
    resultText = '¡Jugador 2 gana por defecto!';
    ocultar();
    jugador2_gana();
    return;
  }

  if (jugador1 && !jugador2) {
    resultText = '¡Jugador 1 gana por defecto!';
    ocultar();
    jugador1_gana();
    return;
  }

  if (jugador1 === jugador2) {
    resultText = '¡Es un empate!';
    ocultar();
    empate();
    return;
  }

  if (
    (jugador1 === 'piedra' && jugador2 === 'tijera') ||
    (jugador1 === 'papel' && jugador2 === 'piedra') ||
    (jugador1 === 'tijera' && jugador2 === 'papel')
  ) {
    resultText = '¡Jugador 1 gana!';
    ocultar();
    jugador1_gana();
  } else {
    resultText = '¡Jugador 2 gana!';
    ocultar();
    jugador2_gana();
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