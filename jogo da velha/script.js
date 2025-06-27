var jogador = "x";

function jogar(celula){

    //compara se a célula está vazia para assim escrever
    if(celula.innerHTML == ""){

        //esvreva a letra na célula 
        celula.innerHTML = jogador;

        //alterna a variavel jogador para a proxima jogada
        if(jogador == "x"){
            jogador ="o";
            celula.style.backgroundColor = "black";
            celula.style.color = " darkblue";
        }else{
            jogador = "x";
            celula.style.backgroundColor = "white";
        }
    }   
}

function reiniciar(){
    window.location.reload();
}