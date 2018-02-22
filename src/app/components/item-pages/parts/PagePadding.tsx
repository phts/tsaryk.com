import styled from 'styled-components'
import {media} from 'app/helpers/css'

export default styled.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7em 10em;

  ${media.max.tablet`
    padding: 5em 7em;
  `}
  ${media.max.smartphone`
    padding: 2em;
  `}
  ${media.max.mobile`
    padding: 1em;
  `}
`
