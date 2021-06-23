import Swiper, { Pagination } from 'swiper'

Swiper.use(Pagination)

const swiper = new Swiper('.swiper-container', {
  autoHeight: true,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}"></span>`
    }
  }
})
