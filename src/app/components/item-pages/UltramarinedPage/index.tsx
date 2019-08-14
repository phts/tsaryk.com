import React, {useCallback, useState} from 'react'
import {ThemeProvider} from 'styled-components'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import ultramarinedTheme from 'themes/ultramarinedTheme'
import Buttons from 'components/item-pages/parts/Buttons'
import ThemedPadding from 'components/item-pages/parts/ThemedPadding'
import Title from 'components/item-pages/parts/Title'
import CenteredTitle from 'components/item-pages/parts/CenteredTitle'
import Content from 'components/item-pages/parts/Content'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import asItemPage, {ItemPageProps} from 'components/item-pages/asItemPage'
import ActionButton from 'components/ActionButton'
import ImgurPicture from 'components/ImgurPicture'
import useStores from 'hooks/useStores'
import Logo from './Logo'
import UltramarinedContent from './UltramarinedContent'

interface UltramarinedItemData {
  ultrimarine: string
  unultrimarine: string
}

const UltramarinedPage: React.FunctionComponent<ItemPageProps> = props => {
  const {i18nStore} = useStores()
  const [isUltramarined, setUltramarined] = useState(false)

  const toggleUltramarined = useCallback(() => {
    setUltramarined(!isUltramarined)
    window.scrollTo(0, 0)
  }, [isUltramarined])

  const data = props.item.data as UltramarinedItemData
  const title = isUltramarined ? (
    <CenteredTitle>
      <Logo />
    </CenteredTitle>
  ) : (
    <Title>{props.item.name}</Title>
  )
  const content = isUltramarined ? (
    <Content className={props.className}>
      <UltramarinedContent>
        <ImgurPicture imageId="XlCoMYy" alt="Jenya" />
        <ImgurPicture imageId="82GwSq9" alt="Dasha" />
        <ImgurPicture imageId="uAs0gjm" alt="Galya" />
        <ImgurPicture imageId="i2VIacr" alt="Phil" />
      </UltramarinedContent>
    </Content>
  ) : (
    <HtmlContent className={props.className} html={props.item.description} />
  )
  const ultramarineButtonText = isUltramarined ? data.unultrimarine : data.ultrimarine
  const page = (
    <ThemedPadding>
      <Header>{title}</Header>
      {content}
      <Footer>
        <Buttons>
          <ActionButton onClick={props.onClose}>{i18nStore.labels.close}</ActionButton>
          <ActionButton onClick={toggleUltramarined}>{ultramarineButtonText}</ActionButton>
        </Buttons>
      </Footer>
    </ThemedPadding>
  )
  return isUltramarined ? <ThemeProvider theme={ultramarinedTheme}>{page}</ThemeProvider> : page
}

export default asItemPage(UltramarinedPage)
