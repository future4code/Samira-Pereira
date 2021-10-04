import {carro, garagem} from "./exc3-5"


function buscarCarrosPorMarca(frota: carro[], marca?: string){
    if(marca === undefined) {
        return frota
    }

    return frota.filter(
        (carro) =>{
            return carro.marca === marca
        }
        
    )

}




const carroFord = buscarCarrosPorMarca(garagem, "Ford")
console.log("so ford", carroFord)
carroFord.forEach((carro)=> console.log("Ford aina pode rodar", carro.calcularAutonomia(carro.volumeDoTanque)))





/*console.log(buscarCarrosPorMarca(garagem))
console.log(buscarCarrosPorMarca(garagem, "Ford"))
console.log(buscarCarrosPorMarca(garagem, "Ferrari"))
console.log(buscarCarrosPorMarca(garagem, "Volkswagen"))*/
