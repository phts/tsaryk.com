import * as React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import {observer, inject} from 'mobx-react'

import {WidthsStore} from 'app/stores/widthsStore'
import {
  ItemId,
  ListItem,
  ListStore,
  Mode,
} from 'app/stores/listStore'
import {Lang} from 'app/stores/langStore'
import AgeBtn from 'app/components/buttons/AgeBtn'
import BaseBtnComponent from 'app/components/buttons/BaseBtnComponent'
import ColorsBtn from 'app/components/buttons/ColorsBtn'
import LangBtn from 'app/components/buttons/LangBtn'
import ModeBtn from 'app/components/buttons/ModeBtn'
import TextBtn from 'app/components/buttons/TextBtn'
import TitleBtn from 'app/components/buttons/TitleBtn'

interface Props {
  listStore?: ListStore
  widthsStore?: WidthsStore
}

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  min-width: 100%;
  padding: 0.5em 0;
`

type BaseBtnComponentClass = typeof BaseBtnComponent

type KnownBtnMap = {
  [index in ItemId]?: BaseBtnComponentClass
}

const knownBtns: KnownBtnMap = {
  Age: AgeBtn as BaseBtnComponentClass,
  Ascending: ModeBtn(Mode.Asc) as BaseBtnComponentClass,
  Colors: ColorsBtn as BaseBtnComponentClass,
  EN: LangBtn(Lang.EN) as BaseBtnComponentClass,
  Random: ModeBtn(Mode.Random) as BaseBtnComponentClass,
  Title: TitleBtn as BaseBtnComponentClass,
  RU: LangBtn(Lang.RU) as BaseBtnComponentClass,
}

@inject('listStore', 'widthsStore')
@observer
export class BtnListPage extends React.PureComponent<Props> {
  render() {
    const els =  R.map((it: ListItem) => {
      // tslint:disable-next-line no-any
      const BtnComponent: BaseBtnComponentClass = knownBtns[it.id] || TextBtn as any as BaseBtnComponentClass
      return <BtnComponent
        key={it.id}
        item={it}
        width={this.props.widthsStore.getWidth(it.id)}
      />
    })(this.props.listStore.list)
    return <Ul>
      {els}
    </Ul>
  }
}
