import styled from 'app/styled-components'
import {media} from 'app/helpers/css'

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
