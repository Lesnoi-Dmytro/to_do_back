import mongoose = require('mongoose');

const uri = "mongodb+srv://mongoose_user:fxmRMFnUsLv1hdvT@mongodb.n8ct3nx.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Mongoose connected successfully');
    } catch (error) {
        console.error('Mongoose connection error: ' + error);
        process.exit(1);
    }
};

export default connectToDatabase;
