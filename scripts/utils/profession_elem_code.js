// get DOM element for profession
export  const text = document.querySelector('.profession-list-css')

export const professionList = [
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
export const textLoad = () => {

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