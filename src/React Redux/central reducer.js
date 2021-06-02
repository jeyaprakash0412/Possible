import {combineReducers} from 'redux';
import {ageOperator} from './Reducer/ageOperator'
import {countOperate} from './Reducer/countOperate'


export default combineReducers({
    ageOperator:ageOperator,
    countOperate:countOperate
         });