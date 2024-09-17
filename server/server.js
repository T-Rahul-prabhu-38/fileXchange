import express from 'express'
import router from './routes/route.js';
import cors from 'cors';
const app = express();


app.use(cors());
app.use('/',router);

app.listen(8000,()=>{
    console.log("running!");
})