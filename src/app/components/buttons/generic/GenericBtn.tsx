import * as React from 'react'

import Button from 'app/components/Button'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'
import {ButtonElementProps} from 'app/helpers/types'
import withTooltip from 'app/components/buttons/withTooltip'

interface Props extends ButtonElementProps {
  buttonType: BUTTON_TYPE
  fontSize: string
}

const GenericBtn: React.StatelessComponent<Props> = props => (
  <Button
    {...props}
    border={getBorder(props.buttonType)}
    fontSize={props.fontSize}
  />
)

export default withTooltip(GenericBtn)
