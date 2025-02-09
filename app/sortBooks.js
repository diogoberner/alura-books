export default function sortBooks(books, ascending) {
    return books.sort((a, b) => (ascending ? a.preco - b.preco : b.preco - a.preco));
}
