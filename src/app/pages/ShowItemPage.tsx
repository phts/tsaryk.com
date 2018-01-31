import * as React from 'react'
import styled from 'styled-components'
import {observer, inject} from 'mobx-react'

import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {I18nStore} from 'app/stores/i18nStore'
import {OpenItemStore} from 'app/stores/openItemStore'
import {Button, BUTTON_TYPE} from 'app/components'

interface Props {
  itemId: ItemId
  itemsStore?: ItemsStore
  i18nStore?: I18nStore
  openItemStore?: OpenItemStore
}

@inject('itemsStore', 'i18nStore', 'openItemStore')
@observer
export class ShowItemPage extends React.PureComponent<Props> {
  render() {
    const item = this.props.itemsStore.findById(this.props.itemId)
    return <Div>
      <h1>
        {item.name}
      </h1>
      <div>
        {item.description}
      </div>
      <div>
        <Button
          type={BUTTON_TYPE.Action}
          fontSize="10pt"
          onClick={this.onBack}>
          {this.props.i18nStore.labels.close}
        </Button>
      </div>
    </Div>
  }

  private onBack = () => {
    this.props.openItemStore.closeAll()
  }
}

const Div = styled.div`
  padding: 5em 10em;
`
