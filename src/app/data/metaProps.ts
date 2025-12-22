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
  '©': {
    position: ItemPosition.Tail,
  },

  About: {
    type: ItemType.Category,
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

  Belarus: {
    size: ItemSize.L,
  },
  'Board games': {
    size: ItemSize.L,
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
  Electronics: {
    size: ItemSize.L,
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
  'Phil Tsaryk': {
    size: ItemSize.XXL,
  },
  'Playing cards': {
    size: ItemSize.L,
  },
  React: {
    size: ItemSize.L,
  },
  'Software Engineer': {
    size: ItemSize.L,
  },
  Traveling: {
    size: ItemSize.L,
  },
}
