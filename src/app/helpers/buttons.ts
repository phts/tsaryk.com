export const DEFAULT_FONT_SIZE = '1rem'

export enum BUTTON_TYPE {
  Action = 'Action',
  Default = 'Default',
  Simple = 'Simple',
}

const TYPE_TO_BORDER: {[index in keyof typeof BUTTON_TYPE]: string} = {
  Action: '2px dotted',
  Default: '1px dashed',
  Simple: '0 none',
}

export function getBorder(type: BUTTON_TYPE) {
  return TYPE_TO_BORDER[type]
}
