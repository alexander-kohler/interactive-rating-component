const front = document.querySelector('.front')
const thankYou = document.querySelector('.thank-you')
const submit = document.querySelector('.btn-submit')
const btn = document.querySelectorAll('.btn')
const selectedRating = document.getElementById('selected-rating')

let rating = 0

btn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        rating = Number(e.textContent)
        selectedRating.textContent = rating
    })
})


submit.addEventListener('click', (e)=>{
    front.classList.add('hidden')
    thankYou.classList.remove('hidden')
    console.log('click')
})

