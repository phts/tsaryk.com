import * as React from 'react'
import {inject} from 'mobx-react'

import {WidthsStore} from 'app/stores/widthsStore'
import {ListStore} from 'app/stores/listStore'

interface Props {
  listStore?: ListStore
  widthsStore?: WidthsStore
}

@inject('listStore', 'widthsStore')
export default class InitialRandomizeProvider extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.widthsStore.randomize(this.props.listStore.list)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
