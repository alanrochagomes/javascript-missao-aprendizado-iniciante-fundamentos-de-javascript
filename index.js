//var nomeVar =  'João'
//console.log(nomeVar) // João
//nomeVar = 'Pedro' 
//console.log(nomeVar) // Pedro

//let nomeLet = 'Maria'
//console.log(nomeLet) // Maria
//nomeLet = 'Joana' 
//console.log(nomeLet) // Joana

//const nomeConst = 'José'
//console.log(nomeConst) // José
//nomeConst = 'Novo valor' // *Isso dará um erro

//---------------------------------------------------// 

// Primitivos:

// String: Sequência de caracteres.
// Number: Números inteiros ou decimais.
// Boolean: Verdadeiro (true) ou (falso) (false).
// Null: Intencionalmente vazio.
// Undefined: Valor não atribuído.
// Symbol: Identificador único.

// const nome = 'João' // string
// const idade = 25 // number
// const estudante = true // boolean
// const cidade = null // null
// let pais  // undefined

// console.log(nome, typeof nome) // João
// console.log(idade, typeof idade) // 25
// console.log(estudante, typeof estudante) // true
// console.log(cidade, typeof cidade) // null
// console.log(pais, typeof pais) // undefined


// ----------------------------------------------------- //

// Referência:

// Obeject: Coleção de propriedades.
// Array: Lista ordenada de valores.
// Function: Bloco de código reutilizável.

// const pessoa = {
//     nome: 'João',
//     idade: 25
// }

// const frutas = ['maçã', 'banana', 'laranja']
// //               0       1         2

// function saudacao() {
//     return 'Olá, Mundo!'
// }

// console.log(pessoa) // { nome: 'João', idade: 25 }
// console.log(frutas) // ['maçã', 'banana', 'laranja']
// console.log(saudacao()) // Olá, Mundo!

//-------------------------------------------------------------//

// Variáveis: Arrays

// Estrutura de dados que armazena uma coleção de elementos, permitindo armazenar múltiplos valores em uma única variável.

// Declaração de um array vazio
// const frutas = []

// // Inicialização de um array com elementos
// const numeros = [1, 2, 3, 4, 5]

// // Acessando elementos do array
// console.log(numeros[0]) // 1
// console.log(numeros[2]) // 3

// // Modificando elementos do array
// numeros[2] = 10
// console.log(numeros) // [1, 2, 10, 4, 5]

// const novoArray = numeros
// novoArray[0] = 99
// console.log(novoArray)
// console.log(numeros)

// novoArray.push(888)
// console.log(novoArray)
// console.log(numeros)

// ------------------------------------------------------------------ //

// Variáveis: Arrays

// Adicionar elementos - push: Adiciona um ou mais elementos ao final do array.
// Remover elementos - pop: Remove o último elemento do array.
// Remover elementos - shift: Remove o primeiro elemento do array
// Encontrar elemmentos - indexOf: Retorna o primeiro índice em que um elemento pode ser encotrado no array.
// Remover elementos específicos - splice: Adicionar/remover elementos do array.

// const frutas = []
// frutas.push('maçã')
// frutas.push('banana', 'laranja')
// console.log(frutas) // ['maçã', 'banana', 'laranja']

// frutas.pop()
// console.log(frutas) // ['maçã', 'banana',]

// frutas.shift()
// console.log(frutas) // ['banana']

// const frutas = ['banana']

// const indice = frutas.indexOf('banana')
// console.log(indice) // 0

// const frutas = ['banana']

// frutas.splice(indice, 1) // Remove 1 elemento a partir do indice 0
// console.log(frutas) // []

// ------------------------------------------------------------------------------------------- //

// Variáveis: Objetos

// Estruturas de dados que armazena pares chave-valor, permitindo armazenar dados relacionados e métodos.

// Declaração de um objeto vazio
// const pessoa = {}

// // inicialização de um objeto com propriedades
// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2021
// }

// // Acessando propriedades do objeto
// console.log(carro.marca) // Toyota
// console.log(carro['modelo']) // Corolla

