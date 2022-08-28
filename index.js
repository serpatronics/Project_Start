console.clear()

const somar = require('./somar')
const subtrair = require('./subtrair')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')
const readlineSync = require('readline-sync')
const PrimeiroNumero = readlineSync.questionFloat('Insira um numero : ')
const SegundoNumero = readlineSync.questionFloat('Insira outro numero : ')
const operador = ['Soma','Subtracao', 'Multiplicao','Divisao']
const Operacao = readlineSync.keyInSelect(operador, 'Escolha a operacao: ')


console.clear()


switch (Operacao) {
    case 0:
        console.log(`O resultado da adicao de ${PrimeiroNumero} e ${SegundoNumero} é : : ${somar.soma(Number(PrimeiroNumero),Number(SegundoNumero))}`)
        break;
    case 1:
        console.log(`O resultado da subtracao de ${PrimeiroNumero} e ${SegundoNumero} é : ${subtrair.subtracao(Number(PrimeiroNumero),Number(SegundoNumero))}`)
        break;
    case 2:
        console.log(`O resultado da multiplicacao de ${PrimeiroNumero} por ${SegundoNumero} é : : ${multiplicar.multiplicacao(Number(PrimeiroNumero),Number(SegundoNumero))}`)
        break;
    case 3:
        console.log(`O resultado da divisao de ${PrimeiroNumero} por ${SegundoNumero} é : ${dividir.divisao(Number(PrimeiroNumero),Number(SegundoNumero))}`)
        break;
    
}


const fim = readlineSync.question('\n ');