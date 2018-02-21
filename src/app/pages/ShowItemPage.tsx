import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import styled from 'styled-components'
import {observer, inject} from 'mobx-react'

import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {I18nStore} from 'app/stores/i18nStore'
import {Button} from 'app/components'
import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'app/helpers/buttons'
import {openIndex} from 'app/helpers/routes'
import {ShowItemPageMatch} from 'app/routes'
import {media} from 'app/helpers/css'

interface Props extends RouteComponentProps<ShowItemPageMatch> {
  itemId: ItemId
  itemsStore?: ItemsStore
  i18nStore?: I18nStore
}

@inject('itemsStore', 'i18nStore')
@observer
class ShowItemPageRaw extends React.PureComponent<Props> {
  render() {
    const item = this.props.itemsStore.findById(this.props.match.params.id)
    return <FlexWrapper><div>
      <header>
        <ShowItemPageTitle>
          {item.name}
        </ShowItemPageTitle>
      </header>
      <div dangerouslySetInnerHTML={{__html: item.description}}/>
      <footer>
        <Button
          border={getBorder(BUTTON_TYPE.Action)}
          fontSize={DEFAULT_FONT_SIZE}
          onClick={this.onBack}>
          {this.props.i18nStore.labels.close}
        </Button>
      </footer>
    </div></FlexWrapper>
  }

  private onBack = () => {
    openIndex(this.props.history)
  }
}

const FlexWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7em 10em;

  ${media.tablet`
    padding: 5em 7em;
  `}
  ${media.smartphone`
    padding: 2em;
  `}
  ${media.mobile`
    padding: 1em;
  `}
`

const ShowItemPageTitle = styled.h1`
  margin: 0 0 1em;
`

export const ShowItemPage = withRouter<Props>(ShowItemPageRaw)
