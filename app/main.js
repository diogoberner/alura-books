async function fetchBooks() {
    try {
        const response = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json")

        if (!response.ok) {
            throw new Error("Erro ao buscar o arquivo JSON!")
        }

        const data = await response.json()

        return data

    } catch (error) {
        console.error("Erro durante a requisição ou processamento: ", error)
    }
}

const livros = document.getElementById("livros")

async function showBooks() {
    const books = await fetchBooks()

    if (books.length > 0) {
        books.forEach((book) => {
            const bookContainer = document.createElement("div")
            bookContainer.classList.add("livro")
            const bookImg = document.createElement("img")
            bookImg.src = book.imagem
            bookImg.alt = book.alt
            bookImg.classList.add("livro__imagens")
            const bookTitle = document.createElement("h2")
            bookTitle.classList.add("livro__titulo")
            bookTitle.textContent = book.titulo
            const bookDesc = document.createElement("p")
            bookDesc.classList.add("livro__descricao")
            bookDesc.textContent = book.autor
            const bookPrice = document.createElement("p")
            bookPrice.textContent = book.preco.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
            })
            bookPrice.classList.add("livro__preco")
            bookPrice.id = "preco"
            const bookTags = document.createElement("div")
            bookTags.classList.add("tags")
            const bookTag = document.createElement("span")
            bookTag.classList.add("tag")
            bookTag.textContent = book.categoria

            livros.appendChild(bookContainer)
            bookContainer.appendChild(bookImg)
            bookContainer.appendChild(bookTitle)
            bookContainer.appendChild(bookDesc)
            bookContainer.appendChild(bookPrice)
            bookTags.appendChild(bookTag)
            bookContainer.appendChild(bookTags)
        })
    }
}

showBooks()



