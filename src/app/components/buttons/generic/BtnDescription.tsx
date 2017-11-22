import * as React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'

interface Props {
  children: string
}

const Div = styled.div`
  border: 1px dashed;
`

export class BtnDescription extends React.Component<Props, {}> {
  render() {
    const content = R.compose(
      R.map(line => <p>{line}</p>),
      R.split('\n'),
    )(this.props.children)
    return <Div>
      {content}
    </Div>
  }
}
