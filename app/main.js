import showBooks from "./showBooks.js"
import fetchBooks from "./fetchBooks.js"
import filterBooks from "./filterBooks.js"
import avaliableBooks from "./avaliableBooks.js"
import sortBooks from "./sortBooks.js"
import discountedBooks from "./discountBooks.js"

const url = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const navButtons = document.querySelectorAll(".nav .btn")

const books = await fetchBooks(url)
let currentBooks = []
let isAscending = true

if (books) {
    currentBooks = await discountedBooks(books)
    showBooks(currentBooks)
}

navButtons.forEach(button => {
    button.addEventListener("click", async (e) => {
        const bookType = e.target.value

        if (bookType === "livros-disponiveis") {
            currentBooks = avaliableBooks(books)
            currentBooks = await discountedBooks(currentBooks)
        } else if (bookType === "ordenarPorPreco") {
            currentBooks = sortBooks(currentBooks, isAscending)
            isAscending = !isAscending
            console.log(currentBooks)
        }
        else {
            currentBooks = filterBooks(books, bookType)
            currentBooks = await discountedBooks(currentBooks)
        }

        showBooks(currentBooks)
    });
});
