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
  data?: ItemData
  description?: string
  flexBasis: number
  flexible: boolean
  fontSize: string
  itemId: ItemId
  onNavigate: React.MouseEventHandler<HTMLElement>
  text: string
  tooltip?: string
}

const FONT_SIZES: {[index in ItemSize]: string} = {
  M: DEFAULT_FONT_SIZE,
  L: '1.5rem',
  XL: '2rem',
  XXL: '2.5rem',
}

const BUTTON_TYPES: {[index in ItemType]: BUTTON_TYPE} = {
  Category: BUTTON_TYPE.Simple,
  Item: BUTTON_TYPE.Default,
  Meta: BUTTON_TYPE.Action,
}

export type BtnClass = React.FunctionComponent<BaseBtnProps>

const asBtn: Hoc<BtnProps, BtnClass> =
  (WrappedComponent) =>
  ({flexible, item, onNavigate, width}) =>
    (
      <WrappedComponent
        buttonType={BUTTON_TYPES[item.type]}
        data={item.data}
        description={item.description}
        flexBasis={width}
        flexible={flexible}
        fontSize={FONT_SIZES[item.size]}
        itemId={item.id}
        onNavigate={onNavigate}
        text={item.name}
        tooltip={item.tooltip}
      />
    )

export default asBtn
