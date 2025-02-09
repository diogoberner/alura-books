export default function avaliableBooksTotalPrice(books, div) {

    const totalPrice = books.reduce((prev, cur) => prev + cur.preco, 0)
    div.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
        </div>
    `
}