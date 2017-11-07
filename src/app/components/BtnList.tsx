import * as React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import {observer, inject} from 'mobx-react'

import {WidthsStore} from 'app/stores/widthsStore'
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
  widthsStore?: WidthsStore
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

@inject('listStore', 'widthsStore')
@observer
export class BtnList extends React.Component<Props> {
  componentWillMount() {
    this.props.widthsStore.randomize(this.props.listStore.items)
  }

  render() {
    const els =  R.map((it: Item) => {
      const BtnComponent: BaseBtnComponentClass = knownBtns[it.id] || TextBtn as BaseBtnComponentClass
      return <BtnComponent
        key={it.id}
        item={it}
        width={this.props.widthsStore.getWidth(it.id)}
      />
    })(this.props.listStore.items)
    return <Ul>
      {els}
    </Ul>
  }
}
