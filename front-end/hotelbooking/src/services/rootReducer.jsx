import {combineReducers} from 'redux';
import roomTypeReducer from './RoomType/roomTypeReducer';
import serviceReducer from './Service/serviceReducer';

const rootReducer = combineReducers({
    roomType: roomTypeReducer,
    service: serviceReducer
});

export default rootReducer;