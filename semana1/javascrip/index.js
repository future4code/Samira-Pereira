//imprimir no consele  - console.log

//console.log("Olá Mundo!")

//para abrir uma janela de prompt com pergunta e um cx de texto para  responta

/*
Exercicio 1 -  Sala de aula
Faça os seguintes itens:
1. Crie uma variável e atribua seu primeiro nome
2. Crie uma variável e atribua seu sobrenome
3. Crie uma variável e atribua sua idade
4. Crie uma variável que diga se você é ou não estudante
5. Imprima o seu nome, sobrenome, idade e status de 
estudante no console

*/

/*const firstName = prompt("Qual o seu Primeiro nome?")
const lastName = prompt("Qual o seu sobrenome?")
let age = prompt("Qual é a sua idade?")
//let student = prompt("Voce é estudante Labenu?")
let resultado = prompt("Voce é estudante LABENU?");

    if (resultado == ('sim' , 'SIM', 'Sim')){
       isStudent = "sou"
    } else {
        isStudent = "não sou" 
}
console.log("Olá Mundo!, Meu nome é" ,firstName, "" ,lastName, "e tenho" ,age, "anos de idade, e eu" , isStudent , " estudante LABENU")

*/
//console.log("Olá Mundo!, Meu nome é" ,firstName, " " ,lastName, "e tenho" ,age, "anos de idade, e eu  estudante LABENU")


/*
Exercício 2 - Sala de aula
1. Peça nome do seu usuário através do prompt e guarde 
em uma variável
2. Peça a idade do seu usuário através do prompt e guarde 
em uma variável
3. Veja qual é o tipo das variáveis de nome e idade


*/
/*
console.log(typeof firstName)
console.log(typeof age)


*/

/*
Exercício de interpretação de codigo 

1- Neste exercício, a escrita pede apenas para exibir os valores das variaveis "a" e "b". De forma que sua resposta serão para o
primeiro comando o valor de "b", e para o segundo, os valores lado a lado de "a" e "b". 


2 - Neste exercício, a escrita pede apenas para exibir os valores das variaveis "a" e "b". No entanto, os valores serão os 
mesmos atribuidos à variavel "a", uma vez que todos os demais seguem a igualdade de seu valor. 


3-  Neste exercício, a variável "p" pode ser subistituida por "horasTrabalhada", a variável "t" pode ser subistituida por "valorDiaria"

*/


const horasTrabalhada = prompt("Quantas horas você trabalha por dia?")
const valorDiaria = prompt("Quanto você recebe por dia?")
t = number(valorDiaria)  
p = number(horasTrabalhada) 
alert("Você recebe R$ (t/p) por hora") 
