/**
 * Created by Bartlomiej Rutkowski on 22.10.16.
 */
import configureStore from 'redux-mock-store';
import { testMiddleware } from '../store';

const mockStore = configureStore(testMiddleware);

export default mockStore;
