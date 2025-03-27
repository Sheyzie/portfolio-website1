// import all from matrix_raining_code.js
import './utils/matrix_raining_code.js'

// get DOM element for profession
const text = document.querySelector('.profession-list-css')

const professionList = [
  {
    skill: 'Web Developer',
    width: '65%',
    duration: 0
  },
  {
    skill: 'Software Engineer',
    width: '85%',
    duration: 5000
  }
]
const textLoad = () => {

  professionList.forEach(profession => {
    setTimeout(() => {
      text.textContent = profession.skill
      text.dataset.size = profession.width
    },  profession.duration)
  })

  // requestAnimationFrame(textLoad)
}

textLoad()
setInterval(textLoad, 10000)