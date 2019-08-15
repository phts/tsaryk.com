import * as React from 'react'

import {CommonElementProps} from 'helpers/types'

interface Props extends CommonElementProps<HTMLDivElement> {
  className: string
}

export default (({children, className}) => (
  <div className={className}>{children}</div>
)) as React.StatelessComponent<Props>