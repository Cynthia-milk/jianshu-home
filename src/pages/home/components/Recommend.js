import React,{PureComponent} from 'react'
import {RecommendWrapper,RecommendItem} from './../style'
import {connect} from 'react-redux'
class Recommend extends PureComponent{
    render(){
        console.log(this.props.list)
        return(
            <div>
                <RecommendWrapper>
                    
                        {
                            this.props.list.map((item)=>{
                                return(
                                    <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                                )
                            })
                        }
                    
                </RecommendWrapper>
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        list:state.getIn(['home','recommendList'])
    }
}
export default connect(mapState,null)(Recommend);