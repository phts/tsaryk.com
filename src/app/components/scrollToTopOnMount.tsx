import * as React from 'react'

import {Hoc} from 'app/helpers/types'

export default (
  WrappedComponent => {
    return class ScrollToTop extends React.PureComponent<{}> {
      componentDidMount() {
        window.scrollTo(0, 0)
      }

      render() {
        return <WrappedComponent {...this.props}/>
      }
    }
  }
) as Hoc<{}, React.ComponentClass<{}>>
