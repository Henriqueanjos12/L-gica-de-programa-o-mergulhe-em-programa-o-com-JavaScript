alert("Olá Mundo!");

alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 29;
let chute = prompt("Escolha um número entre 1 e 10:");
if(numeroSecreto == chute){
    console.log("Você Acertou!");
}else{
    console.log("Você Errou!");
}

alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos.");
msgErro = "Erro! Preencha todos os campos.";
alert(msgErro);
nome = prompt("Digite seu nome:");
idade = prompt("Digite sua idade:")
if(idade>=18){
    alert("Pode tirar a habilitação!");
}