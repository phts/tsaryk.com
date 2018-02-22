import * as React from 'react'

interface Props {
  html: string
}

const PageHtmlContent: React.StatelessComponent<Props> = ({html}) => (
  <div dangerouslySetInnerHTML={{__html: html}}/>
)

export default PageHtmlContent
