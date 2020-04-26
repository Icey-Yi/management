import React, { Component } from 'react'
import { Timeline } from 'antd'
import "./index.less"

class Todo extends Component {
  state = {
    timelineData: [
      { time: "2017-08-09", data: "你收到了 14 份新周报" },
      { time: "2017-08-08", data: "你推荐的 曲妮妮 已通过第三轮面试" },
      { time: "2017-08-07", data: "这种模板可以区分多种通知类型" },
      { time: "2017-08-07", data: "左侧图标用于区分不同的类型" },
      { time: "2017-08-07", data: "内容不要超过两行字，超出时自动截断" },
      { time: "2017-08-07", data: "曲丽丽 评论了你" },
      { time: "2017-08-07", data: "朱偏右 回复了你" },
      { time: "2017-08-07", data: "标题" }, 
      { time: "", data: "第三方紧急代码变更" },
      { time: "", data: "任务名称" },
      { time: "", data: "信息安全考试" }, 
      { time: "", data: "ABCD版本发布" }
    ],
  }
  
  render() {
    return (
      <div className="home-wrap">
        <Timeline mode="alternate"className="timeline">
          {this.state.timelineData.map((item,index)=>{
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