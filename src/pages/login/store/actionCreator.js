import * as constans from './constans'
import axios from 'axios'
const loginStatus=()=>({
    type:constans.CHANGE_LOGIN,
    value:true
})
export const logout=()=>({
    type:constans.LOGOUT,
    value:false
})
export const login =(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res=>{
            console.log(res.data.success)
            if(res.data.success){
                dispatch(loginStatus())
            }
          
        })
    }
}