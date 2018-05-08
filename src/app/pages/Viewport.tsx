import * as React from 'react'
import {observer, inject} from 'mobx-react'
import styled, {StyledFunction} from 'styled-components'

import {UiStore} from 'app/stores/uiStore'

interface Props {
  uiStore?: UiStore
}

@inject('uiStore')
@observer
export default class Viewport extends React.PureComponent<Props> {
  render() {
    return (
      <FlexContainerWrapper>
        <FlexContainer
            backgroundColor={this.props.uiStore.backgroundColor}
            fontColor={this.props.uiStore.fontColor}
        >
          {this.props.children}
        </FlexContainer>
      </FlexContainerWrapper>
    )
  }
}

interface DivProps {
  backgroundColor?: string
  fontColor?: string
}

type DivElProps = DivProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const div: StyledFunction<DivElProps> = styled.div

const FlexContainerWrapper = div`
  display: flex;
  flex-direction: column;
`

const FlexContainer = div`
  background-color: ${({backgroundColor}) => backgroundColor};
  box-sizing: border-box;
  color: ${({fontColor}) => fontColor};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`