// // Modificando propriedades do objeto
// carro.ano = 2022
// console.log(carro) // { marca: 'Toyota', 'Corolla', ano: 2022 }

// // Adicionando novas propriedades
// carro.cor = 'Prata'
// console.log(carro) // { marca: 'Toyota', modelo: 'Corolla', ano: 2022, cor: 'Prata' }
 
// ---------------------------------------------------------------------------------------------------------- //

// Variáveis: Objetos - Métodos

// É possível adicionar funções aos objetos. Nesse caso, chamamos essas funções de métodos.

//  Adicionar carro {
//     marca: 'toyota',
//     modelo: 'Corolla',
//     ano: 2021,
//     ligar: function() {
//         console.log('O carro está ligado.')
//     }
// }

// carro.ligar() // O carro está ligando.

// // Adicionar após a criação
// carro.desligar = function() {
//     console.log('O carro está desligando.')
// }

// carro.desligar() // O carro está desligando.

// ------------------------------------------------------------------------------------------------------------------------- //

// Variáveis: Objetos - Operações

// Método Object.keys: Retorna um array com os nomes das propriedades enumeráveis de um objeto.
// Método Object.values: Retorna um array com os valores das propriedades enumeráveis de um objeto.
// Método Object.entries: Retorna um array de arrays, onde caba sub-array contém um par chave-valor.

// const chaves = Object.keys(carro)
// console.log(chaves) // ['marca', 'modelo', 'ano', 'cor', 'ligar']

// const valores = Object.values(carro)
// console.log(valores) // ['Toyota', 'Corolla', 2022, 'Prata', function]

//const entradas = Object.entries(carro)
//console.log(entradas)
// [['marca', 'Toyota',], ['modelo', 'Corolla'], ['ano', 2022], ['cor', 'Prata'], ['ligar', function]]

// Variáveis: Objetos - Métodos

// É possível adicionar funções aos objectos. Nesse caso, chamamos essas funções de métodos.

// Adicionar durante a criação
// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2021,
//     ligar: function() {
//         console.log('O carro está ligado.')
//     }
// }

// carro.ligar() // O carro está ligado.

// // Adicionar após a criação
// carro.desligar = function() {
//     console.log('O carro está desligado.')
// }

// carro.desligar() // O carro está desligado.

// const pessoa = {}
// console.log(pessoa)

// pessoa.nome = 'Alan'
// console.log(pessoa)

// const carro  = {
//     modelo: 'Celta',
//     cor: 'Preta',
//     ligar: function() {
//         console.log('O ' + this.modelo + ' está ligado.') ou console.log(`O ${this.modelo} está ligado.`)
//     }
// }
// console.log(carro)

// carro.ano = 2010
// console.log(carro)

// carro.ligar()

// --------------------------------------------------------------------------------------------------------- //

// Estruturas de controle: Condicionais - if/elementos

// 1. if/Else: Executar um bloco de código se uma condição for verdadeira; caso contrário, exuta outro bloco de código.

// const idade = 20

// if (idade >= 18) {
//     console.log('Adulto')
// } else {
//     console.log('Menor de idade')
// }

// const nota = 85 {
//     if (nota >= 90) {
//         console.log('A')
//     } else if (nota >= 80) {
//         console.log('B')
//     } else if (nota >= 70) {
//         console.log('C')
//     } else if (nota >= 60) {
//         console.log('D')
//     } else {
//         console.log('F')
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------- //

// Estruturas de controle: Condicionais - Switch

// 2. Switch: Excuta um bloco de código entre vários, baseado no valor de uma expressão.

// const dia = 'segunda'

// switch (dia) {
//   case 'segunda':
//     console.log('Hoje é segunda-feira')
//     break
//   case 'terça':
//     console.log('Hoje é terça-feira')
//     break
//   default:
//     console.log('Hoje não é segunda nem terça-feira')  
// }

// ----------------------------------------------------------------------------------------------------------------//

// Estruturas de controle: Loops - For Loop

// 1. For Loop: Excuta um bloco de código um número especifico de vezes.

// for (let i = 0; i < 5; i++) {
//    console.log(i)
// }

