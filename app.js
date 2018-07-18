const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(a => console.log(`Archivo creado: ${colors.green(a)}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


//let argv2 = process.arg;

//console.log(`Base: ${argv.base}, Limite: ${argv.limite}`);

// let parametro = process.arg[2];
// let base = parametro.split('=')[1];