import React from 'react'
import styled from 'styled-components'

interface RectangleProps {
  imgs: string
  title: string
  height: number
  width: number
  x: number
  y: number
}

type LinkProps = RectangleProps & {
  href: string
}

type Props = Partial<LinkProps> & RectangleProps

const PlayingCardAsRect = styled.div<RectangleProps>`
  background-image: url(${(props) => props.imgs});
  background-position-x: ${(props) => -props.x}px;
  background-position-y: ${(props) => -props.y}px;
  background-size: 1187px;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: 0.5em;
`

const PlayingCardAsLink = styled(PlayingCardAsRect).attrs(() => ({
  as: 'a',
  target: '_blank',
}))<LinkProps>`
  opacity: 1;
  transition: opacity 0.2s;

  &:focus,
  &:hover {
    opacity: 0.5;
  }
`

const UniversalPlayingCard: React.FunctionComponent<Props> = ({href, ...rest}) => {
  if (href) {
    return <PlayingCardAsLink href={href} {...rest} />
  } else {
    return <PlayingCardAsRect {...rest} />
  }
}

export default UniversalPlayingCard
