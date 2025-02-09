export default function avaliableBooks(books) {
    return books.filter((book) => {
        return book.quantidade > 0
    })

}