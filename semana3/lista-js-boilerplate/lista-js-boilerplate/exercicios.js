//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui

  //solução1 - mas o teste.js diz q errei... 
   console.log(array)
   arrayInvertida=[]
   for(i= array.length-1; i>=0; i--){
      arrayInvertida.push(array[i])
     
   }
  //console.log(arrayInvertida)
  return arrayInvertida
}
 
 inverteArray()


//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let arrayDePar = []
   for(i=0; i<array.length-1; i++){
       
      if(array[i]%2 === 0){
         arrayDePar.push(array[i]**2)
             }
             return arrayDePar
          }
             
      }

   retornaNumerosParesElevadosADois()


   //solução 2
   function retornaNumerosParesElevadosADois (array) {
      // implemente sua lógica aqui
      const novoArray = array.filter((num)=>{
         return num%2 === 0
      }).map((num)=>{
         return num*num
      })
   
      return novoArray
   }

   //Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const novoArray = array.filter((num)=>{
      return num%2 === 0
   })
        
      }
   retornaNumerosPares()
//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
      let maiorNumero = 0
  
      for(let i=0 ; i <array.length; i++){
          if (array[i] > maiorNumero){
              maiorNumero = array[i]
          }
      }
  
  return maiorNumero
  }
  
  const maiorNumeroArray = retornaMaiorNumero ()
  
  console.log(maiorNumeroArray)


//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   //console.log(array.length)
   return array.length
}
retornaQuantidadeElementos()


//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 

   const respostasA = booleano1 && booleano2 && !booleano4 
   const respostasB = (booleano1 && booleano2) || !booleano3
   const respostasC = (booleano2 || booleano3) && (booleano4 || booleano1)
   const respostasD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   const respostasE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   console.log(respostasA, respostasB, respostasC, respostasD, respostasE)
}
retornaExpressoesBooleanas()


//Exercicio 7
function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   for(let i=0; i<n; i++){
      console.log(i*2)
   }
}
retornaNNumerosPares()

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
 
  switch (triangulo){
     case (a===b===c):
     return'Equilátero'
       break;
     case(a===b && b===c && a!==c || a===c && b===c && a!==b):
     return'Isósceles'
        break ;
     default:
      return 'Escaleno' 
      break;
  }
   
}

checaTriangulo()


// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   
   console.log(num1,num2)
   const maior = num1
   const menor = num1
    if (num2 > maior){
       maior = num2
    }else if (num2 < num1){
       menor = num2
    }
    return ("Maior numero =" +maior)

    
    for(maior % 2 === 0);{
      console.log("O valor maior é divisivel pelo menor:", true)
    }
    const diferenca= (maior - menor)
    console.log("A diferença é", diferenca)
    }
   
  
  
comparaDoisNumeros()


// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui

       let objeto = {
         nome:'O Senhor dos Aneis',
         ano: Number(2001),
         diretor:'Peter Jackson',
         atores:['Elijah Wood', 'Liv Tayler', 'Ian McKellen','Sean Astin' ]  }
   
   
   
      return objeto }
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
  const chamada(...objeto) 
  return 'Venha assistir ao filme $.{nome}'
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
 //implemente sua lógica aqui
}