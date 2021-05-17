// create a copy of current navigation (for mobile devices) 

const menuLinks = document.querySelectorAll('.menu-link')

const adaptive = document.querySelector('.adaptive')
const adaptiveMenu = adaptive.querySelector('.adaptive-menu')

const links = []

menuLinks.forEach(link => {
  const href = link.getAttribute('href')
  const text = link.textContent

  links.push(`<li><a href="${href}">${text}</a></li>`)
})

adaptiveMenu.innerHTML = links.join(' ')

// hamburger handle

const hamburgerOpen = document.querySelector('[data-hamburger-menu-open]')
const hamburgerClose = document.querySelector('.adaptive .hamburger')

hamburgerOpen.addEventListener('click', () => {
  adaptive.classList.add('active')
  document.body.classList.add('no-scroll')
})

hamburgerClose.addEventListener('click', () => {
  adaptive.classList.remove('active')
  document.body.classList.remove('no-scroll')
})
