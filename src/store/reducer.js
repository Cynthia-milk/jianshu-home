// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import headerReducer from './../common/Header/store/reducer'
import homeReducer from './../pages/home/store/reducer'
import {reducer as detailReducer} from './../pages/detail/store'
import {reducer as loginReducer} from './../pages/login/store'
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer;


