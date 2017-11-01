import {h, Component} from 'preact'

import {getRandomInt} from 'app/utils'
import {BtnListItem} from '../BtnListItem'
import {ColorsBtnListItem} from '../ColorsBtnListItem'

interface ClassType<Cls> {
  new (): Cls
}

interface Item {
  name: string;
  component?: ClassType<BtnListItem>;
}

const list: Array<Item> = [
  {name: '8-bit'},
  {name: 'Anathema'},
  {name: 'Android'},
  {name: 'Angular'},
  {name: 'Belarus'},
  {name: 'BitBucket'},
  {name: 'Board games'},
  {name: 'Cats'},
  {name: 'Chrome'},
  {name: 'Colors', component: ColorsBtnListItem},
  {name: 'Curriculum vitae'},
  {name: 'Debian'},
  {name: 'Deep Purple'},
  {name: 'Drums'},
  {name: 'Email'},
  {name: 'EN'},
  {name: 'Epam'},
  {name: 'Family'},
  {name: 'Firefox'},
  {name: 'foobar2000'},
  {name: 'GitHub'},
  {name: 'God Is An Astronaut'},
  {name: 'Google'},
  {name: 'Grodno'},
  {name: 'Half Life'},
  {name: 'Heroes of Might and Magic 3'},
  {name: 'iOS'},
  {name: 'Java'},
  {name: 'JavaScript'},
  {name: 'Joy in Time'},
  {name: 'Krako\u0301w'},
  {name: 'Langaroo'},
  {name: 'Last.fm'},
  {name: 'LinkedIn'},
  {name: 'Lunatic Soul'},
  {name: 'Minsk'},
  {name: 'Music'},
  {name: 'NES'},
  {name: 'Novopolotsk'},
  {name: 'Opeth'},
  {name: 'Paiste'},
  {name: 'Phil Tsarik'},
  {name: 'phts'},
  {name: 'Pilip Tsaryk'},
  {name: 'Pink Floyd'},
  {name: 'Pixel Dungeon'},
  {name: 'Playing cards'},
  {name: 'Poland'},
  {name: 'PSU'},
  {name: 'React'},
  {name: 'Ritchie Blackmore'},
  {name: 'Riverside'},
  {name: 'RU'},
  {name: 'Ruby'},
  {name: 'S\u030Ckoda'},
  {name: 'SaM Solutions'},
  {name: 'Skype'},
  {name: 'Sound'},
  {name: 'Space Rangers'},
  {name: 'Space Resonance'},
  {name: 'Stack Overflow'},
  {name: 'Sublime Text'},
  {name: 'Syberia'},
  {name: 'The Gathering'},
  {name: 'The Netherlands'},
  {name: 'Ultramarined'},
  {name: 'Vater 5A Los Angeles'},
  {name: 'Video games'},
  {name: 'Waterfox'},
  {name: 'Windows'},
  {name: 'ZX Spectrum'},
]

export class BtnList extends Component<{}, {}> {
  render() {
    const els = list.map((it, i) => {
      const LiComponent: ClassType<BtnListItem> = it.component || BtnListItem
      return <LiComponent key={i} text={it.name} width={getRandomInt(60, 500)}/>
    })
    return <ul>
      {els}
    </ul>
  }
}
