import * as React from 'react'

import {
  ListItem,
  ItemCategory,
  ItemSize,
} from 'app/stores/listStore'

export interface BaseProps {
  item: ListItem,
  width: number,
}

const fontSizeMap: {[index in ItemSize]: string} = {
  M: '10pt',
  L: '12pt',
  XL: '14pt',
  XXL: '16pt',
}

const borderMap: {[index in ItemCategory]: string} = {
  Common: '1px dashed',
  Meta: '2px dotted',
}

export class BaseBtnComponent<P extends BaseProps = BaseProps, S = {}>
             extends React.Component<P, S> {

  protected get borderStyle() {
    return borderMap[this.props.item.category]
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
