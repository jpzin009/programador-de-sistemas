//alert("Olá mundo!");

//uma variavel guarda algum valor temporariamente
//entrada dos dados
var nome ="joao";
var idade = 44;
var senha = "123";

//registrando aleração
//enviando alteração pro github com visual
//alterado do git

//estrutura de condição
if(idade > 17) {
    //alert("Pode votar! "+ nome);
}  else{
    // alert("vai embora daqui! "+nome)
}
//teste 
if(nome == "valdecir" && senha =="123"){
   // alert("login concedido!");
}else{
   // alert("tente novamente! seu intruso!");
}

//laço de repetição
contador =0;
while(contador < 1000)
{
    contador = contador + 1;
    console.log(contador)
}


var celular = document.querySelector('.celular');   //icone de menu
var listaMenu = document.querySelector('.menu ul'); //itens do menu

celular.addEventListener('click', function(){ 
    listaMenu.classList.toggle('mostrarMenu');
});
