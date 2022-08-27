const somar = require('./somar')
const subtrair = require('./subtrair')
const multiplicar = require('./multiplicar')
var readlineSync = require('readline-sync')
const { subtracao } = require('./subtrair')
const PrimeiroNumero = readlineSync.question('Insira um numero : ')
const SegundoNumero = readlineSync.question('Insira outro numero : ')
const operador = ['Soma','Subtracao', 'Multiplicao','Divisao']
const Operacao = readlineSync.keyInSelect(operador)




console.log(PrimeiroNumero)
console.log(SegundoNumero)
console.log(Operacao)
console.log(somar.soma(Number(PrimeiroNumero),Number(SegundoNumero)))
console.log(subtrair.subtracao(Number(PrimeiroNumero),Number(SegundoNumero)))
console.log(multiplicar.multiplicacao(Number(PrimeiroNumero),Number(SegundoNumero)))

