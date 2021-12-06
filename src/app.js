require('./db/connection');
const yargs = require('yargs');
const {addMovie, updateMovie, listMovies, deleteMovies} = require('./movie/movieMethods');

const command = process.argv[2];

const app = async (args) => {
    switch(command){
        case'add':
            addMovie({title: args.title, actor: args.actor});
            break;
        case 'list':
            listMovies();
            break;
        case 'update':
            updateMovie({title: args.title, newTitle: args.newTitle});
            break;
        case 'delete':
            deleteMovies({title: args.title});
            break;
        default:
            console.log('incorrect command');
    }
};

app(yargs.argv);