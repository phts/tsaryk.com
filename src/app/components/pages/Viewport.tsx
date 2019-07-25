import * as React from 'react'
import {observer, inject} from 'mobx-react'
import {ThemeProvider} from 'styled-components'

import dynamicTheme from 'themes/dynamicTheme'
import FlexContainerWrapper from 'components/FlexContainerWrapper'
import FlexContainer from 'components/FlexContainer'
import {UiStore} from 'stores/uiStore'

interface Props {
  uiStore?: UiStore
}

@inject('uiStore')
@observer
export default class Viewport extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={dynamicTheme(this.props.uiStore)}>
        <FlexContainerWrapper>
          <FlexContainer>{this.props.children}</FlexContainer>
        </FlexContainerWrapper>
      </ThemeProvider>
    )
  }
}
