declare module '*.png' {
  const png: string
  export default png
}

declare module 'static/img/*.svg' {
  const svg: React.ComponentType<React.HTMLAttributes<SVGElement>>
  export default svg
}
