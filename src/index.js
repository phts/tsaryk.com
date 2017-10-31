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
  {name: '8-bit'},
  {name: 'Anathema'},
  {name: 'Android'},
  {name: 'Angular'},
  {name: 'Belarus'},
  {name: 'BitBucket'},
  {name: 'Board games'},
  {name: 'Cats'},
  {name: 'Chrome'},
  {name: 'Colors', id: 'btnColors'},
  {name: 'Curriculum vitae'},
  {name: 'Debian'},
  {name: 'Deep Purple'},
  {name: 'Drums'},
  {name: 'Email'},
  {name: 'EN'},
  {name: 'Epam'},
  {name: 'Family'},
  {name: 'Firefox'},
  {name: 'foobar2000'},
  {name: 'GitHub'},
  {name: 'God Is An Astronaut'},
  {name: 'Google'},
  {name: 'Grodno'},
  {name: 'Half Life'},
  {name: 'Heroes of Might and Magic 3'},
  {name: 'iOS'},
  {name: 'Java'},
  {name: 'JavaScript'},
  {name: 'Joy in Time'},
  {name: 'Krako&#769w'},
  {name: 'Langaroo'},
  {name: 'Last.fm'},
  {name: 'LinkedIn'},
  {name: 'Lunatic Soul'},
  {name: 'Minsk'},
  {name: 'Music'},
  {name: 'NES'},
  {name: 'Novopolotsk'},
  {name: 'Opeth'},
  {name: 'Paiste'},
  {name: 'Phil Tsarik'},
  {name: 'phts'},
  {name: 'Pilip Tsaryk'},
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
  {name: 'S&#780;koda'},
  {name: 'SaM Solutions'},
  {name: 'Skype'},
  {name: 'Sound'},
  {name: 'Space Rangers'},
  {name: 'Space Resonance'},
  {name: 'Stack Overflow'},
  {name: 'Sublime Text'},
  {name: 'Syberia'},
  {name: 'The Gathering'},
  {name: 'The Netherlands'},
  {name: 'Ultramarined'},
  {name: 'Vater 5A Los Angeles'},
  {name: 'Video games'},
  {name: 'Waterfox'},
  {name: 'Windows'},
  {name: 'ZX Spectrum'},
]

const interestEls = interests.map(it => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  if (it.id) {
    button.id = it.id
  }
  li.style.flexBasis = `${getRandomInt(60, 500)}px`
  button.innerHTML = it.name
  li.appendChild(button)
  return li
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
