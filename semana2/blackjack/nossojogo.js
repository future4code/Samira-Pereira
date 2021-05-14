/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

 * 
 * 
 * 
 */

/*
**
* Estrutura do jogo - Blackjack
* Alert dando boas vindas ao jogo [x]
* confirm dando opção de iniciar ou encerrar o jogo[x] 
   usando {if else}
* criar 2 players
* criar 2 varaiaveis para chamar a compra de carta e imprimir seu resultado
* fazer um loop caso o valor da compra das 2 cartas seja menor que 21


*/
function blackJack(){
    alert("Bem vindo ao jogo BlackJack!")
         if(confirm("Quer iniciar uma nova rodada?")) {
            player = prompt("Qual o seu nome?")
               
            //primeira rodada
            const carta1 = comprarCarta();
            mao1Player = carta1.valor
            //console.log(`${player} sua primeira mão e ${carta1.texto} e sua pontuação é ${carta1.valor}`)  
            
            dealer = "Computador"
            const carta2 =comprarCarta();
            mao1Dealer = carta2.valor
            //console.log(`${dealer} sua primeira mão e ${carta2.texto} e sua pontuação é ${carta2.valor}`) 
            
            const carta3= comprarCarta();
            mao2Player = carta3.valor
            //console.log(`${player} sua segunda mão e ${carta3.texto} e sua pontuação é ${carta3.valor}`)  
            
            const carta4= comprarCarta();
            mao2Dealer = carta4.valor
           //console.log(`${dealer} sua segunda mão e ${carta4.texto} e sua pontuação é ${carta4.valor}`) 
            
            partidaPlayer = mao1Player + mao2Player
            console.log(`${player} suas cartas sao ${carta1.texto} e ${carta3.texto} e sua pontuação é ${partidaPlayer}`)
            
            partidaDealer = mao1Dealer + mao2Dealer 
            console.log(`${dealer} suas cartas sao ${carta2.texto} e ${carta4.texto}sua pontuação é ${partidaDealer}`)
          
            
            //2 rodada
               if (partidaPlayer < 21 && partidaDealer <21){
                  if(confirm("Quer continuar a rodada?")) {
                     const carta5= comprarCarta();
                     mao3Player = carta5.valor
                     //console.log(`${player} sua terceira mão e ${carta5.texto} e sua pontuação é ${carta5.valor}`)  
                      
                     const carta6= comprarCarta();
                     mao3Dealer = carta6.valor
                     //console.log(`${dealer} sua terceira mão e ${carta6.texto} e sua pontuação é ${carta6.valor}`) 
               
                 
            partidaPlayerFinal = partidaPlayer + mao3Player
            console.log(`${player} sua nova carta e ${carta5.texto} sua pontuação  agora é ${partidaPlayerFinal}`)
            partidaDealerFinal = partidaDealer + mao3Dealer
            console.log(`${dealer} sua nova carta e ${carta6.texto}sua pontuação agora é ${partidaDealerFinal}`)
             
                  }else{
                   console.log("Tudo bem. Jogo encerrado")       
                  }
               }     

            if(partidaPlayerFinal === 21 && partidaDealerFinal !==21){
               console.log(`${player} voce fez ${partidaPlayerFInal}. Parabéns.Voce Ganhou!!`)
            
            }else if (partidaPlayerFinal === partidaDealerFinal ) {
               console.log(`Voces empataram!`)
            
            }else if (partidaPlayerFinal !== 21 && partidaDealerFinal !==21) {
           console.log(`Nenhum de voces ganharam`)
             
            }else{
               console.log(`${player} você perdeu!`)
            }    
        
   }else{
    console.log("Jogo encerrado")
 }
}

 blackJack()