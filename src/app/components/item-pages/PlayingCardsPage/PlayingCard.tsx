import React from 'react'
import styled from 'styled-components'

import playingCardsImgs from './playing-cards.png'

interface RectangleProps {
  title?: string
  height: number
  width: number
  x: number
  y: number
}

type LinkProps = RectangleProps & {
  href: string
}

type Props = Partial<LinkProps> & RectangleProps

const RATIO_720 = 1200 / 2000
const RATIO_480 = 1000 / 2000
const RATIO_MOB = 800 / 2000

const PlayingCardAsRect = styled.div<RectangleProps>`
  @media (max-width: 480px) {
    background-image: url(${playingCardsImgs.images[0].path}?__PLAYING_CARDS_PNG_HASH__);
    background-position-x: ${props => -(props.x * RATIO_MOB)}px;
    background-position-y: ${props => -(props.y * RATIO_MOB)}px;
    height: ${props => props.height * RATIO_MOB}px;
    width: ${props => props.width * RATIO_MOB}px;
  }
  @media (min-width: 481px) and (max-width: 720px) {
    background-image: url(${playingCardsImgs.images[1].path}?__PLAYING_CARDS_PNG_HASH__);
    background-position-x: ${props => -(props.x * RATIO_480)}px;
    background-position-y: ${props => -(props.y * RATIO_480)}px;
    height: ${props => props.height * RATIO_480}px;
    width: ${props => props.width * RATIO_480}px;
  }
  @media (min-width: 720px) {
    background-image: url(${playingCardsImgs.images[2].path}?__PLAYING_CARDS_PNG_HASH__);
    background-position-x: ${props => -(props.x * RATIO_720)}px;
    background-position-y: ${props => -(props.y * RATIO_720)}px;
    height: ${props => props.height * RATIO_720}px;
    width: ${props => props.width * RATIO_720}px;
  }
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
