export type ItemId = string

export interface Item {
  category?: ItemCategory
  description?: string
  name: ItemId
  size?: ItemSize
}

export type Items = Item[]

export enum ItemCategory {
  Meta,
}

export enum ItemSize {
  M,
  L,
  XL,
  XXL,
}

export const headItems: Items = [
  {
    category: ItemCategory.Meta,
    name: 'EN',
  },
  {
    category: ItemCategory.Meta,
    name: 'RU',
  },
  {
    category: ItemCategory.Meta,
    name: 'phts.com',
    size: ItemSize.XXL,
  },
]

export const tailItems: Items = [
  {name: '© Phil Tsarik, 2017'},
]

export const items: Items = [
  {name: '30'},
  {name: '8-bit'},
  {name: 'Anathema'},
  {name: 'Android'},
  {
    name: 'Angular',
    size: ItemSize.L,
  },
  {
    category: ItemCategory.Meta,
    name: 'Ascending',
  },
  {name: 'bash.org'},
  {name: 'Belarus'},
  {name: 'Bicycle'},
  {name: 'Billiard'},
  {name: 'BitBucket'},
  {name: 'Board games'},
  {name: 'Cats'},
  {
    category: ItemCategory.Meta,
    name: 'Colors',
  },
  {
    name: 'Curriculum vitae',
    size: ItemSize.L,
  },
  {name: 'Debian'},
  {name: 'Deep Purple'},
  {name: 'Design'},
  {
    name: 'Drums',
    size: ItemSize.XL,
  },
  {name: 'Email'},
  {
    name: 'Epam',
    size: ItemSize.L,
  },
  {name: 'Facebook'},
  {
    name: 'Family',
    size: ItemSize.L,
  },
  {name: 'foobar2000'},
  {
    name: 'GitHub',
    size: ItemSize.L,
  },
  {name: 'God Is An Astronaut'},
  {name: 'Grodno'},
  {name: 'Habr'},
  {name: 'Heroes of Might and Magic 3'},
  {name: 'Java'},
  {
    name: 'JavaScript',
    size: ItemSize.XL,
  },
  {name: 'Joy in Time'},
  {name: 'Krako\u0301w'},
  {name: 'Langaroo'},
  {name: 'Last.fm'},
  {name: 'Lego'},
  {name: 'LinkedIn'},
  {
    name: 'Lunatic Soul',
    size: ItemSize.L,
  },
  {name: 'Minsk'},
  {name: 'Music'},
  {name: 'NES'},
  {name: 'Novopolotsk'},
  {name: 'Opeth'},
  {name: 'Paiste'},
  {
    name: 'Phil Tsarik',
    size: ItemSize.XXL,
  },
  {name: 'phts'},
  {name: 'Pilip Tsaryk'},
  {
    name: 'Pink Floyd',
    size: ItemSize.L,
  },
  {name: 'Playing cards'},
  {name: 'Poland'},
  {name: 'PSU'},
  {
    category: ItemCategory.Meta,
    name: 'Random',
  },
  {
    name: 'React',
    size: ItemSize.L,
  },
  {name: 'Ritchie Blackmore'},
  {name: 'Riverside'},
  {name: 'Ruby'},
  {name: 'SaM Solutions'},
  {name: 'S\u030Ckoda'},
  {name: 'Skype'},
  {
    name: 'Software Developer',
    size: ItemSize.XL,
  },
  {name: 'Sound'},
  {name: 'Space Resonance'},
  {name: 'Space'},
  {name: 'Stack Overflow'},
  {name: 'Sublime Text'},
  {name: 'Tel number'},
  {name: 'The Gathering'},
  {name: 'The Netherlands'},
  {name: 'Travel'},
  {name: 'Typescript'},
  {name: 'Uber'},
  {name: 'Ultramarined'},
  {name: 'Vater 5A Los Angeles'},
  {name: 'Video games'},
  {name: 'Vk'},
  {name: 'Waterfox'},
  {name: 'ZX Spectrum'},
]