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

exports.updateMovie = async (movieObj) => {
    try{
        await Movie.updateOne({title: movieObj.title}, {$set: {title: movieObj.newTitle}})
        console.log('I don\'t know how but it seems to work')
    }catch(e){
        console.log(e);
    }
};

exports.listMovies = async () => {
    try{
        console.log(await Movie.find({}));
        console.log('umm... it\'s a list')
    }
    catch(e){
        console.log(e);
    }
};


exports.deleteMovies = async (movieObj) => {
    try{
        await Movie.deleteOne({ 'title': movieObj.title });
    }catch(e){
        console.log(e)
    }
};