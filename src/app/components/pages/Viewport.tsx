import React from 'react'
import {observer} from 'mobx-react'
import {ThemeProvider} from 'styled-components'

import useStores from 'hooks/useStores'
import dynamicTheme from 'themes/dynamicTheme'
import FlexContainerWrapper from 'components/FlexContainerWrapper'
import FlexContainer from 'components/FlexContainer'

const Viewport: React.FunctionComponent = ({children}) => {
  const {uiStore} = useStores()

  return (
    <ThemeProvider theme={dynamicTheme(uiStore)}>
      <FlexContainerWrapper>
        <FlexContainer>{children}</FlexContainer>
      </FlexContainerWrapper>
    </ThemeProvider>
  )
}

export default observer(Viewport)
