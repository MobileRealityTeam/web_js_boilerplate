/**
 * Created by Bartlomiej Rutkowski on 03.11.16.
 */
import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const getDbConfig = () => {
    return {
        database: 'test',
        username: 'test',
        password: 'test',
        host: '127.0.0.1',
        logging: console.log // eslint-disable-line
    };
};

const requireModels = (sequelize, modelsPath, fileNames) => {
    fileNames.forEach(file => {
        if (file !== '__tests__') {
            const modelPath = path.join(modelsPath, file);
            const modelName = file.slice(0, -3);
            module.exports[modelName] = sequelize.import(modelPath);
        }
    });
};

const loadModels = sequelize => {
    const modelsPath = path.join(__dirname, 'models');
    return new Promise((resolve, reject) => {
        fs.readdir(modelsPath, (err, fileNames) => {
            if(err) {
                reject(err);
            }
            requireModels(sequelize, modelsPath, fileNames);
            resolve();
        });
    });
};

const createRelationships = () => {};

export const connect = () => {
    const { database, username, password, host, logging } = getDbConfig();
    const sequelize = new Sequelize(database, username, password, {
        host,
        dialect: 'postgres',
        logging
    });
    return loadModels(sequelize)
        .then(() => createRelationships())
        .then(() => sequelize.authenticate())
        .then(() => sequelize.sync());
};

