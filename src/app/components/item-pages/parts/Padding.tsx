import styled from 'styled-components'
import {media} from 'helpers/css'

export default styled.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7rem 10rem;

  ${media.max.tablet`
    padding: 5rem 7rem;
  `}
  ${media.max.smartphone`
    padding: 2rem;
  `}
  ${media.max.mobile`
    padding: 1rem;
  `}
`
