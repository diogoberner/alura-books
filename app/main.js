import showBooks from "./showBooks.js"
const url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const navButtons = document.querySelectorAll(".nav .btn")
showBooks(url)

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const bookType = e.target.value
        console.log(e.target.value)
    })
})