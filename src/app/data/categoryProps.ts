import * as R from 'ramda'
import {KnownName} from './names'

export type ItemCategory = KnownName | null

interface CategoryProps {
  category: ItemCategory
}

type CategoryPropsMap = {[index in KnownName]?: CategoryProps}

export const DEFAULT_CATEGORY_PROPS: CategoryProps = {
  category: null,
}

const CATEGORY_MAP: {[index in KnownName]?: KnownName[]} = {
  Contacts: [
    '+375292181503',
    '+48534898187',
    'Age',
    'Belarus',
    'Email',
    'Facebook',
    'Kraków',
    'LinkedIn',
    'Novopolotsk',
    'Phil Tsarik',
    'Pilip Tsaryk',
    'Poland',
    'Skype',
    'VK',
  ],
  Hobby: [
    'Android',
    'Billiard',
    'Board games',
    'Cats',
    'Drums',
    'Heroes of Might and Magic 3',
    'Joy in Time',
    'Last.fm',
    'Music',
    'Pink Floyd',
    'Playing cards',
    'Ritchie Blackmore',
    'Space Resonance',
    'Škoda',
    'The Netherlands',
    'Uber',
    'Ultramarined',
    'Video games',
    'ZX Spectrum',
    'bash.org',
    'foobar2000',
  ],
  Meta: [
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
    '© Phil Tsarik, 2018',
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

const calculatedCategoryProps: CategoryPropsMap = {}
R.forEachObjIndexed((its, cat) => {
  R.forEach(it => {
    calculatedCategoryProps[it] = {category: cat}
  }, its)
}, CATEGORY_MAP)

export const categoryPropsMap = calculatedCategoryProps
