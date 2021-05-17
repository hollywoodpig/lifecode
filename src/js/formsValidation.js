import IMask from 'imask'

const phoneMask = phoneInput => IMask(phoneInput, {
  mask: '{8} (000) 000-00-00'
})

const validatePhoneMask = phoneMask => {
  const phoneLength = phoneMask.unmaskedValue.length

  if (phoneLength !== 11) {
    return false
  }

  return true
}

// feedback

const feedbackForm = document.querySelector('#feedback')

if (feedbackForm) {
  const feedbackPhoneInput = feedbackForm.querySelector('#feedback-tel')

  const feedbackPhoneMask = phoneMask(feedbackPhoneInput)
  
  feedbackForm.addEventListener('submit', e => {
    if (!validatePhoneMask(feedbackPhoneMask)) {
      e.preventDefault()
    }
  })
}

// work

const workForm = document.querySelector('#work')

if (workForm) {
  const workPhoneInput = workForm.querySelector('#work-tel')

  const workPhoneMask = phoneMask(workPhoneInput)
  
  workForm.addEventListener('submit', e => {
    if (!validatePhoneMask(workPhoneMask)) {
      e.preventDefault()
    }
  })
}
