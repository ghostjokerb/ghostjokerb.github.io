/*const miTitulo=document.querySelector('h1');
miTitulo.textContent='Hola';*/
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === '/images/help.png') {
      miImage.setAttribute('src','/images/logo-oca.png');
    } else {
      miImage.setAttribute('src', '/images/help.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre){
        estableceNombreUsuario();
    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial,' + miNombre;
    }
}


miBoton.onclick=function(){
    estableceNombreUsuario();
}


