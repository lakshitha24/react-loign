import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { addDUser} from "./dUser.add.reducer";
import{dUser} from "./dUser.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    addDUser,
    dUser
});

export default rootReducer;