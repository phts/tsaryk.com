declare module '*/playing-cards.png' {
  interface ResponsiveRecord {
    height: number
    images: Array<{height: number; path: string; width: number}>
    placeholder?: string
    src: string
    srcSet: string
    toString: () => string
    width: number
  }
  const rec: ResponsiveRecord
  export default rec
}

declare module '*.png' {
  const png: string
  export default png
}
