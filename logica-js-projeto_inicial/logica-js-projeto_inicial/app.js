// para dar um alerta  no topo datela
alert ("Bem vindo ao jogo do secredo");
// para criar umav ariavel
let numMax =100;
let numSecredo = parseInt(Math.random() * numMax  + 1);
// pront parao user escreva algo na no programa 
let numEscolha;
let chute = 1;
// para ter aalgo no console do navegado
console.log(numSecredo);

while (numSecredo != numEscolha){
    numEscolha = prompt(`escolha um numero de 1 a ${numMax}`);

    if (numEscolha  == numSecredo){
        break
    }
    else {
        if (numSecredo > numEscolha){
            alert (`kkkkkkkkkkjj seu burro errou otario, o numero de acerto e maior que ${numEscolha}, numero de tentativa: ${chute}`);
        }
        else {
            if ( numSecredo < numEscolha){
                alert (`kkkkkkkkkkjj seu burro errou otario, o numero de acerto e menor que ${numEscolha}, numero de tentativa: ${chute}  `);
            }
        }
    }
    chute += 1;
    console.log(numEscolha)
    
}

let palavraTenta  = chute > 1 ? "tentativas" : "tentativa"
alert (`parabens seu cagado de merda vc acertou!!! ${numSecredo}, acertou em ${chute} ${palavraTenta}`);

