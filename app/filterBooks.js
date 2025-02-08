import showBooks from "./showBooks.js"

export default function filterBooks(books, bookType) {
    const filteredBooks = books.filter((book) => {
        if (bookType == book.categoria) {
            return book
        }
    })
    showBooks(filteredBooks)
}