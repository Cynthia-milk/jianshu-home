
import {fromJS} from 'immutable'
import * as constans from './constans'
const defaultState =fromJS({
    title:'',
    content:""
})
 const reducer =(state=defaultState,action)=>{
    if(action.type===constans.CHANGE_DETAIL_LIST){
        
      return  state.merge({
            title:action.title,
            content:action.content
        })
    }
    return state
 }
 export default reducer;