//-----------------Example 1-------------//
//Se esta frio,coloc um casaco. Se não, não faço nada.

/*
let clima =prompt("Qual o clima de hoje?")

if(clima ==="frio"){
    console.log("Coloque o casaco menin@!!")

}else{
    console.log("Tras o ventilador!!")
}
*/
//---------Exersise 1 and 2 Classroom ----------//
//1. Escreva um programa que receba 2 números digitados pelo usuário (chamaremos de "a" e "b"). Compare esses números entre si.
// Se os números forem iguais, retorna uma mensagem de sucesso. 
/*
const comparaValores = () =>{

let a = prompt("Digite um número")
let b = prompt("Digite mais um número")

if (a === b){
    console.log(`Os valores são iguais.`)
//2.Retorne uma mensagem se os números são iguais ou diferentes. 

} else { 
    console.log("Os valores são diferentes.");

} 
}
comparaValores()
*/
//---------Exersise 3 Classroom ----------//
/*
const comparaValores1 = () =>{

    let a = Number(prompt("Digite um número"))
    let b = prompt("Digite mais um número")
    
    if (a > b){
        console.log(`O valor ${a} é maior que  o valor ${b}.`)
    
    } else if (a < b){
        console.log(`O valor ${a} é menos que o valor ${b}`)
    
    } else { 
        console.log("Os valores são iguais.");
    
    } 
}
   
comparaValores1()
*/

//---------Exersise 4 Classroom ----------//
/*
const pokemon = () =>{
    
let meuPokemon = prompt("Qual o seu pokemon?").toLowerCase()
switch (meuPokemon) {
    case "bulbasauro" , "paras" , "bellsprout", "exeggcute", "gloom" :
        console.log(`O seu ${meuPokemon} é do tipo Planta e Veneno` )
        break;
    case "charmander", "vulpix", "nenetales", "ponyta":
        console.log(`O seu ${meuPokemon} é do tipo Fogo`)
        break;
    case "squirtle", "wartortle", "blastoise", "psyduck":
        console.log(`O seu ${meuPokemon} é do tipo Água`)
        break;
    
    default:
        console.log("Tipo de Pokemon não encontrado.")
        break;
}
}

pokemon() 
*/

//---------Exersise 5 Classroom ----------//
/*
const universitario = () =>{

    let ensMedio = prompt("Voce já concluiu o ensino médio?")
        
    if (ensMedio === "sim") {

        let maiorIdade = prompt("Voce é maior de idade?")
        if (maiorIdade === "sim"){
        
            let outraFaculdade = prompt("Voce esta cursando outra faculdade?")
            if ( outraFaculdade === "não"){
                console.log("Voce pode fazer uma faculdade")
            } else {
                console.log("Voce não pode fazer uma faculdade")
            }
        }else{
            console.log("Voce não pode fazer uma faculdade")
        }    

}else{
    console.log("Voce não pode fazer uma faculdade")
}
}
universitario()
*/


//---------Exersise 1 Code Interpretation ----------//
//1a. O codigo pede um valor, transforma em número e depois ele verifica se o resto  do numero informado pelo usuario por 2, é igual a 0.
// faz um teste de igualdade de tipo, valor.

//1b. Qual quer numero par.
//1c. Qualquer numero impar.


//---------Exersise 2 Code Interpretation ----------//
//2a. Para colocar varios condicionais em cima de uma unica variavel , no caso fruta. 
//2b. O preço da fruta Maça é R$2.25.
//2c. Se tirar o break , o comando ficará executando as operações abaixo dele ate acabar, ou encontrar um break. 
// nesse caso, iria parar logo em seguida, pois a proxima operacao a ser executada ja é o default. 


//---------Exersise 3 Code Interpretation ----------//
//3a. a primeira linha esta soliciando um numero atraves do prompot, e transformando esse valor em numero, visto que todos os valores
// recebidos por prompt é uma string.
//3b. se numero informado igual a 10 a resposta seria : Esse número passou no teste. Se fosse -10, daria um erro, pois não tem uma operacao 
//a ser executada caso o valor informado nao atenda a condição estabelecida no if.
//3.c - Sim pois existe um console.log(mensagem), porem não esta definido quando essa condição deve ser usada. a condição correta seria a abaixo.

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
}else{
	let mensagem = "Essa mensagem é secreta!!!"
    console.log(mensagem)
}
*/


//---------Exersise 1 Code Writing ----------//
/*
const possoDirigir = () =>{
    let idade = Number(prompt("Qual a sua idade"))
    

    if (idade >= 18){
        console.log("Voce pode dirigir")
    } else{
        console.log("Voce não pode dirigir")
    }

}

possoDirigir()

*/


