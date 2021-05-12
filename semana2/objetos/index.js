//---------------Example 1------------------//
/*
const cachorro = {
    corPelo: "Branco e Cinza",
    raça: "akita",
    porte: "médio",
    nome:  "Pitoco",
    coisaQueGosta: ["Correr", "Comer", "Dormir", "Latir"],
    latir: () => {
        console.log(cachorro.nome, "au, au")
    }
}

cachorro.latir()
*/

//notação de ponto
//cachorro.corPelo = 'Caramelo' 

//notação de [] - na notação de [] o valor tem que estar entre aspas
//cachorro["Porte"] = "Grande"


//---------Exercise 1 - Classroom----------//
/*
const filme = {
    nomeFilme: "Harry Potter e a Pedra Filosofal",
    diretor: "Chris Columbus",
    anoLancamento: "2001",
    elenco: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Tom Felton"],
    assistiu:true
    
}
console.log(filme.nomeFilme)
console.log(filme.diretor)
console.log(filme["anoLancamento"])
console.log(filme["elenco"])
console.log(filme.assistiu)

*/
//---------Exercise 2 - Classroom----------//
/*
const person = {
    personName: "Samira",
    age:"30",
    musicGender: "jazz"

}

console.log( `O nome da pessoa é  ${person.personName} ela tem ${person.age} e gosta muito de ${person.musicGender}. `)

*/

//---------Exercise 3 - Classroom----------//
/*
const filme = {
    nomeFilme: "Harry Potter e a Pedra Filosofal",
    diretor: "Chris Columbus",
    anoLancamento: 2001,
    elenco: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Tom Felton"],
    assistiu: true

}

filme.personagens = ["Harry Potter", "Hermione Granger", "Ronald Weasly", "Draco Malfoy"]
console.log("Ator:" , filme.elenco[3])
console.log("Atriz:", filme.elenco[1])

filme.elenco[3] = "Xuxa"

console.log(filme)
console.log(`O nome do filme é ${filme.nomeFilme}. E seu personagem ${filme.personagens[3]} foi interpretado por ${filme.elenco[3]}.`)
*/

//---------Exercise 4 - Classroom----------//
/*
const onePerson = {
    personName: "Samira",
    age:30 ,
    musicGender: "jazz"

}

function  addInf(objectPerson) {
  const newPerson = {
    ...objectPerson,
    favFood: ["Fish", "Chocolate", "Fries"],
    bestFriend:  {
    bestName: "Luciana",
    bAge: 30
    }
  }

return newPerson
}

const changedPesron = addInf(onePerson)
console.log( `O nome da pessoa é  ${changedPesron.personName} suas comidas favoritas são ${changedPesron.favFood[0]}, ${changedPesron.favFood[1]} e ${changedPesron.favFood[2]}. Sua melhor amiga se chama ${changedPesron.bestFriend.bestName} e tem ${changedPesron.bestFriend.bAge}. `)

*/

//---------Exercise 1 - Code Interpretation----------//

//vai ser impresso no console:
//Matheus Nachtergaele, Virginia Cavendish e Canal Globo, horario 14h

//---------Exercise 2 - Code Interpretation----------//
//a. quando chamar cachorro vai aparecer os valores para cada parametro do objeto, no caso: Juca, 3 e SRD.
//   quando chamar gato, vai alterar aparecer Juba,3 e SRD
//   quando chmara tartarura vai aparecer Jubo, 3 e SRD

//b.  faz o espelhamendo de um objeto, exibindo os parametros e valores que existem no objeto original.


//---------Exercise 3 - Code Interpretation----------//
//a. vai aparecer o valor para a propreidade bachender, no caso false. E tambem undefinied; pois não existe a propriedade altura.

//b. A função minhaFuncao já tinha seus parametros definidos, por isso ao mandar imprimir o retorno ele devolve os parametros da função. 
//   no caso do primeiro console.log,  objeto pessoa e a propriedade backender. Enquanto que no segundo console.log apesar de nao ter a 
//   propriedade altura definida, ele não da erro. 


//---------Exercise 1 - Code Writing----------//

/*
const person ={
     myName: "Samira",
     myNickName: ["Sam", "Samy", "Mira"]
}

function nickName(){
    console.log(`Im ${person.myName}, but you can call me ${person.myNickName[0]}, ${person.myNickName[1]} or ${person.myNickName[2]}.`)
}


nickName()


function  addInf(objectNick) {
    const newNickName = {
      ...objectNick,
      myNickNames: [ "Samiroca", "Samirex", "Sasa"]
      }
      
  return newNickName
  }

const otherNickName = addInf(person)
console.log(`Im ${otherNickName.myName}, but you can call me ${otherNickName.myNickName[0]}, ${otherNickName.myNickName[1]} or ${otherNickName.myNickName[2]}.`)
*/


//---------Exercise 2 - Code Writing----------//
/*
const objectOne ={
    nome: "Samira",
    idade: 30,
    profissão: "Adminstradora"
    
}
    
const objectTwo ={
    nome: "Luciana",
    idade: 30,
    profissão: "Bióloga"
    
}

function objects(){
      console.log(objectOne.nome, objectOne.nome.length, objectOne.idade, objectOne.profissão, objectOne.profissão.length)
}

objects()
*/

//---------Exercise 3 - Code Writing----------//

/*
const carrinho = [] 

const fruta1 = {
    nome: "banana",
    disponibilidade: true
    
}
 
const fruta2 ={
    nome: "laranja",
    disponibilidade: true
}

const fruta3 ={
    nome: "maça",
    disponibilidade: true
}

function compra(){
    const addcarrinho= carrinho.push(fruta1, fruta2, fruta3)
    

    console.log(carrinho)
}

compra()
*/