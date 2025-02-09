import showBooks from "./showBooks.js"
import fetchBooks from "./fetchBooks.js"
import filterBooks from "./filterBooks.js"
import avaliableBooks from "./avaliableBooks.js"
import sortBooks from "./sortBooks.js"
import discountedBooks from "./discountBooks.js"
import avaliableBooksTotalPrice from "./avaliableBooksTotalPrice.js"

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
        const avaliableBooksDiv = document.getElementById("valor_total_livros_disponiveis")


        if (bookType === "livros-disponiveis") {
            currentBooks = avaliableBooks(books)
            currentBooks = await discountedBooks(currentBooks)
            avaliableBooksTotalPrice(currentBooks, avaliableBooksDiv)
        } else if (bookType === "ordenarPorPreco") {
            currentBooks = sortBooks(currentBooks, isAscending)
            isAscending = !isAscending
        }
        else {
            avaliableBooksDiv.innerHTML = ""
            currentBooks = filterBooks(books, bookType)
            currentBooks = await discountedBooks(currentBooks)
        }

        showBooks(currentBooks)
    });
});
