import * as React from 'react'
import * as R from 'ramda'
import {observer, inject} from 'mobx-react'

import {WidthsStore} from 'stores/widthsStore'
import {
  ItemId,
  ListItem,
  ListStore,
  Mode,
} from 'stores/listStore'
import {Lang} from 'stores/langStore'
import BtnList from 'components/BtnList'
import AgeBtn from 'components/buttons/AgeBtn'
import {BtnClass} from 'components/buttons/asBtn'
import CategoryBtn from 'components/buttons/CategoryBtn'
import ColorsBtn from 'components/buttons/ColorsBtn'
import FeedbackBtn from 'components/buttons/FeedbackBtn'
import LangBtn from 'components/buttons/LangBtn'
import ModeBtn from 'components/buttons/ModeBtn'
import TextBtn from 'components/buttons/TextBtn'
import TitleBtn from 'components/buttons/TitleBtn'

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
  Ascending: ModeBtn(Mode.Asc), // eslint-disable-line new-cap
  Categorize: ModeBtn(Mode.Categories), // eslint-disable-line new-cap
  Colors: ColorsBtn,
  EN: LangBtn(Lang.EN), // eslint-disable-line new-cap
  Feedback: FeedbackBtn,
  Random: ModeBtn(Mode.Random), // eslint-disable-line new-cap
  Title: TitleBtn,
  RU: LangBtn(Lang.RU), // eslint-disable-line new-cap
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
