/**
 * Created by Bartlomiej Rutkowski on 13.01.17.
 */
import mongoose from 'mongoose';

function getTestDbAddress() {
    const isInCiEnvironment = process.env.CI;
    if(isInCiEnvironment) {
        return 'mongodb://mongo/test-db';
    }
    return 'mongodb://localhost:27017/test-db';
}

before(done => {
    const dbAddress = getTestDbAddress();
    mongoose.connect(dbAddress);
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', err); // eslint-disable-line
        });
});

// function used to drop collection between tests
beforeEach(done => {
    done();
});