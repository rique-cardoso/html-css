window.addEventListener('scroll', e => {
  let header = document.querySelector('#header')
  header.classList.toggle('active', window.scrollY > 0)
})