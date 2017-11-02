import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'
import {observer, inject} from 'mobx-react'

import {
  Item,
  ListStore,
} from 'app/stores/listStore'
import {
  AscendingBtn,
  ColorsBtn,
  GenericBtn,
  RandomBtn,
} from 'app/components/buttons'

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

const buttonsMap: {[index: string]: typeof GenericBtn} = {
  AscendingBtn,
  ColorsBtn,
  GenericBtn,
  RandomBtn,
}

@inject('listStore')
@observer
export class BtnList extends React.Component<Props, {}> {
  render() {
    const els =  R.map((it: Item) => {
      const LiComponent: typeof GenericBtn = buttonsMap[it.component] || GenericBtn
      return <LiComponent
        key={it.name}
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
