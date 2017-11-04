import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'
import {observer, inject} from 'mobx-react'

import {ListStore} from 'app/stores/listStore'
import {Item} from 'app/data/items'
import {
  AgeBtn,
  AscendingBtn,
  BaseBtnComponent,
  ColorsBtn,
  RandomBtn,
  TextBtn,
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

const knownBtns: {[index: string]: typeof BaseBtnComponent} = {
  30: AgeBtn as typeof BaseBtnComponent,
  Ascending: AscendingBtn as typeof BaseBtnComponent,
  Colors: ColorsBtn as typeof BaseBtnComponent,
  Random: RandomBtn as typeof BaseBtnComponent,
}

@inject('listStore')
@observer
export class BtnList extends React.Component<Props> {
  render() {
    const els =  R.map((it: Item) => {
      const LiComponent: typeof BaseBtnComponent = knownBtns[it.name] || TextBtn as typeof BaseBtnComponent
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
