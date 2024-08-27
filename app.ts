import express from 'express';
import connectToDatabase from "./utils/db";
import routers from "./routers";

const port = 3000;
const app = express();

app.use(express.json());
app.use(routers);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

connectToDatabase();
