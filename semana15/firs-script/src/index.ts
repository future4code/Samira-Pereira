console.log('Hello word')


let nome: string | undefined
const idade: number = 33
const eMaior: boolean = true

const alimentacao: Array<string> = ['arroz', 'feijao', 'churrasco']
const alimentacao2: string[] = ['arroz', 'feijao', 'churrasco']


type car = {modelo:string, anoLancamento:number} 
const carro: car = {
    modelo: "Sedan",
    anoLancamento: 2012
}

let qualquerCoisa: any
qualquerCoisa = "string"
qualquerCoisa = 12
qualquerCoisa = null
qualquerCoisa = () => console.log('funcionou!')

nome = "Samira"
console.log(nome) 