import * as React from 'react'
import {omit} from 'ramda'

import {AnyComponentClass, CommonElementProps} from 'helpers/types'
import TooltipAsterisk from './TooltipAsterisk'

function withTooltip<T extends CommonElementProps<HTMLElement>>(C: AnyComponentClass<T>) {
  return (props: T) => {
    if (!props.title) {
      return <C {...props} />
    }
    return (
      <span>
        <C {...(omit(['title'])(props) as T)} />
        <TooltipAsterisk title={props.title} />
      </span>
    )
  }
}

export default withTooltip
