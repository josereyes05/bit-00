"use strict"

// const $btn = document.querySelector('button')
const $img = document.querySelector('img')

// $btn.addEventListener('click', imagen)

async function imagen(){
    try {
        let api = await fetch ('https://random-d.uk/api/v2/random')
        api = await api.json();
        $img.setAttribute('src', api.url)
    } catch (error) {
        alert('el error es:', error)
        console.log('el error es:', error)
    }
}
