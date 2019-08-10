import React from 'react'

interface Props {
  className: string
  html: string
}

const PageHtmlContent: React.StatelessComponent<Props> = ({className, html}) => (
  <div className={className} dangerouslySetInnerHTML={{__html: html}} />
)

export default PageHtmlContent
