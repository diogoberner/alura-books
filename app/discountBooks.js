export default async function discountedBooks(books) {
    const discount = 0.3
    const minStockForDiscount = 30

    return books.map((book) => {
        const hasDiscount = book.quantidade > minStockForDiscount

        return hasDiscount ?
            { ...book, preco: Number((book.preco * (1 - discount)).toFixed(2)) }
            : book

    }
    )
}