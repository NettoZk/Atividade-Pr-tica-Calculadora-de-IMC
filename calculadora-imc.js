// IMC = peso / (altura * altura). 

let peso = 150
let altura = 1.85
let imc = peso / (altura * altura)

if (imc < 18.5){
    // Abaixo de 18,5: Baixo peso
    console.log("IMC: " + imc + "\nAbaixo do peso")
} else if (imc > 18.5 && imc < 24.9){
    // Entre 18,5 e 24,9: Peso normal
    console.log("IMC: " + imc + "\nPeso normal")
} else if (imc > 25 && imc < 29.9){
    // Entre 25 e 29,9: Sobrepeso
    console.log("IMC: " + imc + "\nSobre peso")
} else if (imc > 30 && imc < 34.9){
    // Entre 30 e 34,9: Obesidade grau I
    console.log("IMC: " + imc + "\nObesidade grau I")
} else if (imc > 35 && imc < 39.9){
    // Entre 35 e 39,9: Obesidade grau II
    console.log("IMC: " + imc + "\nObesidade grau II")
} else {
    // 40 ou mais: Obesidade grau III
    console.log("IMC: " + imc + "\nObesidade grau III")
}