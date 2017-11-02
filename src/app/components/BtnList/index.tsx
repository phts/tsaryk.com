import * as React from 'react'
import styled from 'styled-components'
import * as R from 'rambdax'

import {
  Item,
  items,
} from './items'
import {GenericBtn} from '../buttons'

export enum Mode {
  Asc,
  Random,
}

interface State {
  mode: Mode
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

export class BtnList extends React.Component<{}, State> {
  constructor() {
    super()
    this.setMode = this.setMode.bind(this)
    this.state = {
      mode: Mode.Asc
    }
  }

  setMode(mode: Mode) {
    if (mode === Mode.Asc && this.state.mode === Mode.Asc) {
      return
    }
    this.setState({mode})
  }

  render() {
    const els = R.compose(
      sortFunc[this.state.mode],
      R.map((it: Item) => {
        const LiComponent: typeof GenericBtn = it.component || GenericBtn
        return <LiComponent
          key={it.name}
          onModeChange={this.setMode}
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
