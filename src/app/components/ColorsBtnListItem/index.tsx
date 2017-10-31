import {h, Component} from 'preact'

import {getRandomCssColor} from 'app/utils'
import {BtnListItem} from '../BtnListItem'

export class ColorsBtnListItem extends BtnListItem {
  onClick() {
    document.body.style.backgroundColor = getRandomCssColor()
    document.body.style.color = getRandomCssColor()
  }
}