//---------Exersise 2 Code Writing ----------//
/*
//solução1
const turnoAula = ()=>{
    let turno = prompt("Informe o turno que você estuda. Digite M para matutino, V para vespertino e N para noturno.").toLowerCase()

    if (turno == "m"){
        console.log("Bom dia!")
    
    } else if (turno == "v"){
        console.log("Boa tarde!")
    
    } else {
        console.log("Boa Noite")
    }
}

turnoAula()
*/

//solução 2
/*
const turnoAula = ()=>{
    let turno = prompt("Informe o turno que você estuda. Digite M para matutino, V para vespertino e N para noturno.")

    if (turno == "m"|| turno == "M"){
        console.log("Bom dia!")
    
    } else if (turno == "v" || turno == "V"){
        console.log("Boa tarde!")
    
    } else if (turno == "n" || turno ==  "N"){
        console.log("Boa Noite")
    
    } else{
        console.log("Não consegui identificar seu turno de estudo")
    }

}

turnoAula()

*/

//---------Exersise 3 Code Writing ----------//
/*
const saudacao = ()=>{
    let turno = prompt("Informe o turno que você estuda. Digite M para matutino, V para vespertino e N para noturno.").toLowerCase()
    
    switch (turno) {
        case "m":
            console.log("Bom dia Alun@s do Matutino!")
            break;
        case "v":
            console.log("Boa tarde Alun@s do Vespertino!")
            break;
        case "n":
            console.log("Boa noite Alun@s do Noturno!")
            break;
        default:
            console.log("Não consegui identificar seu turno de estudo")
            break;
    }
}
saudacao()
*/

//---------Exersise 4 Code Writing ----------//
/*
const cineminha = ()=>{
    let tipoFilme = prompt("Qual tipo de filme voce quer assistir?").toLowerCase()
    let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

    if (tipoFilme === "fantasia" && valorIngresso <= 15) {
        console.log("Bom filme!")
    
    }else {
        console.log("Escolha outro filme.")
    }
}

cineminha()
*/

//------------------Challange 1--------------//
/*
const cineminha = ()=>{
    let tipoFilme = prompt("Qual tipo de filme voce quer assistir?").toLowerCase()
    let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

    if (tipoFilme === "fantasia" && valorIngresso <= 15) {
        let lanchinho= prompt("Quais snacks voce vai querer? Escolha até 3 lanches da nossa bomboniere")
        const mySnack = lanchinho.split(',', 3)
        console.log(`Bom filme, e aproveite suas guloseimas: ${mySnack[0]}, ${mySnack[1]}, ${mySnack[3]}! `)
    
    }else {
        console.log("Escolha outro filme.")
    }
}

cineminha()
*/
//------------------Challange 2--------------//

//let nomeTorcedor = prompt("Qual é o seu nome")
//let tpJogo = prompt("Qual tipo de jogo é? Digite IN para internacional, e DO para doméstico.").toLowerCase()
//let etCamp = prompt("Qual etapa do campeonato? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final")
//let catArqui = Number(prompt("Qual a categoria de assento voce quer? Digite 1 para Primeira categoria, 2 para segunta categoria, 3 para terceira categoria e 4 para quarta categoria"))
//let qdtIngresso = Number(prompt("Quantos ingressos voce quer?"))

