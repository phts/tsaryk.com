import * as React from 'react'

import {
  ItemId,
  ItemSize,
  ItemType,
  ListItem,
} from 'app/stores/listStore'
import {DEFAULT_FONT_SIZE, BUTTON_TYPE} from 'app/helpers/buttons'
import {Hoc} from 'app/helpers/types'

export interface BaseBtnProps {
  item: ListItem
  onNavigate: React.MouseEventHandler<HTMLElement>
  width: number
}

export interface BtnProps {
  buttonType: BUTTON_TYPE
  description: string
  flexBasis: number
  fontSize: string
  itemId: ItemId
  onNavigate: React.MouseEventHandler<HTMLElement>
  text: string
}

const fontSizeMap: {[index in ItemSize]: string} = {
  M: DEFAULT_FONT_SIZE,
  L: '1.5rem',
  XL: '2rem',
  XXL: '2.5rem',
}

const buttonTypeMap: {[index in ItemType]?: BUTTON_TYPE} = {
  Item: BUTTON_TYPE.Default,
  Meta: BUTTON_TYPE.Action,
}

export type BtnClass = React.StatelessComponent<BaseBtnProps>

const asBtn: Hoc<BtnProps, BtnClass> = WrappedComponent =>
  ({item, onNavigate, width}) =>
    <WrappedComponent
      buttonType={buttonTypeMap[item.type]}
      description={item.description}
      flexBasis={width}
      fontSize={fontSizeMap[item.size]}
      itemId={item.id}
      onNavigate={onNavigate}
      text={item.name}
    />

export default asBtn
