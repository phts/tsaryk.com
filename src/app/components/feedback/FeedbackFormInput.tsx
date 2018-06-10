import styled from 'app/styled-components'

import AutosizedTextInput from 'app/components/AutosizedTextInput'

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
