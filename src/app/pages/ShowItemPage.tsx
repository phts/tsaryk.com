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
    return <FlexWrapper><Div>
      <header>
        <h1>
          {item.name}
        </h1>
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
    </Div></FlexWrapper>
  }

  private onBack = () => {
    openIndex(this.props.history)
  }
}

const Div = styled.div`
  height: 70%;
  width: 70%;
`

const FlexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
`

export const ShowItemPage = withRouter<Props>(ShowItemPageRaw)
