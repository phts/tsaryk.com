import * as React from 'react'
import {omit} from 'ramda'

import {AnyComponentClass, CommonElementProps} from 'app/helpers/types'
import TooltipAsterisk from './TooltipAsterisk'

function withTooltip<T extends CommonElementProps<HTMLElement>>(C: AnyComponentClass<T>) {
  return (props: T) => {
    if (!props.title) {
      return <C {...props}/>
    }
    return (
      <span>
        <C {...omit(['title'])(props)}/><TooltipAsterisk title={props.title}/>
      </span>
    )
  }
}

export default withTooltip
