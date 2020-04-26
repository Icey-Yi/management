import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import './index.less'

class Chart extends Component {
    render() {
        return (
                <ReactEcharts
                    option={this.props.options}
                    notMerge={true}
                    lazyUpdate={true}
                    style={this.props.style}
                />
        )
    }


}

export default Chart