alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute 
console.log(chute)
let tentativas = 1;


while(chute != numeroSecreto){

    chute = prompt('Escolha um numero entre 1 e 10');
    console.log('O chute foi'+chute)
if(chute == numeroSecreto){
    console.log('usuario acertou')
    alert('isso ai! voce descobriu o numero secreto era ' +numeroSecreto+ ' Voce precisou de ' +tentativas+ ' tentativas')
}

else{
    if(chute > numeroSecreto){
        alert('o numero secreto e menor que '+chute)
    }
    else{
        alert('o numero secreto e maior que '+chute)
    }
    tentativas++;
}
}