import express from 'express';
import connectToDatabase from "./utils/db";

const port = 3000;
const app = express();

app.use(express.json());
app.use();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

connectToDatabase();
