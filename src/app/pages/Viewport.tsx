import * as React from 'react'
import {observer, inject} from 'mobx-react'
import {ThemeProvider} from 'styled-components'

import dynamicTheme from 'app/themes/dynamicTheme'
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
      <ThemeProvider theme={dynamicTheme(this.props.uiStore)}>
        <FlexContainerWrapper>
          <FlexContainer>
            {this.props.children}
          </FlexContainer>
        </FlexContainerWrapper>
      </ThemeProvider>
    )
  }
}
