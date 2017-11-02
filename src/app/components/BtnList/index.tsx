import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'
import {observer, inject} from 'mobx-react'

import {
  ListStore,
  Mode,
} from 'app/stores/listStore'
import {
  Item,
  items,
} from './items'
import {GenericBtn} from '../buttons'

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

const sortFunc = {
  [Mode.Asc]: R.sortBy(R.prop('name')),
  [Mode.Random]: R.shuffle,
}

@inject('listStore')
@observer
export class BtnList extends React.Component<Props, {}> {
  render() {
    const els = R.compose(
      sortFunc[this.props.listStore.mode],
      R.map((it: Item) => {
        const LiComponent: typeof GenericBtn = it.component || GenericBtn
        return <LiComponent
          key={it.name}
          text={it.name}
          size={it.size}
          width={R.random(60, 500)}
         />
      })
    )(items)
    return <Ul>
      {els}
    </Ul>
  }
}
