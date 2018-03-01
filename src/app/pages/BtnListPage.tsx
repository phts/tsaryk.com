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
import {BtnClass} from 'app/components/buttons/asBtn'
import CategoryBtn from 'app/components/buttons/CategoryBtn'
import ColorsBtn from 'app/components/buttons/ColorsBtn'
import FeedbackBtn from 'app/components/buttons/FeedbackBtn'
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

type KnownBtnMap = {
  [index in ItemId]?: BtnClass
}

const knownBtns: KnownBtnMap = {
  Contacts: CategoryBtn,
  Hobby: CategoryBtn,
  Meta: CategoryBtn,
  Work: CategoryBtn,

  Age: AgeBtn,
  Ascending: ModeBtn(Mode.Asc),
  Categorize: ModeBtn(Mode.Categories),
  Colors: ColorsBtn,
  EN: LangBtn(Lang.EN),
  Feedback: FeedbackBtn,
  Random: ModeBtn(Mode.Random),
  Title: TitleBtn,
  RU: LangBtn(Lang.RU),
}

@inject('listStore', 'widthsStore')
@observer
export class BtnListPage extends React.PureComponent<Props> {
  render() {
    const els =  R.map((it: ListItem) => {
      const BtnComponent: BtnClass = knownBtns[it.id] || TextBtn
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
