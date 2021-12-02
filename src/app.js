require('./db/connection');
const yargs = require('yargs');
const {addMovie, listMovies} = require('./movie/movieMethods');

const command = process.argv[2];

const app = async (args) => {
    switch(command){
        case'add':
            addMovie({title: args.title, actor: args.actor});
            break;
        case 'list':
            listMovies();
            break;
        default:
            console.log('incorrect command');
    }
};

app(yargs.argv);