import path from 'path';
import express from 'express';
import cors from 'cors';
import { connect as dbConnect } from './database/database';
import { bodyAndFilesParser } from './middleware/bodyAndFilesParser';

const environment = process.env.NODE_ENV;
const app = express();
dbConnect().then(() => {
    // swagger
    if (environment === 'development') {
        const swagger = require('../swagger/swagger').swagger; // eslint-disable-line
        const swaggerSubpath = require('../swagger/swagger').swaggerSubpath; // eslint-disable-line
        const swaggerPath = express.static(require('../swagger/swagger').swaggerPath); // eslint-disable-line
        app.use('/swagger', swaggerPath);
        app.use('/swagger', swaggerSubpath);
        const applicationUrl = 'localhost:8000';
        swagger.configure(applicationUrl, '1.0.0');
    }
    app.use(bodyAndFilesParser);
    app.use(cors());

    // static paths
    const publicPath = express.static(path.join(__dirname, '../client/public'));
    app.use(publicPath);
}).catch(error => {
    console.warn(error); // eslint-disable-line
    process.exit();
});


module.exports = {
    app
};
