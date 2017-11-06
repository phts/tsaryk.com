import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'
import {observer, inject} from 'mobx-react'

import {ListStore, Mode} from 'app/stores/listStore'
import {Item} from 'app/data/items'
import {
  AgeBtn,
  BaseBtnComponent,
  ColorsBtn,
  ModeBtn,
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
  Ascending: ModeBtn(Mode.Asc) as typeof BaseBtnComponent,
  Colors: ColorsBtn as typeof BaseBtnComponent,
  Random: ModeBtn(Mode.Random) as typeof BaseBtnComponent,
}

@inject('listStore')
@observer
export class BtnList extends React.Component<Props> {
  render() {
    const els =  R.map((it: Item) => {
      const BtnComponent: typeof BaseBtnComponent = knownBtns[it.name] || TextBtn as typeof BaseBtnComponent
      return <BtnComponent
        key={it.name}
        item={it}
        width={R.random(60, 500)}
       />
    })(this.props.listStore.items)
    return <Ul>
      {els}
    </Ul>
  }
}
