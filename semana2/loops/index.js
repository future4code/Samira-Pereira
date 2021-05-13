//----------Exercise 1 - Classroom----//
/*
let numero 
let soma = 0

while (numero !== 0){
    numero = Number(prompt("Digite um número"))
    soma = soma + numero
}

console.log("A soma dos números é", soma)
*/
//----------Exercise 2 - Classroom----//
/*
function retornaMaiorNumero(arrayDeNumeros){
    let maiorNumero = 0

    for(let i=0 ; i <arrayDeNumeros.length; i++){
        if (arrayDeNumeros[i] > maiorNumero){
            maiorNumero = arrayDeNumeros[i]
        }
    }

return maiorNumero
}

const maiorNumeroArray = retornaMaiorNumero ([10, 9, 7, 13, 28, 1, 54])

console.log(maiorNumeroArray)

*/

//----------Exercise 3 - Classroom----//
/*
let palavras=["oi", "sumido", "tudo", "bem?" ,"saudades"]
    frase = ""

    for( i=0; i<palavras.length; i++){
        frase += palavras[i] + " ";
    }

    console.log(frase)
*/

//----------Exercise 1 - Code interpretation----//

//1. esta somando o valor da posição i +1 , e depois assumindo essa soma como valor. 
// conforme demonstrado abaixo: 
//valor 0 + posicao 0 = novoValor = 0 = valor
//valor 0 + posicao 1 = novoValor = 1 = valor
//valor 1 + posicao 2 = novoValor = 3 = valor
//valor 3 + posicao 3 = novoValor = 6 = valor
//valor 6 + posicao 4 = novoValor = 10 = valor

//----------Exercise 2 - Code interpretation----//
//a. sera impresso qualquer numero maior que 18, no caso: 19, 21,23,25,27,30.
//b. sim. ao usar o 'for of' é possivel acessar cada posição do array


//----------Exercise 3 - Code interpretation----//
//vai imprimir no console 4 linhas, onde cada linha vai ter o mesmo numero de caracter equivalente a sua posição no array.





//----------Exercise 1 - Code Writing----//
/*
const adotaPet = ()=>{
    let qtdPet = Number(prompt("Quantos pets voce tem?"))
    
    if (qtdPet > 1 ) {
        let nomePets= prompt("Coloque os nomes dos seus pets")
        listaPets = ""

        const myPets = nomePets.split(',', qtdPet)
        for( i=0; i<myPets.length; i++){
            listaPets = myPets[i] + "";
            console.log(listaPets)
        }
    }else{
            console.log("Que pena! Voce tem que adotar um pet")
    }
}

adotaPet()
*/
//solução 2
/*
let qtdPets = Number(prompt('Quantos bichinhos voce tem?'))
let pets = [] 
if(qtdPets === 0){
    console.log('Que pena! Voce pode adotar um pet!')
}else if(qtdPets > 0){
    for(let i=0; i<qtdPets; i++){
        pets[i] = prompt(`Nome do pet ${i+1}º:`)
        listaPets= pets[i] + "";
        console.log(listaPets)
    }
}
*/

//----------Exercise 2 - Code Writing----//

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
i=0
//2a
/*
for(i=0; i<arrayOriginal.length; i++){
arrayCopia = arrayOriginal[i] + "";
console.log(arrayCopia)
}
*/
//2b
/*
for(i=0; i<arrayOriginal.length; i++){
    arrayCopia = arrayOriginal[i] / 10;
    console.log(arrayCopia)
 }
*/

//2c
//1-pegar cada valor da array e dividir por %2
//2- pegar cada valor da arrayCopia e verificar se é ===0
//3-criar uma nova array com os valor dar posições do array copia ===0 como valor
//4- inserir os valores do array original correspondente a  do arrayCopia

/*
 for(i=0; i<arrayOriginal.length; i++){
    arrayCopia = arrayOriginal[i] % 2;
    console.log(arrayCopia)
 }
    if(arrayCopia === 0){
        console.log(arrayCopia[i])
    }
    let newArray = 

*/
  /*  function imprimiPar(arrayOriginal){
        let newArray = []
        for(let i=0; i<arrayOriginal.length; i++){
            if(arrayCopia[i] % 2 === 0){
                newArray.push(arrayCopia[i]===arrayOriginal[i])
           }
        }
    
        console.log(newArray)
    }
*/
 // pegar cada valor da arrayCopia e verificar se é ===0
//i=0
//function arrayPar(arrayOriginal){
    
      //  let arrayDiv = arrayOriginal % 2
      //  if(arrayDiv ===0)
       // console.log(arrayDiv)
        //const restDiv =  arrayDiv === 0
        //newArray = restDiv.push(arrayDiv === 0,i++)
        
//console.log(newArray)
//}


//arrayPar()

//2d
/*
 function imprimeIndexEValor(array){
    for(let i=0; i<=array.length-1;i++){
    console.log(`O elemento do índex ${i} é: ${array[i]}`)
    
    }
    
    }
*/

//e
/*
function retornaMaiorMenor(arrayOriginal){
    let maiorNumero = 0

    for(let i=0 ; i <arrayOriginal.length; i++){
        if (arrayOriginal[i] > maiorNumero){
            maiorNumero = arrayOriginal[i]
        }
    }


    let menorNumero = 0
    
    for(let i=0 ; i <arrayOriginal.length; i++){
    if (arrayOriginal[i] < menorNumero){
        menorNumero = arrayOriginal[i]
    }
}


}
const maiorNumeroArray = retornaMaiorMenor ()

console.log(maiorNumeroArray)

*/
