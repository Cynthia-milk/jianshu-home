import React, { Component, Fragment } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style.js'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {actionCreator } from './store/'
import {actionCreator as loginCreator} from './../../pages/login/store'
import {Link} from 'react-router-dom'

class Header extends Component {
    getArea() {
        const { list, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        // 把immutable对象转为js对象
        const newList = list.toJS();
        const pageList = [];
        // 因为初始的时候,就会执行,但是刚开始的时候newlist是空数组,所以遍历的时候子项都是undefined


            for(let i=(page-1)*10;i<page*10;i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
                
            }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
						<SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                            <i className="iconfont spin" ref={icon=>{this.spinIcon=icon}}>&#xe851;</i>
                            换一批
						</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                           pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {focused,handleFocus,handleBlur,list,login,logout} =this.props;
        return (
            <Fragment>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    
                    <Nav>
                        <Link to='/'>
                            <NavItem className='left'>首页</NavItem>
                        </Link>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login?
                            <NavItem className='right' onClick={logout}>退出</NavItem>
                            :<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <i className="iconfont"> &#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={300}
                                classNames='slider'
                            >
                                <NavSearch className={focused ? 'focused' : ''} onFocus={()=>{handleFocus(list)}} onBlur={handleBlur}></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
                            {
                                this.getArea()
                            }
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'><i className="iconfont">&#xe670;</i> 写文章</Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>

            </Fragment>
        )
    };
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage:state.getIn(['header', 'totalPage']),
        mouseIn:state.getIn(['header', 'mouseIn']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            if(list.size===0){
                dispatch(actionCreator.getList())
            }
            dispatch(actionCreator.searchFocus())
        },
        handleBlur() {

            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            console.log(spin);
            // 获取transform
            let orginAngle=spin.style.transform.replace(/[^0-9]/ig,'')
            if(orginAngle){
                orginAngle=parseInt(orginAngle,10)
            }
            else{
                orginAngle=0;
            }
            spin.style.transform='rotate('+orginAngle+'360deg)'
            if (page < totalPage) {
				dispatch(actionCreator.changePage(page + 1));
			}else {
				dispatch(actionCreator.changePage(1));
			}
           
        },
        logout(){
            
            dispatch(loginCreator.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)