import React, {useEffect, useCallback} from 'react'
import * as R from 'ramda'
import {observer} from 'mobx-react'

import useStores from 'hooks/useStores'
import {ItemId, ListItem, Mode} from 'stores/listStore'
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
import PhtsBtn from 'components/buttons/PhtsBtn'

type KnownBtnMap = {
  [index in ItemId]?: BtnClass
}

const knownBtns: KnownBtnMap = {
  /* eslint-disable new-cap */
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
  PHTS: PhtsBtn,
  /* eslint-enable new-cap */
}

const BtnListPage: React.FunctionComponent = () => {
  const {listStore, widthsStore} = useStores()
  const onNavigate = useCallback(() => {
    localStorage.setItem('scrollTop', document.documentElement.scrollTop.toString())
  }, [])

  useEffect(() => {
    document.documentElement.scrollTop = parseInt(localStorage.getItem('scrollTop') || '0', 10)
  }, [])

  const flexible = listStore.mode !== Mode.Categories
  const els = R.map((it: ListItem) => {
    const width = flexible ? widthsStore.getWidth(it.id) : 0
    const BtnComponent: BtnClass = knownBtns[it.id] || TextBtn
    return (
      <BtnComponent
        flexible={flexible}
        item={it}
        key={it.id}
        onNavigate={onNavigate}
        width={width}
      />
    )
  })(listStore.list)
  return <BtnList flexible={flexible}>{els}</BtnList>
}

export default observer(BtnListPage)
