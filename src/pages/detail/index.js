import React, { PureComponent } from 'react'
import {DetailWrapper,Header,Content} from './style'
import * as actionCreator from './store/actionCreator'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class Detail extends PureComponent {
    componentDidMount() {
		this.props.getDetailList(this.props.match.params.id);
	}
    render() {
        
        return (
            <div>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
                </DetailWrapper>
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content'])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        getDetailList(id){
            dispatch(actionCreator.getDetail(id))
        }
    }
}
// withRouter方法是让Detail有能力获取到router里面所有的参数和路由
export default connect(mapState,mapDispatch)(withRouter(Detail))