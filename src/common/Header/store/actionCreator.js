import * as contans from './contans'
import axios from 'axios'
import { fromJS } from 'immutable'
const changeList = (data) => ({
    type: contans.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10) // 求总的页数
})
export const searchFocus = () => ({
    type: contans.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: contans.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json?date=' + new Date()).then(res => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log('请求失败')
        })
    }
}
export const mouseEnter = () => ({
    type: contans.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: contans.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: contans.CHANGE_PAGE,
    page: page
})