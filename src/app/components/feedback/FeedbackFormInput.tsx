import styled from 'styled-components'

import AutosizedTextInput from 'app/components/AutosizedTextInput'

export default styled(AutosizedTextInput)`
  border: 0 none;
  font-family: monospace;
  margin: 0;
  padding: 0;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`
