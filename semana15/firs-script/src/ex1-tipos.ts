//ex1-a

//let minhaString : string

//minhaString= 20

// e exibido um erro que o tipo number não pode ser atribuido ao minhaString por ser tipo string

//ex1-b 

let meuNumero: number | string
meuNumero = "20a"

//Não é exibido erro se add somente numero ou somente letra, para isso dar certo, tem que decalar que ele recebe os 2 tipos


//ex1-c e d

enum CORES_DO_ARCOIRIS {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"

}



type Pessoa ={nome:string, idade:number, corFavorita:string}

const individuo1: Pessoa = {
    nome: "Samira",
    idade: 19,
    corFavorita: CORES_DO_ARCOIRIS.VIOLETA
}

const individuo2: Pessoa = {
    nome: "Luciana",
    idade: 19,
    corFavorita: CORES_DO_ARCOIRIS.VERDE
}

const individuo3: Pessoa = {
    nome: "Sayuri",
    idade: 11,
    corFavorita: CORES_DO_ARCOIRIS.VERMELHO
}
