import * as R from 'ramda'
import {KnownName} from './names'

export type ItemCategory = KnownName

export interface CategoryProps {
  category: ItemCategory
}

export type CategoryPropsMap = {[index in KnownName]: CategoryProps}

export const DEFAULT_CATEGORY_PROPS: CategoryProps = {
  category: 'About',
}

type CatigoryName = 'About' | 'Contacts' | 'Hobby' | 'Meta' | 'Work'

const CATEGORY_MAP: {[index in CatigoryName]: KnownName[]} = {
  About: [
    'Age',
    'Belarus',
    'Facebook',
    'Kraków',
    'LinkedIn',
    'Novopolotsk',
    'Phil Tsaryk',
    'Pilip Tsaryk',
    'Poland',
    'Revolut',
    'VK',
  ],
  Contacts: ['+375292181503', '+48534898187', 'Email', 'Skype', 'Telegram'],
  Hobby: [
    'bash.org',
    'Billiard',
    'Board games',
    'Cats',
    'Discogs',
    'Drums',
    'Electronics',
    'foobar2000',
    'Heroes of Might and Magic 3',
    'Hi-Fi',
    'Joy in Time',
    'Last.fm',
    'Music',
    'PHTS',
    'Playing cards',
    'Promo codes',
    'Ritchie Blackmore',
    'Škoda',
    'Space Resonance',
    'The Netherlands',
    'Tidal',
    'Traveling',
    'Ultramarined',
    'Video games',
    'Vinyl',
    'ZX Spectrum',
  ],
  Meta: [
    'About',
    'Ascending',
    'Categorize',
    'Colors',
    'Contacts',
    'EN',
    'Feedback',
    'Hobby',
    'Meta',
    'RU',
    'Random',
    'Title',
    'Work',
    '©',
  ],
  Work: [
    'BitBucket',
    'Curriculum vitae',
    'Debian',
    'Epam',
    'Firefox',
    'GitHub',
    'Grand Parade',
    'Habr',
    'JavaScript',
    'PSU',
    'React',
    'Ruby',
    'SaM Solutions',
    'Software Engineer',
    'Stack Overflow',
    'Sublime Text',
  ],
}

const calculatedCategoryProps: CategoryPropsMap = {} as unknown as CategoryPropsMap
R.forEachObjIndexed((its, cat) => {
  R.forEach((it) => {
    calculatedCategoryProps[it] = {category: cat}
  }, its)
}, CATEGORY_MAP)

export const categoryPropsMap = calculatedCategoryProps
