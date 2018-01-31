import * as React from 'react'

import {
  ListItem,
  ItemCategory,
  ItemSize,
} from 'app/stores/listStore'
import {DEFAULT_FONT_SIZE, BUTTON_TYPE} from 'app/components/Button'

export interface BaseProps {
  item: ListItem,
  width: number,
}

const fontSizeMap: {[index in ItemSize]: string} = {
  M: DEFAULT_FONT_SIZE,
  L: '1.5rem',
  XL: '2rem',
  XXL: '2.5rem',
}

const buttonTypeMap: {[index in ItemCategory]: BUTTON_TYPE} = {
  Common: BUTTON_TYPE.Default,
  Meta: BUTTON_TYPE.Action,
}

export class BaseBtnComponent<P extends BaseProps = BaseProps, S = {}>
             extends React.Component<P, S> {

  protected get buttonType() {
    return buttonTypeMap[this.props.item.category]
  }

  protected get fontSize(): string {
    return fontSizeMap[this.props.item.size]
  }

  protected get flexBasis() {
    return `${this.props.width}px`
  }

  protected get text() {
    return this.props.item.name
  }
}
