import * as React from 'react'
import {omit} from 'ramda'

import {AnyComponentClass, CommonElementProps} from 'app/helpers/types'
import TooltipAsterisk from './TooltipAsterisk'

function withTooltip<T extends CommonElementProps<HTMLElement>>(WrappedComponent: AnyComponentClass<T>) {
  return (props: T) => {
    if (!props.title) {
      return <WrappedComponent {...props}/>
    }
    return (
      <span>
        <WrappedComponent {...omit(['title'])(props)}/><TooltipAsterisk title={props.title}/>
      </span>
    )
  }
}

export default withTooltip
