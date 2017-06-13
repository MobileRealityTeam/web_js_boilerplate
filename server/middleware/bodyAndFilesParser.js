/**
 * Created by Bartlomiej Rutkowski on 31.01.17.
 */
import formidable from 'formidable';

export const bodyAndFilesParser = (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err) {
            return next(err);
        }
        req.body = fields; // eslint-disable-line
        req.files = files; // eslint-disable-line
        next();
    });
};