// ---------------------------------------------------------------------------------------------------------------------//

// Estruturas de controle: Loops - For...in

// 1. For..in com Arrays: Itera sobre todos os Índices de um array.
// 2. For...in com Objectos: Itera sobre todas as propriedades enumeráveis de um objeto.

// For... in com Arrays: 
// const frutas = ['Maçã', 'banana', 'laranja']

// for (const indice in frutas) {
//     console.log(`${indice}: ${frutas[indice]}`)
// }
// 0: maçã
// 1: banana
// 2: laranja

// For ... in com Objetos:

// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     cidade: 'São Paulo'
// }

// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`)
// }
// nome: João
// idade: 30
// cidade: São Paulo

// ------------------------------------------------------------------------------------------------------------------------------------//

// Estruturas de controle: Loops - For...of

// 1. For...of com Arrays: Itera sobre todos os elementos de um array.
// 2. For...of com Strings: Itera sobre os caracteres de uma string.

// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     console.log(numero)
// }

// 1
// 2
// 3
// 4
// 5

// const saudacao = 'Olá'

// for (const letra of saudacao) {
//     console.log(letra)
// }
// 0
// l
// á

// -------------------------------------------------------------------------------------------------------------------------- //

// Estruturas de controle: Loops - While Loops

// While Loops: Executa um bloco de código enquanto uma condição for verdadeira.

// let i = 0;
// while (i < 5) {
// console.log(i)
// i++
// }

// ---------------------------------------------------------------------------------------------------------------------------------------//

// Estruturas de controle: Loops - Do While Loops

// 1. Do while Loop: Executa um bloco de código pelo menos uma vez, e depois continua a execução enquanto uma condição for verdadeira.

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 5)


// -----------------------------------------------------------------------------------------------------------------------------------------------------------//

// Funções e Escopo

// 1. Declaração de função: Bloco de código que pode ser reutilizado. Pode receber parâmetros e retonar um valor.

// function saudacao(nome) {
//     return `Olá, ${nome}`
// }

// console.log(saudacao('Maria')) // Olá, Maria

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Funções e Escopo

// 2. Funções Anônimas e Arrow Functions: Formas alternativas de declarar funções, com sintaxe mais concisa.

// Função anônima
// const saudacaoAnonima = function(nome) {
//     return `Olá, ${nome}`
// }

// console.log (saudacaoAnonima('João')) // Olá, joão

// Arrow function
// const saudacaoArrow = (nome) => {
//     return `Olá, ${nome}`
// }
// console.log(saudacaoArrow('Ana')) // Olá, Ana

// // Arrow function reduzida
// const saudacaoArrowReduzida = (nome) => `Olá, ${nome}`
// console.log(saudacaoArrowReduzida('Ana')) // Olá, Ana

// ------------------------------------------------------------------------------------------------------------------------------------//

// Funções com return vs Sem return

// Com return: A função retorna valor que pode ser usado posteriormente.

// function soma(a, b) {
//     return a + b
// }

// const resultado = soma(2, 3)
// console.log(resultado) // 5

// 2. Sem return: A função executa uma ação, mas não retorna um valor.

// function mostrarMensagem(mensagem) {
//     console.log(mensagem)
// }

// mostrarMensagem('Olá, Mundo!') // Olá, Mundo!

// ---------------------------------------------------------------------------------------------------------------------------------------------//

// Escopo

// 1. Escopo de função: Variáveis definidas dentro de uma função nçao sçao acssíveis fora dela.

// function exemploEscopo() {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem) // Acessível aqui
// }

// exemploEscopo()
// console.log(mensagem) // Erro: mensagem não definida

// Espoco de Bloco: Variáveis definidas dentro de um bloco ({}) são acessíveis apenas dentro desse bloco.

// if (true) {
//     let mensagem = 'Olá, Mundo!'
//     console.log(mensagem) // Acessível aqui
// }

// console.log(mensagem) // Erro: mensagem não definida

// ----------------------------------------------------------------------------------------//

// Funções Assíncronas e Callbacks

