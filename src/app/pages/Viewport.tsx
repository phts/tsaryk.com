import * as React from 'react'
import {observer, inject} from 'mobx-react'
import styled, {StyledFunction} from 'styled-components'

import {UiStore} from 'app/stores/uiStore'

interface Props {
  uiStore?: UiStore
}

@inject('uiStore')
@observer
export class Viewport extends React.PureComponent<Props> {
  render() {
    return <Div
        backgroundColor={this.props.uiStore.backgroundColor}
        fontColor={this.props.uiStore.fontColor}
    >
      {this.props.children}
    </Div>
  }
}

interface DivProps {
  backgroundColor?: string
  fontColor?: string
}

type DivElProps = DivProps & React.HTMLProps<HTMLDivElement>
const div: StyledFunction<DivElProps> = styled.div

const Div = div`
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({fontColor}) => fontColor};
  display: flex;
  height: 100vh;
`
