import styled from 'styled-components'

import {BUTTON_TYPE, getBorder} from 'helpers/buttons'
import {FormElementProps} from 'helpers/types'

interface Props extends FormElementProps {
  disabled: boolean
}

export default styled.form<Props>`
  background: ${(props) => (props.disabled ? 'rgba(102, 102, 102, 0.25)' : 'transparent')};
  border: ${getBorder(BUTTON_TYPE.Action)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  & > * {
    vertical-align: middle;
  }
`
