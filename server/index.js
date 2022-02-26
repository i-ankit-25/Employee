import express from 'express';
import mongoose from 'mongoose';
import router from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import 'dotenv/config';

const app = express();

const PORT = process.env.port || 5001;

app.use(bodyParser.json({limit: "10mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true}));
app.use(cors());

app.use('/users', router);

const URL = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-shard-00-00.ysbwm.mongodb.net:27017,cluster0-shard-00-01.ysbwm.mongodb.net:27017,cluster0-shard-00-02.ysbwm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1qr7k8-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT, () =>{
            console.log(`Server is running successfully on ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error.message);
    })

