// JavaScript source code
const opciones = {
    nombre: {
        demand: true,
        alias: 'n'
    },
    matematicas: {
        //default: 0,
        demand: true,
        alias: 'm'
    },
    ingles: {
        //default: 0,
        demand: true,
        alias: 'i'
    },
    programacion: {
        //default:5,
        demand: true,
        alias: 'p'
    }
}
let obtenerPromedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

const argv = require('yargs')
    .command('promedio', 'Calcular el promedio', opciones)
    .argv

module.exports = {
    obtenerPromedio,
    argv
};