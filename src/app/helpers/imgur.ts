import {breakpoints} from './css'

const BASE_NAME = 'https://i.imgur.com/'


export function picture(id: string, alt: string) {
  const prefix = `${BASE_NAME}${id}`
  return `
    <picture>
      <source srcset="${prefix}t.jpg" media="(max-width: ${breakpoints.mobile}px)">
      <source srcset="${prefix}m.jpg" media="(max-width: ${breakpoints.smartphone}px)">
      <source srcset="${prefix}l.jpg" media="(max-width: ${breakpoints.tablet}px)">
      <img src="${prefix}h.jpg" alt=${alt}>
    </picture>
  `
}
