const trilho = document.querySelector('#trilho')
let body = document.querySelector('body')
trilho.addEventListener('click', e => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})