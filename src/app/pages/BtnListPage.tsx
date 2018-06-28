import * as React from 'react'
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
import BtnList from 'app/components/BtnList'
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

type KnownBtnMap = {
  [index in ItemId]?: BtnClass
}

const knownBtns: KnownBtnMap = {
  About: CategoryBtn,
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
export default class BtnListPage extends React.PureComponent<Props> {
  componentDidMount() {
    document.documentElement.scrollTop = parseInt(localStorage.getItem('scrollTop'), 10)
  }

  render() {
    const flexible = this.props.listStore.mode !== Mode.Categories
    const els =  R.map((it: ListItem) => {
      const width = flexible ? this.props.widthsStore.getWidth(it.id) : 0
      const BtnComponent: BtnClass = knownBtns[it.id] || TextBtn
      return <BtnComponent
        flexible={flexible}
        item={it}
        key={it.id}
        onNavigate={this.onNavigate}
        width={width}
      />
    })(this.props.listStore.list)
    return <BtnList flexible={flexible}>
      {els}
    </BtnList>
  }

  private onNavigate = () => {
    localStorage.setItem('scrollTop', document.documentElement.scrollTop.toString())
  }
}
