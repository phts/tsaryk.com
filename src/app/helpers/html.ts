import {KnownName} from 'app/data/names'

function aTag(href: string, text: string, attrs = '') {
  const attributes = ` href="${href}" ${attrs}`
  return `<a${attributes}>${text}</a>`
}

export function p(str: string) {
  return `<p>${str}</p>`
}

export function a(href: string, text: string) {
  return aTag(href, text, 'target="_blank"')
}

export function link(name: KnownName, text = name as string) {
  return aTag(`#/${name}`, text)
}

export function callto(href: string, text = href) {
  return a(`callto:${href}`, text)
}

export function mailto(href: string, text = href) {
  return a(`mailto:${href}`, text)
}

export function tel(href: string, text = href) {
  return a(`tel:${href}`, text)
}
