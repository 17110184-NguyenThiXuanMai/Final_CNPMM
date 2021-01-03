import {combineReducers} from 'redux';
import roomTypeReducer from './RoomType/roomTypeReducer';
import serviceReducer from './Service/serviceReducer';
import policyReducer from './Policy/policyReducer';

const rootReducer = combineReducers({
    roomType: roomTypeReducer,
    service: serviceReducer,
    policy: policyReducer
});

export default rootReducer;