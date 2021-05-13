//---------Exemplos------------//
/*
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 100 },
    { nome: "Bellsprout", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 10 },
    { nome: "Vulpix", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
    { nome: "Psyduck", tipo: "água", vida: 0 },
]

//filtro por tipo
const pokemonsDeGrama = pokemons.filter((pokemon) => {
    return pokemon.tipo === "grama"
})
// console.log("De grama:", pokemonsDeGrama)

const pokemonsAquaticos = pokemons.filter((pokemon) => {
    return pokemon.tipo === "água"
})
// console.log("De água:", pokemonsAquaticos)

const pokemonsVivos = pokemons.filter((pokemon) => {
    return pokemon.vida > 0
})
// console.log("So os vivos:", pokemonsVivos)




//---------Exercicio sala 1---------//
//verificar se um numero é impar e imprimir uma afirmação caso for

/* minha solução

let numero = Number(prompt("Digite um número"))
const checkImpar=(numero,imprimeMsgm) => {
    
    if (numero % 2 !== 0 ){
        imprimeMsgm()
    }
}

const imprimeMsgm = () => {
    console.log("É impar!!!!")

}

checkImpar(numero,(imprimeMsgm))
*/


//---------Exercicio sala 2---------//
// crira uma array vazia, e pedir p inserir numeros para array
//em sala

/*
const arrayDeNumeros = [90, 89, 77, 64, 1]
const arrayDeString = arrayDeNumeros.map((numero, index) => {
    return `O numero no index ${index} é ${numero}`
})

console.log(arrayDeString)
/*


//minha tentativa..ainda em construção 

const imprimeArray1 = ()=>{
array1 = ""
    for(let i=0; i<=6; i++){
 let array1=Number(prompt("Digite 1 numero de 0 a 60 para jogar na mega sena"))
        console.log(array1)
    } 

}
imprimeArray1()
/*
//---------Exercicio sala 3---------//
/*
//solução em sala
const listaOriginal = [1, 2, 3, 4, 5, 10, 11]

const numerosMaioresQue10 = listaOriginal.filter((numero) => {
    return numero >= 10
})
// console.log(numerosMaioresQue10)

const numerosPares = listaOriginal.filter((numero) => {
    return numero % 2 === 0
})
// console.log(numerosPares)
*/

//---------Exercicio sala 4---------//

//em sala
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preço: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preço: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preço: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preço: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preço: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preço: 10.80 }
]


const produtosDeLimpeza = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
})

const nomeDosProdutosDeLimpeza = produtosDeLimpeza.map((produto) => {
    return produto.nome
})

console.log("Produtos de limpeza [só nomes]:", nomeDosProdutosDeLimpeza)

const produtosDeLimpezaDiferentao = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
}).map((produto) => {
    return produto.nome
})

console.log("Produtos de limpeza [só nomes]:", produtosDeLimpezaDiferentao)

*/

//---------Exercicio Interpretação de código 1---------//
//a. vai ser impresso uma linha para cada objeto, e nele vai ter o numero da array, e os campos do objeto.
//   no caso.. nome  e apelido


//---------Exercicio Interpretação de código 2---------//
//a. vai ser impreso apenas o campo nome de cada objeto


//---------Exercicio Interpretação de código 3---------//
//a. vai ser impresso os apelidos difenterentes do "Chijo"


//---------Exercicio Escrita de código 1---------//
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
 ]

//a

 const nomeDosDoguinhos = pets.map((item, index, array) => {
    return item.nome

 })

 console.log(nomeDosDoguinhos)

//b
const dogSalsicha = pets.filter((salsicha) => {
    return salsicha.raca === "Salsicha"
})

console.log(dogSalsicha)

//c
const soPoodles = pets.filter((poodle) => {
    return poodle.raca === "Poodle"
}).map((item, index, array) => {
    return item.nome
})

console.log("Voce ganhou um cupom de 10% de desconto para usar na sua :", soPoodles[0])
console.log("Voce ganhou um cupom de 10% de desconto para usar no seu :", soPoodles[1])

*/

//---------Exercicio Escrita de código 2---------//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a
 const nomeDosProdutos = produtos.map((produto) => {
    return produto.nome
})
console.log(nomeDosProdutos)

//b
const tabNova =produtos.filter((produto) => {
    return produto.nome
}).map((preco)=> {
    return preco.preco*0.95
})

console.log(tabNova)
for(i=0;i<tabNova.length; i++)
 tabAtual = produtos.map((produto)=>{
    return {...produto, preco: tabNova[i++]}
})

console.log(tabAtual)

//c
const soBebidas = produtos.filter((bebida) => {
    return bebida.categoria === "Bebidas"
}).map((item, index, array) => {
    return item.nome
})

console.log(soBebidas)

//d --nao consegui ainda

const soYpe = produtos.filter((produto) => {
    return produto.nome == nome.includes("Ypê") 
    
})
console.log(soYpe)

    
       
//e 