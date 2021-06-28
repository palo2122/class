function imprimirConsola() {
    console.log("La pagina esta cargada");
} 

window.addEventListener('load', imprimirConsola);

window.addEventListener('scroll', function(){
    console.log('scrolling...');
})

function cambiarColor1(){
    document.getElementById("titulo1").style.backgroundColor="white";
    document.getElementById("titulo1").style.color="red";
}
function vuelveColor1(){
    document.getElementById("titulo1").style.backgroundColor="#ffffbf";
    document.getElementById("titulo1").style.color="gray";
}

function cambiarColor2(){
    document.getElementById("titulo2").style.backgroundColor="white";
    document.getElementById("titulo2").style.color="red";
}
function vuelveColor2(){
    document.getElementById("titulo2").style.backgroundColor="#ffffbf";
    document.getElementById("titulo2").style.color="gray";
}

function cambiarColor3(){
    document.getElementById("titulo3").style.backgroundColor="white";
    document.getElementById("titulo3").style.color="red";
}
function vuelveColor3(){
    document.getElementById("titulo3").style.backgroundColor="#ffffbf";
    document.getElementById("titulo3").style.color="gray";
}

function cambiarColor4(){
    document.getElementById("titulo4").style.backgroundColor="white";
    document.getElementById("titulo4").style.color="red";
}
function vuelveColor4(){
    document.getElementById("titulo4").style.backgroundColor="#ffffbf";
    document.getElementById("titulo4").style.color="gray";
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .menu_generos');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
menu_item.forEach((item) =>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function pintar1(){
    document.getElementById("boton1").style.backgroundColor="#F8DE7E";
    document.getElementById("boton1").style.color="black";
}
function noPintar1(){
    document.getElementById("boton1").style.backgroundColor="#cb3234";
    document.getElementById("boton1").style.color="white";
}
function pintar2(){
    document.getElementById("boton2").style.backgroundColor="#F8DE7E";
    document.getElementById("boton2").style.color="black";
}
function noPintar2(){
    document.getElementById("boton2").style.backgroundColor="#cb3234";
    document.getElementById("boton2").style.color="white";
}
function pintar3(){
    document.getElementById("boton3").style.backgroundColor="#F8DE7E";
    document.getElementById("boton3").style.color="black";
}
function noPintar3(){
    document.getElementById("boton3").style.backgroundColor="#cb3234";
    document.getElementById("boton3").style.color="white";
}
function pintar4(){
    document.getElementById("boton4").style.backgroundColor="#F8DE7E";
    document.getElementById("boton4").style.color="black";
}
function noPintar4(){
    document.getElementById("boton4").style.backgroundColor="#cb3234";
    document.getElementById("boton4").style.color="white";
}
function pintar5(){
    document.getElementById("boton5").style.backgroundColor="#F8DE7E";
    document.getElementById("boton5").style.color="black";
}
function noPintar5(){
    document.getElementById("boton5").style.backgroundColor="#cb3234";
    document.getElementById("boton5").style.color="white";
}
function pintar6(){
    document.getElementById("boton6").style.backgroundColor="#F8DE7E";
    document.getElementById("boton6").style.color="black";
}
function noPintar6(){
    document.getElementById("boton6").style.backgroundColor="#cb3234";
    document.getElementById("boton6").style.color="white";
}




//-----------------------inicion de la seccion comentarios--------------------------------------//

const mensaje=document.getElementById('mensaje')
const formulario=document.querySelector('.seccion-comentario')


mensaje.addEventListener('input',leerMensaje)
formulario.addEventListener('submit',validarFormulario)

var seccionMensaje = { 
    mensaje:''
};

function leerMensaje(evento){
    seccionMensaje.mensaje=evento.target.value;
    console.log(seccionMensaje);
}

function mostrarMensajeError(mensaje) {
    const bloqueError=document.createElement('p');
    bloqueError.textContent=mensaje;
    bloqueError.classList.add('mensajeError');
    formulario.appendChild(bloqueError);
    setTimeout(function(){
        bloqueError.remove();
    }, 5000 );
}

function mostrarMensajeOk(mensaje) {
    const bloqueok=document.createElement('p');
    bloqueok.textContent=mensaje;
    bloqueok.classList.add('mensajeOk');
    formulario.appendChild(bloqueok);
    setTimeout(function(){
        bloqueok.remove();
    }, 5000 );
}

function mostrarMensaje(mensaje,bandera){
    const bloque=document.createElement('p');
    bloque.textContent=mensaje;
    if(bandera==='correcto'){
        bloque.classList.add('mensajeOk');
    } else {
        bloque.classList.add('mensajeError');
    }
    formulario.appendChild(bloque)

    setTimeout(function(){
        bloque.remove();
    }, 5000 );
}

function validarFormulario(evento) {
    evento.preventDefault();
    if(seccionMensaje.mensaje===''){
        mostrarMensajeError("No has ingresado un comentarios que ofrecer");
        return;
    }
    mostrarMensajeOk("Gracias por su comentario, lo tendremos en cuenta.")
}
//fin de seccion comentarios//

//Inicion del dark mode//
function activarDarkMode(){
    const fondoWeb=document.body;
    const letras=document.querySelectorAll('.section-title')[0];
    const letras1=document.querySelectorAll('.section-title')[2];
    const letras2=document.querySelectorAll('.section-title')[1];
    const sub=document.querySelectorAll('.subtitulo')[0];
    const sub1=document.querySelectorAll('.subtitulo')[1];
    const texto=document.querySelector('.que_es')
    const slider=document.querySelector('.slider')
    const menuSlider=document.querySelectorAll('.flex-caption')[0]
    const menuSlider1=document.querySelectorAll('.flex-caption')[1]
    const menuSlider2=document.querySelectorAll('.flex-caption')[2]
    const menuSlider3=document.querySelectorAll('.flex-caption')[3]
    const menuSlider4=document.querySelectorAll('.flex-caption')[4]
    const menuSlider5=document.querySelectorAll('.flex-caption')[5]
    const formulario=document.querySelector('.seccion-comentario')
    const subt=document.querySelector('.sub')
    const bloque=document.querySelector('.service-bottom')
    const bloque1=document.querySelectorAll('.service-item')[0]
    const bloque2=document.querySelectorAll('.service-item')[1]
    const bloque3=document.querySelectorAll('.service-item')[2]
    const bloque4=document.querySelectorAll('.service-item')[3]
    const bloque5=document.querySelectorAll('.service-item')[4]
    const bloque6=document.querySelectorAll('.service-item')[5]
    const boto=document.querySelector('.enviar')
    const header=document.

    const header=document.querySelectorAll('.header' ,'.container')
    const footer=document.querySelector('.food')

    fondoWeb.classList.toggle("dark-mode");
    letras.classList.toggle("dark-mode");
    letras1.classList.toggle("dark-mode");
    letras2.classList.toggle("dark-mode");
    sub.classList.toggle("dark-mode");
    sub1.classList.toggle("dark-mode");
    texto.classList.toggle("dark-mode");
    slider.classList.toggle("dark-mode");
    menuSlider.classList.toggle("letras-dark-mode");
    menuSlider1.classList.toggle("letras-dark-mode");
    menuSlider2.classList.toggle("letras-dark-mode");
    menuSlider3.classList.toggle("letras-dark-mode");
    menuSlider4.classList.toggle("letras-dark-mode");
    menuSlider5.classList.toggle("letras-dark-mode");
    formulario.classList.toggle("la-dark-mode")
    subt.classList.toggle("la-dark-mode")
    bloque.classList.toggle("dark-mode")
    bloque1.classList.toggle("le-dark-mode")
    bloque2.classList.toggle("le-dark-mode")
    bloque3.classList.toggle("le-dark-mode")
    bloque4.classList.toggle("le-dark-mode")
    bloque5.classList.toggle("le-dark-mode")
    bloque6.classList.toggle("le-dark-mode")
    boto.classList.toggle("li-dark-mode")

    header.classList.toggle("head-dark-mode")
    footer.classList.toggle("head-dark-mode")

}
const botonDarkMode =document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode)

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   activarDarkMode();
}
//fin de seccion dark mode//
