// JavaScript source code
const {obtenerPromedio, argv} = require('./datos.js');
console.log(argv.m);
if (argv._[0] == 'promedio') {
    console.log('El promedio de ' + argv.n + ' es ' + obtenerPromedio(argv.m,argv.p,argv.i));
}
else {
    console.log('promedio no calculado');


}
