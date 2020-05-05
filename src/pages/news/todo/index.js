import React, { Component } from 'react'
import { Timeline } from 'antd'
import { connect } from 'umi'
import "./index.less"

@connect(({newsTodo})=>({newsTodo}))
class Todo extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type:'newsTodo/getTodoData'
    })
  }
  
  render() {
    const { timelineData } = this.props.newsTodo
    return (
      <div className="home-wrap">
        <Timeline mode="alternate"className="timeline">
          {timelineData.map((item,index)=>{
            return (
              <Timeline.Item key={index}>{item.data+" "+item.time}</Timeline.Item>
            )
          })}
        </Timeline>
      </div>
    )
  }
}


export default Todo