import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import {ThemeProvider} from 'app/styled-components'

import ultramarinedTheme from 'app/themes/ultramarinedTheme'
import Buttons from 'app/components/item-pages/parts/Buttons'
import ThemedPagePadding from 'app/components/item-pages/parts/ThemedPagePadding'
import PageTitle from 'app/components/item-pages/parts/PageTitle'
import CenteredPageTitle from 'app/components/item-pages/parts/CenteredPageTitle'
import PageContent from 'app/components/item-pages/parts/PageContent'
import PageHtmlContent from 'app/components/item-pages/parts/PageHtmlContent'
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
      <CenteredPageTitle><Logo/></CenteredPageTitle> :
      <PageTitle>{this.props.item.name}</PageTitle>
    const content = this.state.isUltramarined ? (
      <PageContent className={this.props.className}>
        <UltramarinedContent>
          <ImgurPicture imageId="XlCoMYy" alt="Jenya"/>
          <ImgurPicture imageId="82GwSq9" alt="Dasha"/>
          <ImgurPicture imageId="uAs0gjm" alt="Galya"/>
          <ImgurPicture imageId="i2VIacr" alt="Phil"/>
        </UltramarinedContent>
      </PageContent>
    ) : (
      <PageHtmlContent className={this.props.className} html={this.props.item.description}/>
    )
    const ultramarineButtonText = this.state.isUltramarined ? data.unultrimarine : data.ultrimarine
    const page = (
      <ThemedPagePadding>
        <header>
          {title}
        </header>
        {content}
        <footer>
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
        </footer>
      </ThemedPagePadding>
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
