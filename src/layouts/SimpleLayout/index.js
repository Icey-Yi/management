import React, {Component, Fragment} from 'react'
import './index.less'

class SimpleLayout extends Component {
    render() {
        const { children } = this.props
        //console.log(children);
        return(
            <Fragment>
                SimpleLayout
                {children}
            </Fragment>
        )
    }
}

export default SimpleLayout