import React from 'react'

import {ItemData, ItemId, ItemSize, ItemType, ListItem} from 'stores/listStore'
import {DEFAULT_FONT_SIZE, BUTTON_TYPE} from 'helpers/buttons'
import {Hoc} from 'helpers/types'

export interface BaseBtnProps {
  flexible: boolean
  item: ListItem
  onNavigate: React.MouseEventHandler<HTMLElement>
  width: number
}

export interface BtnProps {
  buttonType: BUTTON_TYPE
  data: ItemData
  description: string
  flexBasis: number
  flexible: boolean
  fontSize: string
  itemId: ItemId
  onNavigate: React.MouseEventHandler<HTMLElement>
  text: string
  tooltip: string
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

const asBtn: Hoc<BtnProps, BtnClass> = WrappedComponent => ({
  flexible,
  item,
  onNavigate,
  width,
}) => (
  <WrappedComponent
    buttonType={buttonTypeMap[item.type]}
    data={item.data}
    description={item.description}
    flexBasis={width}
    flexible={flexible}
    fontSize={fontSizeMap[item.size]}
    itemId={item.id}
    onNavigate={onNavigate}
    text={item.name}
    tooltip={item.tooltip}
  />
)

export default asBtn
