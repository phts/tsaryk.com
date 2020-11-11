import React from 'react'
import styled from 'styled-components'

interface RectangleProps {
  imgs: {images: Array<{path: string; width: number}>}
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
  @media (max-width: 720px) {
    background-image: url(${props => `${props.imgs.images[props.imgs.images.length - 1].path}`});
    background-position-x: ${props =>
      -(
        (props.x * props.imgs.images[props.imgs.images.length - 1].width) /
        props.imgs.images[0].width
      )}px;
    background-position-y: ${props =>
      -(
        (props.y * props.imgs.images[props.imgs.images.length - 1].width) /
        props.imgs.images[0].width
      )}px;
    height: ${props =>
      (props.height * props.imgs.images[props.imgs.images.length - 1].width) /
      props.imgs.images[0].width}px;
    width: ${props =>
      (props.width * props.imgs.images[props.imgs.images.length - 1].width) /
      props.imgs.images[0].width}px;
  }
  @media (min-width: 720px) {
    background-image: url(${props => `${props.imgs.images[0].path}`});
    background-position-x: ${props => -props.x}px;
    background-position-y: ${props => -props.y}px;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
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
