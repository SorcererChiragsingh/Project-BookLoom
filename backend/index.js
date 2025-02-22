import express from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware for passing request body
app.use(express.json()); 


app.get(`/`, (request , response) => {
    console.log(request)
    return response.status(234).send ('Hello World');
});

// 
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