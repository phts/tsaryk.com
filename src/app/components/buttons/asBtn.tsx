import * as React from 'react'

import {
  ItemId,
  ItemSize,
  ItemType,
  ListItem,
} from 'app/stores/listStore'
import {DEFAULT_FONT_SIZE, BUTTON_TYPE} from 'app/helpers/buttons'

export interface BaseBtnProps {
  item: ListItem
  width: number
}

export interface BtnProps {
  buttonType: BUTTON_TYPE
  description: string
  flexBasis: number
  fontSize: string
  itemId: ItemId
  text: string
}

const fontSizeMap: {[index in ItemSize]: string} = {
  M: DEFAULT_FONT_SIZE,
  L: '1.5rem',
  XL: '2rem',
  XXL: '2.5rem',
}

const buttonTypeMap: {[index in ItemType]: BUTTON_TYPE} = {
  Item: BUTTON_TYPE.Default,
  Meta: BUTTON_TYPE.Action,
}

export type BtnClass = React.StatelessComponent<BaseBtnProps>

type WrappedComponentType = React.ComponentClass<BtnProps> | React.StatelessComponent<BtnProps>

type AsBtnHoc = (WrappedComponent: WrappedComponentType) => BtnClass

const asBtn: AsBtnHoc = WrappedComponent =>
  ({item, width}) =>
    <WrappedComponent
      buttonType={buttonTypeMap[item.type]}
      description={item.description}
      flexBasis={width}
      fontSize={fontSizeMap[item.size]}
      itemId={item.id}
      text={item.name}
    />

export default asBtn
