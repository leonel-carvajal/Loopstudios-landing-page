const option = document.getElementById('option')
const menu = document.getElementById('menu')
const closeX = document.getElementById('close')

menu.addEventListener('click', () => {
  option.classList.add('show')
})

closeX.addEventListener('click', () => {
  option.classList.remove('show')
})