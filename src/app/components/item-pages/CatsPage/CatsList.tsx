import * as React from 'react'
import styled from 'styled-components'

import OrderedListWithItemHeight from 'app/components/OrderedListWithItemHeight'

export type CatsItemsData = Array<{icon: string, text: string, tooltip?: string}>

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
  cursor: ${props => props.title ? 'help' : 'default'};
  display: inline-block;
  margin-right: 0.5rem;
  text-align: right;
  width: 4rem;
`
