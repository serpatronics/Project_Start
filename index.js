const somar = require('./somar')
var readlineSync = require('readline-sync')
const PrimeiroNumero = readlineSync.question('Insira um numero : ')
const SegundoNumero = readlineSync.question('Insira outro numero : ')
const operador = ['Soma','Subtracao', 'Multiplicao','Divisao']
const Operacao = readlineSync.keyInSelect(operador)




console.log(PrimeiroNumero)
console.log(SegundoNumero)
console.log(Operacao)
console.log(somar.soma(Number(PrimeiroNumero),Number(SegundoNumero)))


