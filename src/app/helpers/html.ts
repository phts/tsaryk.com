import {KnownName} from 'data/names'
import {style} from '../components/Phts'

function aTag(href: string, text: string, attrs: string[] = []) {
  const attributes = [`href="${href}"`, ...attrs].join(' ')
  return `<a ${attributes}>${text}</a>`
}

export function sprite(name: string, opts: {height: number; width: number; viewBox: string}) {
  return `<svg height="${opts.height}" width="${opts.width}" viewBox="${opts.viewBox}">\
<use xlink:href="#${name}"/></svg>`
}

export function p(str: string) {
  return `<p>${str}</p>`
}

export function a(href: string, text: string) {
  const sprt = sprite('external-link', {height: 12, width: 12, viewBox: '0 0 12 12'})
  const content = `${text}${sprt}`
  return `${aTag(href, content, ['target="_blank"'])}`
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

export function img(src: string, alt: string) {
  return `
    <img src="${src}" alt="${alt}">
  `
}

export function figure(imgEl: string, text: string) {
  return `
    <figure>
      ${imgEl}
      <figcaption>${text}</figcaption>
    </figure>
  `
}

export function figureWithImageMap(
  imgEl: string,
  text: string,
  mapItems: Array<{
    href: string
    title: string
    left: number
    top: number
    width: number
    height: number
  }>
) {
  return `
    <figure style="position:relative">
      ${imgEl}
      <figcaption>${text}</figcaption>
      ${mapItems
        .map(
          (it) => `<a href="${it.href}" title="${it.title}" target="_blank">
        <div style="position:absolute;height:${it.height}%;left:${it.left}%;top:${it.top}%;width:${it.width}%"></div></a>`
        )
        .join('')}
    </figure>
  `
}

export function youtube(id: string) {
  return `
    <iframe
      class="youtube"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/${id}?rel=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `
}

export function phts(model?: string) {
  return `<span style="${style}">PHTS</span>` + (model ? ` ${model}` : '')
}

export function abbr(text: string, title: string) {
  return `<abbr style="cursor: help" title="${title}">${text}</abbr>`
}
