/**
 * Created by Bartlomiej Rutkowski on 13.06.17.
 */
import Sequelize from 'sequelize';

export default function (sequelize) {
    return sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
}