// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo=[];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);//agrega el nombre del amigo al arreglo
    console.log(amigo);//muestra el arreglo de amigos en la consola
    inputAmigo.value=""//limpia el input
    inputAmigo.focus();//coloca el cursor en el input
    mostrarAmigos();//llama a la funcion mostrarAmigos
}
function mostrarAmigos(){
let listaAmigos = document.getElementById("listaAmigos"); //obtiene la lista de amigos
listaAmigos.innerHTML = "";//limpia la lista de amigos

for(let i=0; i<amigo.length; i++){ //recorre el arreglo de amigos
    let item = document.createElement("li"); //crea un item de lista
    item.textContent = amigo[i]; //agrega el nombre del amigo al item
    listaAmigos.appendChild(item); //agrega el item a la lista
}
}
function sortearAmigo(){//funcion para sortear un amigo
    if(amigo.length===0){//valida que haya amigos
        alert("Debes ingresar al menos un amigo");//muestra un mensaje si no hay amigos
        return;//termina la funcion
    }


    if(amigo.length<2){//valida que haya al menos dos amigos
        alert("Debes ingresar al menos dos amigos");//muestra un mensaje si no hay al menos dos amigos
        return;//termina la funcion
    }
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];//sortea un amigo
    let resultado = document.getElementById("resultado");//obtiene el elemento con id resultado
   resultado.innerHTML = "";//limpia el contenido del elemento
   resultado.textContent = "El amigo sorteado es: "+amigoSorteado;//muestra el amigo sorteado
    amigo = [];//limpia el arreglo de amigos
}