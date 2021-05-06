//-------------------Exercise 1 Classroom----------------//
/*
function printGreeting(){
     console.log("Hello World")

        
}

printGreeting()

// to call a function is need be out of the {} 
*/

//------------------Exercise 2 Classroom----------------//
/*

function printName(){
        
        console.log(name1, name2, name3)
        
    }
let name1 = prompt("What's your name?")
let name2 = prompt("What's the name of your bestfriend?")
let name3 = prompt("What's the name of your best girlfriend?")

printName()
*/

//------------------Exercise 3 Classroom----------------//
/*
function sum(){
    const result = Number(num1)+Number(num2)
    console.log(result)

}
 
const num1 = prompt("Insert a number")
const num2 = prompt("Insert another number")

sum()



// remember!! when you use a prompt the return is string, so you must transform this string on a number.
*/

//------------------Exercise 4 Classroom----------------//
/*

function medFunction(arrayNum){
 
    const newArray = []
    const arraySize = arrayNum.length
    const firtNum = arrayNum[0] / 2
    const lastNum = arrayNum[arraySize-1] / 2
    newArray.push(firtNum, lastNum)
    return newArray


}

const result = medFunction([2, 5, 7, 9, 8, 4])
console.log(result)

*/

//------------------Exercise 5 Classroom----------------//
//function expression
/*
const printName = function(name){
    console.log(`${name}`)
            
}

printName("Samira")
printName("Sam") 
printName("Mira") 



*/

//------------------Exercise 6 Classroom----------------//
/*
const sum = (num1, num2)=>{
    const result = Number(num1)+Number(num2)
    console.log(result)

}
 
const num1 = prompt("Insert a number")
const num2 = prompt("Insert another number")

*/


//------------------Exercise 1 Code Interpretation----------------//

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

minhaFuncao(2)
console.log(minhaFuncao(10))

//1. Will be printed de result of declaret value * 5 , in this cases 10 and 50 
//2. Nothing will be print, since it's necessary that the comand console.log is inside the function to then print some result

*/

//------------------Exercise 2 Code Interpretation----------------//

/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. suposedly the answer should be something like all words in lowercase, and verify if has the word "cenoura" between them
  // but i really think that functions has somethink wrong. i can't find the relation between "function(texto) and "textoDoUsuario.

//b. i- i think thats has "cenoura"  and lowercase must return true. 
     ii. same
     iii. same

*/

//------------------Exercise 1 Code Writing----------------//
/*
function mySelf(){

    console.log("I'm " , myName, " . I have " , myAge, " year old. I live in " , myPlace, " and I'm a " , myJob, " .")

}

let myName = prompt("Insert your name")
let myAge = prompt("Insert your age")
let myPlace = prompt("Insert where you live")
let myJob = prompt("Insert your profission")

mySelf()
*/

//------------------Exercise 2 Code Writing----------------//

//a 
/*
function sum(){
    const result = Number(num1)+Number(num2)
    console.log(result)

}
 
const num1 = prompt("Insert a number")
const num2 = prompt("Insert another number")

sum()
*/

/*
//b.
function booNum(){
    const result = Number(num3)>=Number(num4)
    console.log(result)

}
 
const num3 = prompt("Insert a number")
const num4 = prompt("Insert another number")

booNum()

*/

//c.
/*
function booPair(){
    const result = Number(num5)%2===0
    console.log(result)

}
 
const num5 = prompt("Insert a number")

booPair()
*/

/*
//d.
function printText(){
    const textSize = text.length
    console.log("The text ",  text.toUpperCase(), " length is ",textSize)
       
}

let text = prompt("Insert a phrase")
printText()

*/


//------------------Exercise 3 Code Writing----------------//

//a.
function sum(){
    const result = Number(num1)+Number(num2)
    console.log("The numbers inserts are:" ,num1, " and " ,num2 )
    console.log("The sum is " ,result)

}
 
//b.
function sub(){
    const result = Number(num1)-Number(num2)
    console.log("The subtracion is: ", result)

}

//c.
function mut(){
    const result = Number(num1)*Number(num2)
    console.log("The multiplication is: ",result)

}

//d.
function div(){
    const result = Number(num1)/Number(num2)
    console.log("The division is: ",result)

}

const num1 = prompt("Insert a number")
const num2 = prompt("Insert another number")


sum()
sub()
mut()
div()
