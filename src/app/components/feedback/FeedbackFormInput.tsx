import styled from 'styled-components'

import AutosizedTextInput from 'components/AutosizedTextInput'

export default styled(AutosizedTextInput)`
  background-color: transparent;
  border: 0 none;
  color: inherit;
  font-family: monospace;
  margin: 0;
  outline: none;
  padding: 0;

  &:disabled {
    cursor: not-allowed;
  }

  &::-ms-clear {
    display: none;
  }
`
