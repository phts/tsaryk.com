import {h, Component} from 'preact'

import {getRandomCssColor} from 'app/utils'
import {GenericBtn} from '../GenericBtn'

export class ColorsBtn extends GenericBtn {
  onClick() {
    document.body.style.backgroundColor = getRandomCssColor()
    document.body.style.color = getRandomCssColor()
  }
}
