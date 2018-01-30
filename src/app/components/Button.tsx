import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface ButtonProps {
  fontSize?: string
  type?: BUTTON_TYPE
}

type ButtonElProps = ButtonProps & React.HTMLProps<HTMLButtonElement>
const button: StyledFunction<ButtonElProps> = styled.button

export const DEFAULT_FONT_SIZE = '10pt'

export enum BUTTON_TYPE {
  Action = 'Action',
  Default = 'Default',
  Simple = 'Simple',
}

const DEFAULT_BUTTON_TYPE = BUTTON_TYPE.Default

const TYPE_TO_BORDER: {[index in keyof typeof BUTTON_TYPE]: string} = {
  Action: '2px dotted',
  Default: '1px dashed',
  Simple: '0 none',
}

export const Button = button`
  background: none;
  border: 0 none;
  border-bottom: ${props => TYPE_TO_BORDER[props.type as keyof typeof BUTTON_TYPE] || DEFAULT_BUTTON_TYPE};
  color: inherit;
  cursor: pointer;
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE};
  margin: 0;
  padding: 0;
`
