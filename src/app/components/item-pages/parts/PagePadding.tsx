import styled from 'styled-components'
import {media} from 'app/helpers/css'

export default styled.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7em 10em;

  ${media.tablet`
    padding: 5em 7em;
  `}
  ${media.smartphone`
    padding: 2em;
  `}
  ${media.mobile`
    padding: 1em;
  `}
`
