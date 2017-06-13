/**
 * Created by Bartlomiej Rutkowski on 08.01.17.
 */
import express from 'express';
import swaggerNodeExpress from 'swagger-node-express';
import path from 'path';

const setSwaggerConfiguration = swagger => {
    swagger.setApiInfo({
        title: "API - Alepusto ",
        description: "API documentation. " +
        "Project: alepusto" +
        "Client : alepusto" +
        "Provided by : Mobile Reality Ltd. Poland",
        termsOfServiceUrl: "",
        contact: "support@mobilereality.io",
        license: "",
        licenseUrl: ""
    });
    swagger.configureSwaggerPaths('', 'api-docs', '');
    return swagger;
};


export const swaggerSubpath = express();
export const swagger = setSwaggerConfiguration(swaggerNodeExpress.createNew(swaggerSubpath));
export const swaggerPath = __dirname;

swaggerSubpath.get('/', function (req, res) {
    const dir = __dirname;
    const swagger = path.join(dir, 'index.html');
    res.sendFile(swagger);
});
