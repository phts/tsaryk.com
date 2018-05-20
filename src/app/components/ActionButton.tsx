import * as React from 'react'

import Button from './Button'
import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'app/helpers/buttons'
import {ButtonElementProps} from 'app/helpers/types'

type Props = ButtonElementProps

export default (
  (props: Props) => (
    <Button
      {...props}
      border={getBorder(BUTTON_TYPE.Action)}
      fontSize={DEFAULT_FONT_SIZE}
    />
  )
) as React.StatelessComponent<Props>