// 1. Funções Assíncronas: Função que permitem o uso de operações assícronas, como chamadas de rede, sem bloquear o fluxo do programa.

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://api.exemplo.com/dados')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('Erro ao buscar dados:', error)
//     }
// }

// fetchData()

// -------------------------------------------------------------------------------------------------------------------------------//

// Funções Assícronas e Callbacks

// 2. Callback: Funções passadas como argumentos para outras funções, permitindo de código após a conclusão de uma operação.

// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Dados recebidos')
//     }, 1000)
// }

// fetchData((mensagem) => {
//     console.log(mensagem)
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------//

// Tratamento de erros e Exceções

// 1. Try/Catch: Blocos de códigos que permitem capturar e tratar erros durante a execução de operações assícronas.

// try {
//     const resultado = someFunction()
//     console.log(resultado)
// } catch (error) {
//     console.error('Error:', error)
// }

// --------------------------------------------------------------------------------------------------------------//

// Uso de Módulos e Require/Import Statements

// 1. Importação e Exportação de Módulos: Permite a modularização do código, facilitando a organização e reutilização de funcionalidades em diferentes partes do projeto.

// modulo.js

// export function saudacao(nome) {
//     return `Olá, ${nome}`
// }

// // index.js
// import { saudacao } from './modulo.js'
// console.log(saudacao('Maria'))

// import { nome } from "./module.js";

// console.log(nome)

// ----------------------------------------------------------------------------------------------------------------------------//


// Uso de Módulos e Require/Import Statement

// 2. Uso de Require: Método tradicional de importação de módulos no Node.js.

// modulo.js
// function saudacao(nome) {
//     return `Olá, ${nome}`
// }

// module.exports = saudacao

// // app.js
// const saudacao = require('./modulo')
// console.log(saudacao('Maria'))

// import { nome } from "./outroArquivo";
// console.log(nome)

// -----------------------------------------------------------------------------------------------------------------------------//

// ES6 e Além: Promises

// 1. Promises: Objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado.

// const minhaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Dados recebidos')
//     }, 1000)
// })

// minhaPromise.then((mensagem) => {
//     console.log(mensagem) // Dados recebidos (exibido após 1 segundo)
// }).catch((erro) => {
//     console.error('Erro:', erro)
// })

// -----------------------------------------------------------------------------------------------------------------------------//

// ES6 e Além: Promises (Async/Await)

// 2. Promises Async/Await: Sintaxe que simplifica o uso de Promises, permitindo escrever código de forma mais síncrona.

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://api.exemplo.com/dados')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error('Erro ao buscar:', error)
//     }
// }

// fetchData()

// --------------------------------------------------------------------------------------------------------------------------------//

// ES6 e Além: Desestruturação

// 1. Desestruturação: Sintaxe que permite extrair dados de arrays ou objetos em variáveis distintas.

// const pessoa = { nome: 'Maria', idade: 30 }
// const { nome, idade } = pessoa
// console.log(nome, idade) // Maria 30

// ----------------------------------------------------------------------------------------------------------------------------//

// ES6 e Além: Spread Operator

// 2. Spread Operator: Sintaxe que permite expandir elementos de um array ou objeto.

// const array1 = [1, 2, 3]
// const array2 = [...array1, 4, 5, 6]
// console.log(array2) // [1, 2, 3, 4, 5, 6]

// const objeto1 = { a: 1, b: 2 }
// const objeto2 = { ...objeto1, c: 3}
// console.log(objeto2) // { a: 1, b: 2, c: 3 }

// ------------------------------------------------------------------------------------------------------------------//

// ES6 e Além: Rest Operator

// 3. Rest Operator: Sintaxe que permite representar um número indefinido de argumentos como um array.

// function somar(...numeros) {
//     return numeros.reduce((acc, numero) => acc + numero, 0)
// }

// console.log(somar(1, 2, 3)) // 6
// console.log(somar(4, 5, 6, 7)) // 22

// const { a, b, ... resto } = { a: 1, b: 2, c: 3, d: 4 }
// console.log(a, b) // 1 2
// console.log(resto) // { c: 3, d: 4}

