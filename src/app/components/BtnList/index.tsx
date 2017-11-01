import {h, Component} from 'preact'

import {ClassType} from 'app/metatypes'
import {getRandomInt} from 'app/utils'
import {items} from './items'
import {GenericBtn} from '../buttons'

export class BtnList extends Component<{}, {}> {
  render() {
    const els = items.map((it, i) => {
      const LiComponent: ClassType<GenericBtn> = it.component || GenericBtn
      return <LiComponent key={i} text={it.name} width={getRandomInt(60, 500)}/>
    })
    return <ul>
      {els}
    </ul>
  }
}
