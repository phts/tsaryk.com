import styled from 'styled-components'

import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  disabled: boolean,
}

export default styled.form`
  background: ${(props: Props) => props.disabled ? 'lightgray' : 'transparent'};
  border: ${getBorder(BUTTON_TYPE.Action)};
  cursor: ${(props: Props) => props.disabled ? 'not-allowed' : 'default'};

  & > * {
    vertical-align: middle;
  }
`
