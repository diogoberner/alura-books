import showBooks from "./showBooks.js"
import fetchBooks from "./fetchBooks.js"
import filterBooks from "./filterBooks.js"
import avaliableBooks from "./avaliableBooks.js"

const url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const navButtons = document.querySelectorAll(".nav .btn")

const books = await fetchBooks(url)
let currentBooks = []

if (books) {
    currentBooks = books
    showBooks(currentBooks)
}

navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const bookType = e.target.value

        if (bookType === "livros-disponiveis") {
            currentBooks = avaliableBooks(books)
        } else if (bookType === "ordenarPorPreco") {
            currentBooks = [...currentBooks].sort((a, b) => b.preco - a.preco)
        }
        else {
            currentBooks = filterBooks(books, bookType)
        }

        showBooks(currentBooks)
    });
});
