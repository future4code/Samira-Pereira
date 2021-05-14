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

    function blackJack(){

      if(confirm("Quer iniciar uma nova rodada?")){

      let player1Mao1 = comprarCarta();
      let player2Mao1 = comprarCarta();
      
      let compararCarta=(player1Mao1, player2Mao1)=>{                                         //comparar se cartas são "A"
         if(player1Mao1.texto == "A" && player2Mao1.texto== "A"){
            player1Mao1 = comprarCarta();                               //caso true; comprar mais cartas
            player2Mao1 = comprarCarta();
      
            
      }else{
         let player1Mao2 = comprarCarta();
         
         console.log(`Suas cartas são ${player1Mao1.texto} e ${player1Mao2.texto} \n
         e a carta revelada do Computador é ${player2Mao1}.`)
         
         if(confirm("Deseja comprar mais uma carta?")){
              let player1Mao3 = comprarCarta() ;
         }else{
            console.log("Ok! Jogo encerrado")
         }

      }
   }
      }else{
         console.log("Joga encerrado")
      }

   }

   blackJack()