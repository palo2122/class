const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//-------------------------inicio de java para el formulario-----------------------------//

const nombre=document.getElementById('nombre')
const correo=document.getElementById('correo')
const formulario=document.querySelector('.formulario-contacto')

var camposRegistro={
	nombre:'',
	correo:''
};

function leerNombre(evento){
	camposRegistro.nombre=evento.target.value;
	console.table(camposRegistro);
}
function leerCorreo(evento){
	camposRegistro.correo=evento.target.value;
	console.table(camposRegistro);
}

nombre.addEventListener('input',leerNombre)
correo.addEventListener('input',leerCorreo)
formulario.addEventListener('submit',validarFormulario)

function mensajeError(mensaje){
	const bloqueError=document.createElement('p');
	bloqueError.textContent=mensaje;
	bloqueError.classList.add('mensajeError')
	formulario.appendChild(bloqueError);
	setTimeout(function(){
		bloqueError.remove();
	}, 5000 );
}

function mensajeOk(mensaje){
	const bloqueOk=document.createElement('p');
	bloqueOk.textContent=mensaje;
	bloqueOk.classList.add('mensajeOk')
	formulario.appendChild(bloqueOk);
	setTimeout(function(){
		bloqueError.remove();
	}, 5000 );
}
function mostrarMensaje(mensaje,bandera) {
    const bloque=document.createElement('p');
    bloque.textContent=mensaje;
    if (bandera==='Correcto') {
        bloque.classList.add('mensajeOk');
    } else {
        bloque.classList.add('mensajeError');
    }
    formulario.appendChild(bloque);   
    setTimeout(function() {
        bloque.remove();
    }, 5000 ); 
}

function validarFormulario(evento){
	evento.preventDefault();
	if (camposRegistro.nombre==='' || camposRegistro.correo==='') { 
	mensajeError("Todos los campos deben llenarse para que puedan ser enviados.");
	return;
	}	
	mensajeOk("Informacion enviada correctamente");
}
