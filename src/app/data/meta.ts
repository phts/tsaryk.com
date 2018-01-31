import {KnownName} from './names'

export enum ItemCategory {
  Common = 'Common',
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

type RawMetaPropSet = {
  [P in keyof MetaPropsSet]?: MetaPropsSet[P]
}

type RawMetaProps = {[index in KnownName]?: RawMetaPropSet}

interface MetaPropsSet {
  category: ItemCategory
  position: ItemPosition
  size: ItemSize
}

export const DEFAULT_META_PROPS_SET: MetaPropsSet = {
  category: ItemCategory.Common,
  position: ItemPosition.Middle,
  size: ItemSize.M,
}

export const metaProps: RawMetaProps = {
  EN: {
    category: ItemCategory.Meta,
    position: ItemPosition.Head,
  },
  RU: {
    category: ItemCategory.Meta,
    position: ItemPosition.Head,
  },
  Title: {
    category: ItemCategory.Meta,
    position: ItemPosition.Head,
    size: ItemSize.XXL,
  },
  '© Phil Tsarik, 2017': {
    position: ItemPosition.Tail,
  },
  Angular: {
    size: ItemSize.L,
  },
  Ascending: {
    category: ItemCategory.Meta,
  },
  Colors: {
    category: ItemCategory.Meta,
  },
  'Curriculum vitae': {
    size: ItemSize.L,
  },
  Drums: {
    size: ItemSize.XL,
  },
  Epam: {
    size: ItemSize.L,
  },
  Family: {
    size: ItemSize.L,
  },
  GitHub: {
    size: ItemSize.L,
  },
  JavaScript: {
    size: ItemSize.XL,
  },
  'Lunatic Soul': {
    size: ItemSize.L,
  },
  'Phil Tsarik': {
    size: ItemSize.XXL,
  },
  'Pink Floyd': {
    size: ItemSize.L,
  },
  Random: {
    category: ItemCategory.Meta,
  },
  React: {
    size: ItemSize.L,
  },
  'Software Engineer': {
    size: ItemSize.XL,
  },
}
