import applyDiscounts from "./discountBooks.js";
import fetchBooks from "./fetchBooks.js";

const booksSection = document.getElementById("livros")

export default async function showBooks(url) {
    const books = await fetchBooks(url)

    // Método que eu testei, mas ficou muito verboso. Poderia fazer uma nova função para diminuir a repetição de código.
    // if (books.length > 0) {
    // books.forEach((book) => {
    //     const bookContainer = document.createElement("div")
    //     bookContainer.classList.add("livro")
    //     const bookImg = document.createElement("img")
    //     bookImg.src = book.imagem
    //     bookImg.alt = book.alt
    //     bookImg.classList.add("livro__imagens")
    //     const bookTitle = document.createElement("h2")
    //     bookTitle.classList.add("livro__titulo")
    //     bookTitle.textContent = book.titulo
    //     const bookDesc = document.createElement("p")
    //     bookDesc.classList.add("livro__descricao")
    //     bookDesc.textContent = book.autor
    //     const bookPrice = document.createElement("p")
    //     bookPrice.textContent = book.preco.toLocaleString('pt-br', {
    //         style: "currency",
    //         currency: "BRL"
    //     })
    //     bookPrice.classList.add("livro__preco")
    //     bookPrice.id = "preco"
    //     const bookTags = document.createElement("div")
    //     bookTags.classList.add("tags")
    //     const bookTag = document.createElement("span")
    //     bookTag.classList.add("tag")
    //     bookTag.textContent = book.categoria

    //     livros.appendChild(bookContainer)
    //     bookContainer.appendChild(bookImg)
    //     bookContainer.appendChild(bookTitle)
    //     bookContainer.appendChild(bookDesc)
    //     bookContainer.appendChild(bookPrice)
    //     bookTags.appendChild(bookTag)
    //     bookContainer.appendChild(bookTags)
    // })}


    // Solução mais enxuta usando template string
    let booksHTML = ""; // Definindo a variável para armazenar todos os livros

    if (!books || books.length === 0) {
        booksSection.innerHTML = "<p class='livros__vazio'>Nenhum livro encontrado.</p>";
        return;
    }

    const discountedBooks = await applyDiscounts(books)

    if (books.length > 0) {

        discountedBooks.forEach((book) => {
            booksHTML += `
            <div class="livro">
                <img src="${book.imagem}" alt="${book.alt}" class="livro__imagens">
                <h2 class="livro__titulo">${book.titulo}</h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">${book.preco.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `;
        });

        booksSection.innerHTML = booksHTML;
    }

}
