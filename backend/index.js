import express from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';


const app = express();

// Middleware for passing request body
app.use(express.json()); 


app.get(`/`, (request , response) => {
    console.log(request)
    return response.status(234).send ('Hello World');
});

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// Accesing routes in index file
app.use('/books', booksRoute);

// Mongoose Database connection  
mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App (MongoDB) connected to database successfully');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    
    });
})

.catch((error) => {
    console.log(error);
});