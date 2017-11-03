import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'
import {observer, inject} from 'mobx-react'

import {
  Item,
  ListStore,
} from 'app/stores/listStore'
import {buttons} from 'app/components/buttons'

interface Props {
  listStore?: ListStore
}

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`

@inject('listStore')
@observer
export class BtnList extends React.Component<Props, {}> {
  render() {
    const els =  R.map((it: Item) => {
      const ItemBtn = buttons[it.component]
      if (it.component && !ItemBtn) {
        console.warn(`Component ${it.component} was not found`)
      }
      const LiComponent: typeof buttons.GenericBtn = ItemBtn || buttons.GenericBtn
      return <LiComponent
        key={it.name}
        category={it.category}
        text={it.name}
        size={it.size}
        width={R.random(60, 500)}
       />
    })(this.props.listStore.items)
    return <Ul>
      {els}
    </Ul>
  }
}