/*
const ingressoJogo=() =>{
    let nomeTorcedor = prompt("Qual é o seu nome")
    let qdtIngresso = Number(prompt("Quantos ingressos voce quer?"))
    let tpJogo = prompt("Qual tipo de jogo é? Digite IN para internacional, e DO para doméstico.").toLowerCase()
    if (tpJogo == "in"){
         tipoJogo = "Internacional"
    }else{
         tipoJogo = "Nacional"
    }
     
    let etCamp = prompt("Qual etapa do campeonato? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final").toLowerCase()
    if (etCamp == "sf"){
         etapaJogo = "Semi-Final"
    } else if (etCamp == "dt"){
         etapaJogo = "Decisão do terceiro Lugar"

    }else{
         etapaJogo = "Final"
    }

    let catArqui = Number(prompt("Qual a categoria de assento voce quer? Digite 1 para Primeira categoria, 2 para segunta categoria, 3 para terceira categoria e 4 para quarta categoria"))

     if (tpJogo == "in" && etCamp == "sf" && catArqui== 1){
         valorIngresso = 1320*4.10
    
    }else if (tpJogo == "in" && etCamp == "dt" && catArqui== 1){
         valorIngresso = 660*4.10

    }else if (tpJogo == "in" && etCamp == "fi" && catArqui== 1){
        valorIngresso = 1980*4.10

    }else if (tpJogo == "in" && etCamp == "sf" && catArqui== 2){
         valorIngresso = 880*4.10

    }else if (tpJogo == "in" && etCamp == "dt" && catArqui== 2){
        valorIngresso = 440*4.10

    }else if (tpJogo == "in" && etCamp == "fi" && catArqui== 2){
         valorIngresso = 1320*4.10

    }else if (tpJogo == "in" && etCamp == "sf" && catArqui== 3){
         valorIngresso = 550*4.10
        
    }else if (tpJogo == "in" && etCamp == "dt" && catArqui== 3){
         valorIngresso = 330*4.10

    }else if (tpJogo == "in" && etCamp == "fi" && catArqui== 3){
         valorIngresso = 880*4.10
    
    }else if (tpJogo == "in" && etCamp == "sf" && catArqui== 4){
         valorIngresso = 220*4.10

    }else if (tpJogo == "in" && etCamp == "sf" && catArqui== 4){
         valorIngresso = 170*4.10
    
    }else if (tpJogo == "in" && etCamp == "sf" && catArqui== 4){
         valorIngresso = 330*4.10

        //jogos domesticos

    }else if (tpJogo == "do" && etCamp == "sf" && catArqui== 1){
         valorIngresso = 1320

    }else if (tpJogo == "do" && etCamp == "dt" && catArqui== 1){
         valorIngresso = 660

    }else if (tpJogo == "do" && etCamp == "fi" && catArqui== 1){
         valorIngresso = 1980

    }else if (tpJogo == "do" && etCamp == "sf" && catArqui== 2){
         valorIngresso = 880

    }else if (tpJogo == "do" && etCamp == "dt" && catArqui== 2){
         valorIngresso = 440

    }else if (tpJogo == "do" && etCamp == "fi" && catArqui== 2){
         valorIngresso = 1320
        
    }else if (tpJogo == "do" && etCamp == "sf" && catArqui== 3){
        valorIngresso = 550

    }else if (tpJogo == "do" && etCamp == "dt" && catArqui== 3){
         valorIngresso = 330
    
    }else if (tpJogo == "do" && etCamp == "fi" && catArqui== 3){
         valorIngresso = 880

    }else if (tpJogo == "do" && etCamp == "sf" && catArqui== 4){
         valorIngresso = 220
    
    }else if (tpJogo == "do" && etCamp == "dt" && catArqui== 4){
         valorIngresso = 270
    
    }else{
         valorIngresso = 330

    }

    const valorTotal = (qdtIngresso*valorIngresso)
        //---------

    console.log(`--------Dados da Compra--------
    Nome do Cliente: ${nomeTorcedor}
    Tipo do Jogo: ${tipoJogo}
    Etapa do Jogo: ${etapaJogo}
    Categoria de assento: ${catArqui}
    Quantidade de Ingressos: ${qdtIngresso}
    ------------Valores-------------------
    Valor unitario do ingresso: ${valorIngresso}
    Valor total: ${valorTotal}`)     

}


ingressoJogo()

*/


//Solução2 Challange  -- ainda pensando como fazer o switch dentro do switch...


//let nomeTorcedor = prompt("Qual é o seu nome")
//let tpJogo = prompt("Qual tipo de jogo é? Digite IN para internacional, e DO para doméstico.").toLowerCase()
//let etCamp = prompt("Qual etapa do campeonato? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final")
//let catArqui = Number(prompt("Qual a categoria de assento voce quer? Digite 1 para Primeira categoria, 2 para segunta categoria, 3 para terceira categoria e 4 para quarta categoria"))
//let qdtIngresso = Number(prompt("Quantos ingressos voce quer?"))
/*

const ingressoJogo=() =>{
    let nomeTorcedor = prompt("Qual é o seu nome")
    let qdtIngresso = Number(prompt("Quantos ingressos voce quer?"))
    let tpJogo = prompt("Qual tipo de jogo é? Digite IN para internacional, e DO para doméstico.").toLowerCase()
    if (tpJogo == "in"){
         tipoJogo = "Internacional"
    }else{
         tipoJogo = "Nacional"
    }
     
    let etCamp = prompt("Qual etapa do campeonato? Digite SF para semi-final, DT para decisão do terceiro lugar e FI para final").toLowerCase()
    if (etCamp == "sf"){
         etapaJogo = "Semi-Final"
    } else if (etCamp == "dt"){
         etapaJogo = "Decisão do terceiro Lugar"

    }else{
         etapaJogo = "Final"
    }

    let catArqui = Number(prompt("Qual a categoria de assento voce quer? Digite 1 para Primeira categoria, 2 para segunta categoria, 3 para terceira categoria e 4 para quarta categoria"))
    let tpIngresso ()
     sf1 || fi2 == 1320
     sf2 || fi3 == 880
     sf3 == 550
     sf4 == 220
     dt1 == 660
     dt2 == 440
     dt3 || fi4 == 330
     dt4 == 170
     fi1 == 1980

    switch (ingressoInternacional) {
        case tpJogo("in"):
            tpIngresso.

        break;
        default:
            break;
    }

}
*/