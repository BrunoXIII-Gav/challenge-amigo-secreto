// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigoSecreto = [];



function agregarAmigo(){

    let texto = document.getElementById("amigo").value;
    
    if (texto === "" || !isNaN(texto)){
        alert("Por favor, ingresa un nombre valido")
        return;
    }


    let amigoNuevo = document.getElementById("amigo").value;
    
    listaAmigoSecreto.push(amigoNuevo);

    console.log(listaAmigoSecreto)

    verListaAmigos();


}

function verListaAmigos(){
    
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";
    
    for(let i = 0; i<listaAmigoSecreto.length;i++){

        let verAmigo = document.createElement("li");
        verAmigo.textContent = listaAmigoSecreto[i];

        listaHtml.appendChild(verAmigo);
        
    }
    

}


function sortearAmigo(){

    let numeroSecreto = generarNumeroSecretoIndice();
    console.log(numeroSecreto);

    let mensajeGanador = `El amigo secreto sorteado es: ${listaAmigoSecreto[numeroSecreto]}`
    
    return document.getElementById("resultado").textContent = mensajeGanador


}


function generarNumeroSecretoIndice(){

    let tamañoLista = listaAmigoSecreto.length;

    return Math.floor(Math.random()*tamañoLista)

}


