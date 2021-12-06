const mongoose = require('mongoose')

require('dotenv').config();

const connection = async () => {
    try{
        return await mongoose.connect(process.env.MONGO_URI)
        //console.log('I did a thing!');
    }
        catch(e){
            console.log(e);
    }
};

connection();