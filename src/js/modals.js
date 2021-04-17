const attrName = 'data-modal-open-id'

const buttons = document.querySelectorAll(`[${attrName}]`)

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()

    const modalId = button.getAttribute(attrName)
    const modal = document.getElementById(modalId)
    const modalClose = modal.querySelector('.hamburger')

    const removeListeners = item => {
      item.replaceWith(item.cloneNode(true))
    }

    const toggleModal = () => {
      modal.classList.toggle('active')
      document.body.classList.toggle('no-scroll')
    }
    
    toggleModal()

    modalClose.addEventListener('click', e => {
      e.preventDefault()

      toggleModal()
      removeListeners(modalClose)
    })
  })
})
