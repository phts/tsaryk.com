function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomColorComponent() {
  return getRandomInt(0, 256)
}

function getRandomCssColor() {
  return `rgb(${getRandomColorComponent()}, \
              ${getRandomColorComponent()}, \
              ${getRandomColorComponent()})`
}

const interests = [
  {name: 'Anathema'},
  {name: 'Android'},
  {name: 'Angular'},
  {name: 'Belarus'},
  {name: 'BitBucket'},
  {name: 'Board games'},
  {name: 'Cats'},
  {name: 'Colors', id: 'btnColors'},
  {name: 'Chrome'},
  {name: 'Debian'},
  {name: 'Deep Purple'},
  {name: 'Drums'},
  {name: 'EN'},
  {name: 'Epam'},
  {name: 'Firefox'},
  {name: 'GitHub'},
  {name: 'Google'},
  {name: 'Grodno'},
  {name: 'Half Life'},
  {name: 'Heroes of Might and Magic 3'},
  {name: 'iOS'},
  {name: 'Java'},
  {name: 'JavaScript'},
  {name: 'Joy in Time'},
  {name: 'Krako&#769w'},
  {name: 'Last.fm'},
  {name: 'LinkedIn'},
  {name: 'Lunatic Soul'},
  {name: 'Minsk'},
  {name: 'Novopolotsk'},
  {name: 'Opeth'},
  {name: 'Paiste'},
  {name: 'Pink Floyd'},
  {name: 'Pixel Dungeon'},
  {name: 'Playing cards'},
  {name: 'Poland'},
  {name: 'PSU'},
  {name: 'React'},
  {name: 'Ritchie Blackmore'},
  {name: 'Riverside'},
  {name: 'RU'},
  {name: 'Ruby'},
  {name: 'SaM Solutions'},
  {name: 'Space Rangers'},
  {name: 'Space Resonance'},
  {name: 'Sublime Text'},
  {name: 'Syberia'},
  {name: 'The Netherlands'},
  {name: 'Ultramarined'},
  {name: 'Vater 5A Los Angeles'},
  {name: 'Video games'},
  {name: 'Waterfox'},
  {name: 'Windows'},
  {name: 'ZX Spectrum'},
]

const interestEls = interests.map(it => {
  const el = document.createElement('li')
  const button = document.createElement('button')
  if (it.id) {
    button.id = it.id
  }
  button.innerHTML = it.name
  el.appendChild(button)
  return el
})

const interestElsFragment = document.createDocumentFragment()
interestEls.forEach(el => {
  interestElsFragment.appendChild(el)
})
document.getElementById('list').appendChild(interestElsFragment)

document.getElementById('btnColors').addEventListener('click', function (ev) {
  document.body.style.backgroundColor = getRandomCssColor()
  document.body.style.color = getRandomCssColor()
})
