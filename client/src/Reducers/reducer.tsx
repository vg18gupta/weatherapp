import {combineReducers} from 'redux';
import weatherInfo from './weatherInfo-reducer';

export default combineReducers(
    {
        'w_data':weatherInfo
    }
)
