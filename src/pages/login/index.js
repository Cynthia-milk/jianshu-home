import React, { PureComponent,Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import {actionCreator} from './store'
class Login extends PureComponent{
    render(){
        const {handleLogin,loginStatus}=this.props;
        return (
            <Fragment>
                {
                    !loginStatus?<LoginWrapper>
                    <LoginBox>
                        <Input placeholder="请输入账号" innerRef={(account)=>{this.account=account}}/>
                        <Input placeholder="密码"  innerRef={(password)=>{this.password=password}}/>
                        <Button onClick={()=>{handleLogin(this.account,this.password)}}>登录</Button>
                       
                    </LoginBox>
                </LoginWrapper>:<Redirect to='/' />
                }
                   
            </Fragment>
        )
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>(dispatch) => ({
	handleLogin(accountElem, passwordElem){
		dispatch(actionCreator.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState,mapDispatch)(Login)