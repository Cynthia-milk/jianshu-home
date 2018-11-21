import React from 'react'
import Loadable from 'react-loadable'
const LoadComponent =Loadable({
    loader:()=>import('./'),// 加载当前目录下的index组件,异步组件
    // 这块是临时的组件,当目标组件还没有被加载出来的时候,就显示这个组件
    loading(){
        return <div>正在加载</div>
    }
})
export default ()=><LoadComponent/> // 导出去的是一个无状态组件