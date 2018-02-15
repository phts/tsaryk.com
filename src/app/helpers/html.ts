import {KnownName} from 'app/data/names'

export function p(str: string) {
  return `<p>${str}</p>`
}

export function a(href: string, text: string) {
  return `<a href="${href}">${text}</a>`
}

export function link(name: KnownName, text = name as string) {
  return a(`#/${name}`, text)
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
