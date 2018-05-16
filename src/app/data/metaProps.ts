import {KnownName} from './names'

export enum ItemType {
  Category = 'Category',
  Item = 'Item',
  Meta = 'Meta',
}

export enum ItemPosition {
  Head = 'Head',
  Middle = 'Middle',
  Tail = 'Tail',
}

export enum ItemSize {
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

interface MetaProps {
  type: ItemType
  position: ItemPosition
  size: ItemSize
}

export const DEFAULT_META_PROPS: MetaProps = {
  position: ItemPosition.Middle,
  size: ItemSize.M,
  type: ItemType.Item,
}

type PartialMetaProps = {
  [P in keyof MetaProps]?: MetaProps[P]
}

type MetaPropsMap = {[index in KnownName]?: PartialMetaProps}

export const metaPropsMap: MetaPropsMap = {
  EN: {
    position: ItemPosition.Head,
    type: ItemType.Meta,
  },
  RU: {
    position: ItemPosition.Head,
    type: ItemType.Meta,
  },
  Title: {
    position: ItemPosition.Head,
    size: ItemSize.XXL,
    type: ItemType.Meta,
  },
  '© Phil Tsarik, 2018': {
    position: ItemPosition.Tail,
  },

  Contacts: {
    type: ItemType.Category,
  },
  Hobby: {
    type: ItemType.Category,
  },
  Meta: {
    type: ItemType.Category,
  },
  Work: {
    type: ItemType.Category,
  },

  Ascending: {
    type: ItemType.Meta,
  },
  Categorize: {
    type: ItemType.Meta,
  },
  Colors: {
    type: ItemType.Meta,
  },
  Feedback: {
    type: ItemType.Meta,
  },
  Random: {
    type: ItemType.Meta,
  },

  Cats: {
    size: ItemSize.XL,
  },
  'Curriculum vitae': {
    size: ItemSize.L,
  },
  Drums: {
    size: ItemSize.XL,
  },
  GitHub: {
    size: ItemSize.L,
  },
  JavaScript: {
    size: ItemSize.XL,
  },
  Kraków: {
    size: ItemSize.L,
  },
  Music: {
    size: ItemSize.XL,
  },
  'Phil Tsarik': {
    size: ItemSize.XXL,
  },
  'Pink Floyd': {
    size: ItemSize.L,
  },
  React: {
    size: ItemSize.L,
  },
  'Software Engineer': {
    size: ItemSize.XL,
  },
}
