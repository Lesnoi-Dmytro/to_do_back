// import mongoose = require('mongoose');
//
// const uri = "mongodb+srv://dmytrolesnoi:vIIk0JdPyydR4wFi@mongodb.n8ct3nx.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB";
//
// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect(uri);
//         console.log('Mongoose connected successfully');
//     } catch (error) {
//         console.error('Mongoose connection error: ' + error);
//         process.exit(1);
//     }
// };
//
// export default connectToDatabase;

const mongoose = require('mongoose');
const uri = "mongodb+srv://dmytrolesnoi:<db_password>@mongodb.n8ct3nx.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);
