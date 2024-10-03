const color_fondo = document.getElementById('color_fondo');
const numero = document.getElementById('numero');
let victoriasp1 = 0;
let victoriasp2 = 0;

let cantidad = 10;
let cantidad1 = 4;
let cantidad2 = 4;
let cantidad3 = 1;

let tiempo = setInterval(() => {
    cantidad -= 1;
    numero.textContent = cantidad;
    if (jugador1 != "" && jugador2 != "") {
        cantidad = 0;
    }

    if (cantidad === 0) {
        clearInterval(tiempo);
        mostrarResultados();
        determineganador();
    }
}, 1000);

function mostrarResultados() {
    if (jugador1 === 'piedra') {
        document.querySelector('.puño1').setAttribute('style', 'display: flex;');
    } else if (jugador1 === 'papel') {
        document.querySelector('.papel1').setAttribute('style', 'display: flex;');
    } else if (jugador1 === 'tijera') {
        document.querySelector('.tijera1').setAttribute('style', 'display: flex;');
    }
    if (jugador2 === 'piedra') {
        document.querySelector('.puño2').setAttribute('style', 'display: flex;');
    } else if (jugador2 === 'papel') {
        document.querySelector('.papel2').setAttribute('style', 'display: flex;');
    } else if (jugador2 === 'tijera') {
        document.querySelector('.tijera2').setAttribute('style', 'display: flex;');
    }
}

function jugador1_gana() {
    document.querySelector('.personaje2').setAttribute('style', 'display: flex;');

    let tiempo1 = setInterval(() => {
        cantidad1 -= 1;

        if (cantidad1 === 0) {
            clearInterval(tiempo1);
            document.querySelector('.personaje2').setAttribute('style', 'display: none;');
            restablecer();
        }
    }, 1000);

    victoriasp1++;
    cambiarImagenBarra(victoriasp1, 1);

}

function jugador2_gana() {
    document.querySelector('.personaje11').setAttribute('style', 'display: flex;');

    let tiempo2 = setInterval(() => {
        cantidad2 -= 1;

        if (cantidad2 === 0) {
            clearInterval(tiempo2);
            document.querySelector('.personaje11').setAttribute('style', 'display: none;');
            restablecer();
        }
    }, 1000);

    victoriasp2++;
    cambiarImagenBarra(victoriasp2, 2);

}

function empate() {
    document.querySelector('.personaje3').setAttribute('style', 'display: flex;');

    let tiempo3 = setInterval(() => {
        cantidad3 -= 1;

        if (cantidad3 === 0) {
            clearInterval(tiempo3);
            document.querySelector('.personaje3').setAttribute('style', 'display: none;');
            restablecer();
        }
    }, 1500);
}

function cambiarImagenBarra(victorias, jugador) {
    if (jugador === 1) {
        if (victorias === 1) {
            document.querySelector('.barra2').style.backgroundImage = 'url(barra2.png)';
        } else if (victorias === 2) {
            document.querySelector('.barra2').style.backgroundImage = 'url(barra4.png)';
        } else if (victorias === 3) {
            document.querySelector('.barra2').style.backgroundImage = 'url(barra3.png)';
            setTimeout(() => {
                guardarArchivo('Jugador 1');
                alert('¡Jugador 1 gana el juego completo!');
                redirigirAFinDelJuego();
            }, 4000);
        }
    } else if (jugador === 2) {
        if (victorias === 1) {
            document.querySelector('.barra1').style.backgroundImage = 'url(barra2.png)';
        } else if (victorias === 2) {
            document.querySelector('.barra1').style.backgroundImage = 'url(barra4.png)';
        } else if (victorias === 3) {
            document.querySelector('.barra1').style.backgroundImage = 'url(barra3.png)';
            setTimeout(() => {
                guardarArchivo('Jugador 2');
                alert('¡Jugador 2 gana el juego completo!');
                redirigirAFinDelJuego();
            }, 3000);
        }
    }
}

function restablecer() {
    cantidad = 10;
    cantidad1 = 4;
    cantidad2 = 4;
    cantidad3 = 1;
    numero.textContent = 10;
    document.querySelector('.personaje1').setAttribute('style', 'display: flex;');
    document.querySelector('.personaje').setAttribute('style', 'display: flex;');
    document.querySelector('.boton1').setAttribute('style', 'visibility: visible;');
    document.querySelector('.boton2').setAttribute('style', 'visibility: visible;');
    document.querySelector('.puño1').setAttribute('style', 'display: none;');
    document.querySelector('.puño2').setAttribute('style', 'display: none;');
    document.querySelector('.tijera1').setAttribute('style', 'display: none;');
    document.querySelector('.tijera2').setAttribute('style', 'display: none;');
    document.querySelector('.papel1').setAttribute('style', 'display: none;');
    document.querySelector('.papel2').setAttribute('style', 'display: none;');
    document.querySelector('.contador').setAttribute('style', 'visibility: visible;');
    jugador1 = '';
    jugador2 = '';
    restablecer_contador();
}

function restablecer_contador() {
    let tiempo = setInterval(() => {
        cantidad -= 1;
        numero.textContent = cantidad;

        if (jugador1 != "" && jugador2 != "") {
            cantidad = 0;
        }

        if (cantidad === 0) {
            clearInterval(tiempo);
            mostrarResultados();
            determineganador();
        }
    }, 1000);
}

function redirigirAFinDelJuego() {

    document.querySelector('.barra1').style.backgroundImage = 'url(barra.png)';
    document.querySelector('.barra2').style.backgroundImage = 'url(barra.png)';
    window.location.href = 'CIN_FUTURO_PROYECT.html';

}

//Guardar datos en txt
async function guardarArchivo(jugadorGanador) {

    const response = await fetch(`guardar_datos.php?Nombre=${encodeURIComponent(jugadorGanador)}`); // Llamar al archivo PHP
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
}