const Movie = require('./movieModels');

exports.addMovie = async (movieObj) => {
    try{
        const movie = await new Movie(movieObj);
        await movie.save();
        console.log(`yay u added ${movie.title}`);
    }
    catch(e){
        console.log(e);
    }
};

exports.listMovies = async () => {
    try{
        console.log(await Movie.find({}));
    }
    catch(e){
        console.log(e);
    }
};