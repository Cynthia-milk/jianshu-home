import {fromJS} from 'immutable'
import  * as constans  from './constans';


const defaultState=fromJS({
    login:false

})
const reducer =(state=defaultState,action)=>{
    switch(action.type) {
		case constans.CHANGE_LOGIN:
			return state.set('login', action.value);
		case constans.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}
}
export default reducer;
