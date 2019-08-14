import React from 'react'
import {omit} from 'ramda'

import {AnyComponentClass, CommonElementProps} from 'helpers/types'
import TooltipAsterisk from './TooltipAsterisk'

export default function withTooltip<T extends CommonElementProps<HTMLElement>>(
  C: AnyComponentClass<T>,
): React.FunctionComponent<T> {
  return props => {
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
