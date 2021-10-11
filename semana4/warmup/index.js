function printString(){


let string = prompt("Digite algo")
string = string.toLocaleLowerCase()

array = string.split("")
for ( i = 0; i < array.length-1; i++ ){
    if (i==="a"){
    console.log(i)
        }if (i==="e"){
            console.log(i)
        }if (i==="i"){
            console.log(i) 
        }if (i==="o"){
            console.log(i)
        }if (i==="u"){
            console.log(i)
        }else{
            console.log(i++)
        }
 }
}
printString()


