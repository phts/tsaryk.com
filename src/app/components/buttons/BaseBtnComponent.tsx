import * as React from 'react'

import {
  ItemCategory,
  ItemSize,
} from 'app/data/items'

export interface BaseProps {
  category: ItemCategory
  size: ItemSize
  text: string
  width: number
}

export class BaseBtnComponent<P extends BaseProps = BaseProps, S = {}>
             extends React.Component<P, S> {
}
