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

document.getElementById('btnColors').addEventListener('click', function (ev) {
  document.body.style.backgroundColor = getRandomCssColor()
  document.body.style.color = getRandomCssColor()
})
