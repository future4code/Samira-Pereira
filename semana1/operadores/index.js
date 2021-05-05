//-------------Execício 1 Sala de aula --------------------//

/*
const a = 3
const b = 4
const e1 = a+b
const e2 = (a*5)/2
const e3 = (5-b)*-1
const e4 = 234%5
console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)
*/
//--------------Exercício 2 Sala de aula ------------------//
/*
let a1 = prompt("Informe um número")
let b1 = prompt("Informe mais um número")

console.log("O primeiro número é igual ao segundo", a1===b1)
console.log("O primeiro número é diferente do segundo", a1!==b1)
console.log("O primeiro número é maior que o segundo", a1>=b1)
console.log("O primeiro número é menor que o segundo", a1<=b1)
*/

//--------------Exercício 3 Sala de aula-------------------//

/*
a2 = true
b2 = false
c2 = true

console.log(a2&&b2)
console.log(b2&&c2)
console.log(a2&&c2)
console.log(a2&&b2&&c2)
*/


//--------------Exercício 4 Sala de aula-------------------//
/*
console.log(a2||b2)
console.log(b2||c2)
console.log(a2||c2)
console.log(a2||b2||c2)
/*

//--------------Exercício 5 Sala de aula-------------------//

/*
let nome = prompt("Informe seu nome:")
let anoNasc = prompt("Qual ano você nasceu?")
let anoAtual = prompt("Qual ano estamos")
idade = anoAtual-anoNasc
idFutura = (2050-anoAtual) + idade
console.log("Nome:", nome)
console.log("Idade:", idade )
console.log("É maior de idade?" , (idade>=18))
console.log("Em 2050 terei:", idFutura, "anos")
*/

//--------------Exercício 1 TAREFA-------------------//
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // Retorna falso, porque usam "&&" que é para igual

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // Retorna falso, porque usam "&&" que é para igual

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // Retorna verdadeiro, porque usam "||" que é pra "OU"

console.log("d. ", typeof resultado) //Retorna o tipo de variável
*/

//--------------Exercício 2 TAREFA-------------------//

/*
let primeiroNumero = prompt("Digite um numero!") 
let segundoNumero = prompt("Digite outro numero!")

const soma = (primeiroNumero + segundoNumero)

console.log(soma) 

// ao passar o mouse acima da variavel, ele informa que esta capiturando um valor em string, 
// é necessario tranformar em number
// por isso o que esta sendo retornado é apenas os valores lado a lado, sem executar a operação de soma

*/

//--------------Exercício 3 TAREFA-------------------//

/*
let primeiroNumero = prompt("Digite um numero!") 
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number5(segundoNumero)

console.log(soma) 

*/

//--------------Exercício 1 TAREFA -  Escrita de código-------------------//

/*
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

*/

/*

let id1 = prompt("Informe sua idade:")
let id2 = prompt("Informe a idade do seu colega:")
maiorQ= Number(id1)>Number(id2)
difIdad= Number(id1)-Number(id2)
console.log("Sua idade é maior que a do seu colega?" , maiorQ)
console.log("A diferença de idade entre vocês é de ", difIdad, "anos")
*/

//--------------Exercício 2 TAREFA -  Escrita de código-------------------//

/*
Faça um programa que:
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

/*
let nPar = prompt("Insira um número par")

restDiv = Number(nPar)%2

console.log(restDiv)
// qual quer número par inserido, o resto da divisão dele por 2 é igual a 0.
// se inserir um número impar, o resto da divisão dele por 2 é igual a 1.

*/

//--------------Exercício 3 TAREFA -  Escrita de código-------------------//

/*
Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas
*/

/*
let anos = prompt("Quantos anos você tem?")
meses = Number(anos)*12
dias = Number(anos)*365
horas = dias*24

console.log("Sua idade é de", meses, "meses")
console.log("Sua idade é de", dias, "dias")
console.log("Sua idade é de", horas, "horas")
*/

//--------------Exercício 4 TAREFA -  Escrita de código-------------------//

let firstNum = prompt("Digite um numero!") 
let secondNum = prompt("Digite outro numero!")
rest1 = Number(firstNum)%Number(secondNum)
rest2 = Number(secondNum)%Number(firstNum)


console.log("O primeiro número é maior que o segundo", firstNum>=secondNum)
console.log("O primeiro número é igual ao segundo", firstNum==secondNum)
console.log("O primeiro número é divisível pelo segundo", rest1==0)
console.log("O segundo número é divisível pelo primeiro", rest2==0)
