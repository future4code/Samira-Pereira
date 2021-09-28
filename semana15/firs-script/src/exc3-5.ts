 export type carro = {
    marca: MARCAS_DE_CARROS,
    volumeDoTanque: number, 
    temMotorFlex: boolean,
    calcularAutonomia:(combustilvelRestante: number)=> number
}

enum MARCAS_DE_CARROS {
    FIAT = "Fiat",
    VOLKSWAGEN = "Volksvagem",
    FORD = "Ford0",
    NISSAN ="Nissan",
    FERRARI = "Ferrari"

}

const multiplicaPor15 = (num: number) => num * 15

const mustang: carro ={
    marca: MARCAS_DE_CARROS.FORD,
    volumeDoTanque: 61, 
    temMotorFlex: false,
    calcularAutonomia: multiplicaPor15
}

const gol: carro = {
    marca: MARCAS_DE_CARROS.VOLKSWAGEN,
    volumeDoTanque: 55, 
    temMotorFlex: true,
    calcularAutonomia: multiplicaPor15
}

const f50: carro = {
    marca: MARCAS_DE_CARROS.FERRARI,
    volumeDoTanque: 90, 
    temMotorFlex: false,
    calcularAutonomia: multiplicaPor15
}

export const garagem: carro[] = [mustang, gol, f50]