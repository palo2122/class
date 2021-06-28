
//ANIMACIONES DEL MENU DE LA PÁGINA
function cambiarClase() {
    let menuPrincipal = document.getElementById('menu-principal');
    menuPrincipal.classList.toggle('menu-principal-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open')
}





// DARK MODE
function activarDarkMode() {
    const fondoPagina = document.body;
    const titulo1 = document.querySelectorAll(".section-title")[0];
    const titulo2 = document.querySelectorAll(".section-title")[1];
    const titulo3 = document.querySelectorAll(".section-title")[2];
    const titulo4 = document.querySelectorAll(".section-title")[3];
    const titulo5 = document.querySelectorAll(".section-title")[4];
    const titulo6 = document.querySelectorAll(".section-title")[5];
    const parrafo1 = document.querySelector("p.que_es");
    const parrafo2 = document.querySelectorAll("p.que_es")[1];
    const subtitulo = document.querySelector(".subtitulo");
    const subtitulo2 = document.querySelectorAll(".subtitulo")[1];
    const subtitulo3 = document.querySelectorAll(".subtitulo")[2];

    titulo1.classList.toggle('dark-mode');
    titulo4.classList.toggle('dark-mode');
    titulo5.classList.toggle('dark-mode');
    titulo6.classList.toggle('dark-mode');
    parrafo1.classList.toggle('dark-mode');
    parrafo2.classList.toggle('dark-mode');
    subtitulo.classList.toggle('dark-mode');
    subtitulo2.classList.toggle('dark-mode');
    subtitulo3.classList.toggle('dark-mode');
    titulo2.classList.toggle('dark-mode');
    titulo3.classList.toggle('dark-mode');
    fondoPagina.classList.toggle('dark-mode');
}
const botonDarkMode = document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode);







//SLIDER

var imagenes =new Array("img/loll.jpg","img/noticia4.png","img/maiden.png","img/fest.jpg","img/tourkiss.jpg","img/concierto.jpg");
var posicion=0;
var imagen=document.querySelector(".img");
var btnDerecha=document.querySelector(".derecha");
var btnIzquierda=document.querySelector(".izquierda");
var btnPlay=document.querySelector("#play");
var btnStop=document.querySelector("#stop");

const INTERVALO=2000;
var intervalo;
imagen.style.backgroundImage='url('+imagenes[posicion]+')';

function izquierda(){
    if(posicion<=0){
        posicion=imagenes.length-1;
    }else{
        posicion--;
    }
    imagen.style.backgroundImage='url('+imagenes[posicion]+')';
}
function derecha(){
    if(posicion>= imagenes.length-1){
        posicion=0;
    }else{
        posicion++;
    }
    imagen.style.backgroundImage='url('+imagenes[posicion]+')';
}
function playIntervalo(){
    intervalo=setInterval(derecha,INTERVALO);
    btnPlay.setAttribute('disabled',true);
    btnStop.removeAttribute('disabled');
}
function stopIntervalo(){
    clearInterval(intervalo);
    btnPlay.removeAttribute('disabled');
    btnStop.setAttribute('disabled',true);

}

btnPlay.addEventListener('click',playIntervalo);
btnStop.addEventListener('click',stopIntervalo);






// REPRODUCTOR

var miVideo = document.getElementById("video1");
function playPause(){
    if(miVideo.paused)
        miVideo.play();
    else
       miVideo.pause();
}

function skip(value){
    miVideo.currentTime+=value;
}





// Sección comentarios

var comentarios={
    mensaje:''
} 
// evento submit
const seccionComentario = document.querySelector('.seccion-comentario');
const ok = document.querySelector('#ok');  //hacemos referencia al elemento al que le agregaremos el bloqueok

const mensaje=document.getElementById('mensaje'); //hacemos referencia desde html y le asignamos la constante 'mensaje'
mensaje.addEventListener('input',leerTexto);  //estamos pendientes de un input en el campo mensaje

// guardamos la información respectiva en el campo mensaje, también lo imprimimos en consola
function leerTexto(evento){
    comentarios.mensaje =evento.target.value;
    evento.preventDefault()
    console.log(comentarios.mensaje);
}

//creamos un parrafo desde java para agregar el mensaje de bloqueOk
function mensajeOk(mensajeEnviado){
    const bloqueOk=document.createElement('p');
    bloqueOk.textContent=mensajeEnviado;
    ok.appendChild(bloqueOk);
    setTimeout(function(){
        bloqueOk.remove();
    }, 5000);
}

//Estamos pendientes del evento submit del botón enviar de la seccion comentarios
seccionComentario.addEventListener('submit', validarMensaje);
function validarMensaje(evento){
    evento.preventDefault();
    if(comentarios.mensaje===''){
        window.alert('El campo "comentarios" está vacío.');
        return;
    }
    mensajeOk('Tu comentario se envió correctamente!');
}






