// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables globales
let listaAmigos = [];

//referencias a elementos del DOM
const inputnombres = document.getElementById('amigo');
const cuadroMuestraNombres = document.getElementById('resultado'); 

//logica del juego
function agregarAmigo(){
    if(inputnombres.value.trim() === ""){ //SI EL INPUT ESTA VACIO TIRA ALERTA
        alert("Por favor ingrese un nombre")

    }else{ //SINO CARGA LA LISTA Y LA MUESTRA DEBAJO DEL CAMPO DE INGRESO DE NOMBRES
        listaAmigos.push(inputnombres.value); //cargo la lista con los nombres
        console.log(`Lista ${listaAmigos}`);
        actualizarLista();//llamamos a funcion para mostrar nombre
        inputnombres.value = ""; //limpiar el input despues de añadir nombre
    }
}

function actualizarLista(){
    // MUESTRA LOS NOMBRES DEBAJO EN EL #id = "listaAmigos"
    cuadroMuestraNombres.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); //creo un elemento html  <li> 
        li.textContent = listaAmigos[i];// asigno el nombre al <li>
        cuadroMuestraNombres.appendChild(li);//agredo al cuadro un nombre debajo de otro            
    }
}