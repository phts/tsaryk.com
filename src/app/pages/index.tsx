import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BtnListPage} from './BtnListPage'
import {ShowItemPage} from './ShowItemPage'
import {OpenItemStore} from 'app/stores/openItemStore'

interface Props {
  openItemStore?: OpenItemStore
}

@inject('openItemStore')
@observer
export class Pages extends React.PureComponent<Props> {
  render() {
    return this.props.openItemStore.openItemId ?
      <ShowItemPage itemId={this.props.openItemStore.openItemId}/> :
      <BtnListPage/>
  }
}
