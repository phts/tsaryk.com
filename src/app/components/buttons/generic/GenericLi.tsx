import styled from 'styled-components'

import {CommonElementProps} from 'helpers/types'

interface Props extends CommonElementProps<HTMLLIElement> {
  flexBasis: number
  flexible: boolean
}

export default styled.li.attrs<Props>(props => ({
  style: {
    flexBasis: `${props.flexBasis}vw`,
  },
}))<Props>`
  align-items: center;
  display: flex;
  flex-grow: ${({flexible}) => (flexible ? 1 : 0)};
  justify-content: center;
  margin: 0 1rem;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`
