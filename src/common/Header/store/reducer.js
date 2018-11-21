import * as contans from './contans'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case contans.SEARCH_FOCUS:
            return state.set('focused', true)
        case contans.SEARCH_BLUR:
            return state.set('focused', false)
        case contans.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage)
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case contans.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case contans.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case contans.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }


}