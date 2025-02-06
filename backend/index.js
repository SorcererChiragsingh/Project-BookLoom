import express from 'express';
import { PORT , mongoDBURL } from './config.js';


const app = express();

app.get(`/`, (request , response) => {
    console.log(request)
    return response.status(234).send ('Hello World');
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);

});