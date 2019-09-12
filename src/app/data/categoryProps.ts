import * as R from 'ramda'
import {KnownName} from './names'

export type ItemCategory = KnownName | null

export interface CategoryProps {
  category: ItemCategory
}

export type CategoryPropsMap = {[index in KnownName]: CategoryProps}

export const DEFAULT_CATEGORY_PROPS: CategoryProps = {
  category: null,
}

type CatigoryName = 'About' | 'Contacts' | 'Hobby' | 'Meta' | 'Work'

const CATEGORY_MAP: {[index in CatigoryName]: KnownName[]} = {
  About: [
    'Age',
    'Belarus',
    'Facebook',
    'Family',
    'Kraków',
    'LinkedIn',
    'Novopolotsk',
    'Phil Tsaryk',
    'Pilip Tsaryk',
    'Poland',
    'VK',
  ],
  Contacts: ['+375292181503', '+48534898187', 'Email', 'Skype', 'Telegram'],
  Hobby: [
    'Billiard',
    'Board games',
    'Cats',
    'Drums',
    'Heroes of Might and Magic 3',
    'Joy in Time',
    'Last.fm',
    'Music',
    'Playing cards',
    'Promo codes',
    'Ritchie Blackmore',
    'Space Resonance',
    'Škoda',
    'The Netherlands',
    'Traveling',
    'Ultramarined',
    'Video games',
    'Vinyl',
    'ZX Spectrum',
    'bash.org',
    'foobar2000',
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

const calculatedCategoryProps: CategoryPropsMap = ({} as unknown) as CategoryPropsMap
R.forEachObjIndexed((its, cat) => {
  R.forEach(it => {
    calculatedCategoryProps[it] = {category: cat}
  }, its)
}, CATEGORY_MAP)

export const categoryPropsMap = calculatedCategoryProps
