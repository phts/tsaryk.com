import * as React from 'react'
import {observer, inject} from 'mobx-react'

import FlexContainerWrapper from 'app/components/FlexContainerWrapper'
import FlexContainer from 'app/components/FlexContainer'
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
