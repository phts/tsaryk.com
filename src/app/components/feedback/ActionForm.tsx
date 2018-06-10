import styled, {StyledFunction} from 'app/styled-components'

import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'
import {FormElementProps} from 'app/helpers/types'

interface Props extends FormElementProps {
  disabled: boolean
}

export default (styled.form as StyledFunction<Props>)`
  background: ${props => props.disabled ? 'rgba(102, 102, 102, 0.25)' : 'transparent'};
  border: ${getBorder(BUTTON_TYPE.Action)};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};

  & > * {
    vertical-align: middle;
  }
`
