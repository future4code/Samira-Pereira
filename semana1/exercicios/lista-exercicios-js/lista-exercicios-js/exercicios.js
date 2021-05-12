// Exemplos

// Exercício 0A
/*
function soma(num1, num2) {
 
   return Number(num1) + Number(num2)
}

let num1 = prompt("Informe um numero")
let num2 = prompt("Informe outro numero")

soma()
/*
// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

imprimeMensagem()
*/

// Exercícios

//Exercício 1
/*
function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = prompt('Digite a altura')
   const largura = prompt('Digite a largura')

   console.log(altura * largura)
}

calculaAreaRetangulo()
*/

//Exercício 2
/*
function imprimeIdade() {
   // implemente sua lógica aqui
    
   let year = prompt("Que ano estamos")
   let yBirth = prompt("Que ano voce nasceu?")
   console.log(year-yBirth)
}

//let yBirth = prompt("Que ano voce nasceu?")
//let year = prompt("Que ano estamos")

imprimeIdade()

*/

//Exercício 3
/*
function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   
   let IMC = (Number(peso)/(Number(altura)*Number(altura)))
   console.log(IMC)

}

calculaIMC()
*/
//Exercício 4
/*
function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   
      let nome = prompt('Digite seu nome')
      let idade = prompt('Digite seu idade')
      let email = prompt('Digite seu email')
   
      console.log(`Meu nome é ${nome}, tenho  ${idade} anos, e o meu email é ${email}.`)
   
}
imprimeInformacoesUsuario()

*/
//Exercício 5
/*
function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   
      let coresFavoritas = []
      coresFavoritas[0] = prompt('Digite uma cor favorita:') 
      coresFavoritas[1] = prompt('Digite uma cor favorita:') 
      coresFavoritas[2] = prompt('Digite uma cor favorita:')
      console.log(coresFavoritas) 
   

}

imprimeTresCoresFavoritas()
*/

//Exercício 6
/*
function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return string.toUpperCase()
}
retornaStringEmMaiuscula()
*/

//Exercício 7
/*
function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo/valorIngresso
}

calculaIngressosEspetaculo()

*/
// Exercício 8
/*
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
   const check = string1.length==string2.length
   return check
}

checaStringsMesmoTamanho()
*/

// Exercício 9
/*
function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]

}

retornaPrimeiroElemento
*/

// Exercício 10
/*
function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const lastArray = array[array.length -1]
   return lastArray
}

retornaUltimoElemento()
*/
//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   
  //let troca = ((array[0].replaceAll(array[0], array[array.length -1]))( array.replaceAll(array[array.length -1],array[0])))
   
  const changePlace =  array.replaceAll(/array[0]/,[array.length -1])
   //return array.replaceAll("array[0]","[array.length -1]"), array.replaceAll("[array.length -1]","array[0]")
   //frase.toUpperCase().replaceAll("A", "I"), frase.length
   return changePlace
}
trocaPrimeiroEUltimo()

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
    return string1.toUpperCase()===string1.toUpperCase()
   

}
checaIgualdadeDesconsiderandoCase

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   let anoAtual = prompt("Qual ano atual")
   let anoNasc = prompt("Qual ano de nascimento")   
   let anoCart = prompt("Qual ano foi emitida a carateira")

   idade = anoAtual-anoNasc
   carteira = anoAtual-anoCart

   const a = idade <= 20 && carteira >= 5 
   const b = idade > 20 && idade <=50 && carteira >=10
   const c= idade >50  && carteira >=15 

}



// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
 return ano%4==0 && ano%100==0

}

checaAnoBissexto
// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}