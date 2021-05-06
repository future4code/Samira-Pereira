//------------------Exercício 1 Sala de Aula----------------//

/*
let myName = prompt("Qual o seu nome?")
let favColor = prompt("Qual a sua cor favorita")
const phrase = `A cor favorita de  ${myName} é ${favColor} !` // template string
console.log("A cor favorita de " + myName +  " é " +favColor+ "!") //concatenação
console.log(phrase)

//Obs: o ${} só funciona se estive dentro de (` `) aspas, pois são placeholders, ou seja, possuem uma função.
//Obs2:  a concatenação tem que colocar espaço antes de depois de fechar as aspas duplas, senão saem coladas as palavras. 
*/


//------------------Exercício 2 Sala de Aula---------------//

/*
const expression = prompt("Escreva uma frase!")
const upCase = expression.toUpperCase()
const changePlace =  expression.replaceAll(/[aAeEoOuU]/ig,"i")
const size =  expression.length

console.log(expression)
console.log(upCase)
console.log(changePlace)
console.log(size)

// Obs. no exercício de replaceAll, o "ig" significa insensitive global, ou seja.. pega letras em maíuculas e minusculas.

*/

//--------------------Exercício 3 Sala de Aula-------------//

/*
const dogSpitz = ["Caramelo" , "Negão", "hotpincher", "yorkshitzuPoodle", "Malhadinho" ]
let sortNum = prompt("Escolha um número de 0 à 4 e descubra qual cãozinho SRD é seu!")

console.log(dogSpitz[sortNum])

//Obs: nessa caso é necessario criar uma função, chamando a lista primeiro, e depois o numero escolhido
// no entanto deve-se lembrar que no array, a lista inicia do "0", por isso o enunciado é do "0 a 4"

*/


//-------------------Exercício 4 Sala de Aula----------------//
/*
const myNumbers = [1,2,3,4,5,6]
console.log(myNumbers)
console.log(myNumbers.length)

myNumbers.push(7)
myNumbers.splice(3,2)
console.log(myNumbers)
console.log(myNumbers.length)

Obs: push adiciona um novo array
Obs2: splice elimina os array indicados conforme (posição,quantidade de arrays)
*/

//-------------------Exercício 1 Tarefa Intepretação de código-----//
/*
let array
console.log('a. ', array) // array nao esta determinada.. logo vai aparecer como indefinido

array = null
console.log('b. ', array) // vai aparecer o valor determinado pela array, no caso "null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //vai aparecer o tamanho do array, no caso como são numeros, 
                                 //vai informar quantos numeros tem no array, sem considerar o espaço e pontuação entre eles.

let i = 0
console.log('d. ', array[i])// nesse caso foi executada uma função, chamando o array do codigo acima,
                            // com a possição informada nesse  codigo. 

array[i+1] = 19
console.log('e. ', array) // nesse caso, foi alterado o valor do array na posição indicada neste codigo

const valor = array[i+6]
console.log('f. ', valor) //nesse caso vai informar o valor do array na posição indicada.

*/

//-------------------Exercício 2 Tarefa Intepretação de código-----//

/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //é para retornar a frase com letras maíusculas, 
                                                                    // com as vogais "A" sendo subistituidas pela "I"
                                                                    // e o tamanho da frase, considerando espaço e pontuação.


*/

//-------------------Exercício 1 Tarefa Escrita de código-----//
/*
let userName = prompt("Qual o seu nome de usuário?")
let userMail = prompt("Qual o seu email de usuário")

alert("O E-mail " + userMail + " foi cadastrado com sucesso! Seja bem vindo " + userName + " !"  ) 

// usei o comando alert para aparecer na tela html. 

*/


//-------------------Exercício 2 Tarefa Escrita de código-----//

/*
const favFood = ["Filé de pintado frito", "Mujica de Pintado", "Pirão de peixe", "Ventrecha de Pacu", "Pacu assado"] // é eu amo peixe da minha terra.. MT

console.log("Essas são as minhas comidas favoritas:")
console.log(favFood[0])
console.log(favFood[1])
console.log(favFood[2])
console.log(favFood[3])
console.log(favFood[4])

let userFood = prompt("Qual é a sua comida favorita?")

favFood[1] = userFood

console.log(favFood[0])
console.log(favFood[1])
console.log(favFood[2])
console.log(favFood[3])
console.log(favFood[4])

*/

//-------------------Exercício 3 Tarefa Escrita de código-----//

/*
let toDoList =[];

let task0 = prompt("Insira a primeira tarefa de hoje:")
let task1 = prompt("Insira a segunda tarefa de hoje:")
let task2 = prompt("Insira a terceira tarefa de hoje:")

toDoList[0]= task0
toDoList[1]= task1
toDoList[2]= task2

console.log(toDoList)

let done = prompt("Qual tarefa você ja realizou? Digite: 0 para a primeira; 1 para a segunda e 2 para a terceira.")

toDoList.splice(done,1)

console.log(toDoList)
*/

//------------------DESAFIO 1---------------------------------//

/*
let thePhrase = prompt("Insira uma frase!")

console.log(thePhrase)

phraseSplited = thePhrase.split(["  " [ +1 ]])

console.log(phraseSplited)

*/


//------------------DESAFIO 2---------------------------------//

/*
let fruts = [ "Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(fruts)

let favFrut = prompt("Banana, Morango, Abacaxi, Laranja, Ameixa. Das frutas acima, qual sua fruta favorita ?")

let foundfruts = fruts.find(favFrut==fruts)
let foundIndex = fruts.findIndex(foundfruts)

console.log(foundIndex, ".", foundfruts)
*/
// ainda não consegui resolver esse desafio 2.. acho que estou colocando
// os elementos do find.  de forma errada. 