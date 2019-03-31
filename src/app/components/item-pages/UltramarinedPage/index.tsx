import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import {ThemeProvider} from 'styled-components'

import Header from 'app/components/item-pages/parts/Header'
import Footer from 'app/components/item-pages/parts/Footer'
import ultramarinedTheme from 'app/themes/ultramarinedTheme'
import Buttons from 'app/components/item-pages/parts/Buttons'
import ThemedPadding from 'app/components/item-pages/parts/ThemedPadding'
import Title from 'app/components/item-pages/parts/Title'
import CenteredTitle from 'app/components/item-pages/parts/CenteredTitle'
import Content from 'app/components/item-pages/parts/Content'
import HtmlContent from 'app/components/item-pages/parts/HtmlContent'
import UltramarinedContent from './UltramarinedContent'
import Logo from './Logo'
import asItemPage, {ItemPageProps} from 'app/components/item-pages/asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'
import ImgurPicture from 'app/components/ImgurPicture'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

interface State {
  isUltramarined: boolean
}

interface UltramarinedItemData {
  ultrimarine: string
  unultrimarine: string
}

class UltramarinedPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isUltramarined: false,
    }
  }

  render() {
    const data = this.props.item.data as UltramarinedItemData
    const title = this.state.isUltramarined ?
      <CenteredTitle><Logo/></CenteredTitle> :
      <Title>{this.props.item.name}</Title>
    const content = this.state.isUltramarined ? (
      <Content className={this.props.className}>
        <UltramarinedContent>
          <ImgurPicture imageId="XlCoMYy" alt="Jenya"/>
          <ImgurPicture imageId="82GwSq9" alt="Dasha"/>
          <ImgurPicture imageId="uAs0gjm" alt="Galya"/>
          <ImgurPicture imageId="i2VIacr" alt="Phil"/>
        </UltramarinedContent>
      </Content>
    ) : (
      <HtmlContent className={this.props.className} html={this.props.item.description}/>
    )
    const ultramarineButtonText = this.state.isUltramarined ? data.unultrimarine : data.ultrimarine
    const page = (
      <ThemedPadding>
        <Header>
          {title}
        </Header>
        {content}
        <Footer>
          <Buttons>
            <ActionButton
              onClick={this.props.onClose}>
              {this.props.i18nStore.labels.close}
            </ActionButton>
            <ActionButton
              onClick={this.toggleUltramarined}>
              {ultramarineButtonText}
            </ActionButton>
          </Buttons>
        </Footer>
      </ThemedPadding>
    )
    return this.state.isUltramarined ? (
      <ThemeProvider theme={ultramarinedTheme}>
        {page}
      </ThemeProvider>
    ) : (
      page
    )
  }

  private toggleUltramarined = () => {
    this.setState(state => ({isUltramarined: !state.isUltramarined}))
    window.scrollTo(0, 0)
  }
}

export default compose(
  asItemPage,
  inject('i18nStore'),
)(UltramarinedPage)
