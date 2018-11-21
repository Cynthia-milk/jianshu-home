
import axios from 'axios'
import * as constants from './constants';
import { fromJS } from 'immutable';
const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});
const addHomeList=(list,nextPage)=>({
    type:constants.ADD_HOMR_LIST,
    list:fromJS(list),
    nextPage
})
export const getList=(dispatch)=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const data=res.data.data
            dispatch(changHomeData(data))
        })
        
    }

}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            console.log(res.data)
            console.log(page)
            dispatch(addHomeList(result,page + 1))
        })
    }
}
export const toggleTopShow=(showScroll)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    showScroll
})