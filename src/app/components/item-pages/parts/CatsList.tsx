import * as React from 'react'
import styled from 'app/styled-components'

import OrderedListWithItemHeight from 'app/components/OrderedListWithItemHeight'

export type CatsItemsData = Array<{icon: string; text: string; tooltip?: string}>

interface Props {
  items: CatsItemsData
}

export default (
  ({items}) => (
    <OrderedListWithItemHeight>
      {
        items.map(x => (
          <li key={x.tooltip}>
            <EmojiIcon dangerouslySetInnerHTML={{__html: x.icon}} title={x.tooltip}/>{x.text}
          </li>
        ))
      }
    </OrderedListWithItemHeight>
  )
) as React.StatelessComponent<Props>

const EmojiIcon = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: right;
  margin-right: 0.5rem;
  cursor: ${props => props.title ? 'help' : 'default'};
`
