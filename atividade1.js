// Função de IMC 
function imc(peso, altura)
{
    return peso / (altura**2)
}

console.log(`IMC = ${imc(60, 1.65).toFixed(2)}`)
