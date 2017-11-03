import {AscendingBtn} from './AscendingBtn'
import {ColorsBtn} from './ColorsBtn'
import {GenericBtn} from './GenericBtn'
import {RandomBtn} from './RandomBtn'

export const buttons: {[index: string]: typeof GenericBtn} = {
  AscendingBtn,
  ColorsBtn,
  GenericBtn,
  RandomBtn,
}
