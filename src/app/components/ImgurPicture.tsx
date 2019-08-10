import React from 'react'

import {breakpoints} from 'helpers/css'
import {ImageElementProps} from 'helpers/types'

interface Props extends ImageElementProps {
  imageId: string
}

export default (({imageId, ...props}) => {
  const prefix = `https://i.imgur.com/${imageId}`
  return (
    <picture>
      <source srcSet={`${prefix}t.jpg`} media={`(max-width: ${breakpoints.mobile}px)`} />
      <source srcSet={`${prefix}m.jpg`} media={`(max-width: ${breakpoints.smartphone}px)`} />
      <source srcSet={`${prefix}l.jpg`} media={`(max-width: ${breakpoints.tablet}px)`} />
      <source srcSet={`${prefix}.jpg`} media={`(min-width: ${breakpoints.hd}px)`} />
      <img src={`${prefix}h.jpg`} {...props} />
    </picture>
  )
}) as React.StatelessComponent<Props>
