import styled from 'styled-components'
// 导入图片路径
import logoPic from '../../static/images/logo.png'
export const HeaderWrapper = styled.div`
height:58px;
background:#fff;
border-bottom:1px solid #f0f0f0;
`
// logo
export const Logo = styled.div`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
`
export const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`
export const NavItem = styled.div`
padding:0 15px;
line-height:56px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right; 
    color:#ea6f5a;
}
&.active{
    color:#a6f5a;
}
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .zoom{
        position:absolute;;
        right:5px;
        bottom:4px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width:180px;
height:38px;
margin-top:9px;border:none;
padding:0 20px;
outline:none;
border-radius:19px;
box-sizing:border-box;
font-size:15px;
background:#eee;
::placeholder{
    color:#999;
    padding:0 11px;
}
&.focused{
    width:240px;
}
&.slider-enter{
    transition:all .2s ease-in;
}
&.slider-enter-active{
    width:240px;
}
&.slider-exit{
    transition:all .2s ease-in;
}
&.slider-exit-active{
    width:180px;
}
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px; 
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg {
color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149
}
`
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
height:180px;
width:240px;
padding:0 20px;
background:#fff;
box-shadow:0 0 08px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;


