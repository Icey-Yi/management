import React, {Component} from 'react'
import './index.less'

class SimpleLayout extends Component {
    render() {
        const { children } = this.props
        return(
            <div className="simple-main-wrap">
               {children}
            </div>
        )
    }
}

export default SimpleLayout