import React, { Component } from 'react'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
class Home extends Component {
    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }
    componentWillUnmount(){
        // 当页面卸载的时候
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleTop(){
        window.scrollTo(0,0)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' alt='banner' src="https://upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writer />
                    </HomeRight>
                    {
                        this.props.showScroll? <BackTop onClick={this.handleTop}>回到顶部</BackTop>:null
                    }
                   
                </HomeWrapper>
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}
const mapDispatch=(dispatch)=>{
  return{
      changeHomeData(){
        dispatch(actionCreators.getList())
      },
      changeScrollTopShow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
      }
  }
}
export default connect(mapState,mapDispatch)(Home)