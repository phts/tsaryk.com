import * as React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import {random} from 'rambdax'
import {observer, inject} from 'mobx-react'

import {ListStore, Mode} from 'app/stores/listStore'
import {Item, Lang} from 'app/data/items'
import {
  AgeBtn,
  BaseBtnComponent,
  ColorsBtn,
  LangBtn,
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

type BaseBtnComponentClass = typeof BaseBtnComponent

interface KnownBtnMap {
  [index: string]: BaseBtnComponentClass
}

const knownBtns: KnownBtnMap = {
  30: AgeBtn,
  Ascending: ModeBtn(Mode.Asc),
  Colors: ColorsBtn,
  EN: LangBtn(Lang.EN) ,
  Random: ModeBtn(Mode.Random),
  RU: LangBtn(Lang.RU),
} as KnownBtnMap

@inject('listStore')
@observer
export class BtnList extends React.Component<Props> {
  render() {
    const els =  R.map((it: Item) => {
      const BtnComponent: BaseBtnComponentClass = knownBtns[it.id] || TextBtn as BaseBtnComponentClass
      return <BtnComponent
        key={it.id}
        item={it}
        width={random(60, 500)}
       />
    })(this.props.listStore.items)
    return <Ul>
      {els}
    </Ul>
  }
}
