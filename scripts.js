const thankYouState = document.getElementById('thank-you')
const ratingState = document.getElementById('rating')
const submitBtn = document.getElementById('submit')
const ratingOptions = document.getElementById('rating-options')
const ratingSelection = document.getElementById('rating-selection')

document.addEventListener('DOMContentLoaded', () => {

  let selection

  ratingOptions.addEventListener('click', (e) => {
    const ratingBtn = e.target
    selection = e.target.id
    ratingOptions.childNodes.forEach((child, index) => {
      if (index % 2) {
        if (child.firstChild !== ratingBtn) {
          child.firstChild.classList.remove('selected')
        }
      }
      ratingBtn.classList.add('selected')
    })  
    return selection
  })

  submitBtn.addEventListener('click', (e) => {
    ratingState.style.display = 'none'
    thankYouState.style.display = 'block'
    ratingSelection.innerText = `${selection}`
  })

})




