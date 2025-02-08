import showBooks from "./showBooks.js"
import fetchBooks from "./fetchBooks.js"
import filterBooks from "./filterBooks.js"
const url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const navButtons = document.querySelectorAll(".nav .btn")

const books = await fetchBooks(url)

if (books) {
    showBooks(books)
}

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const bookType = e.target.value
        if (bookType === "livros-disponiveis") {

        } else if (bookType === "ordenar") {

        } else {
            const filtered = filterBooks(books, bookType);
            showBooks(filtered);
        }


    })
})