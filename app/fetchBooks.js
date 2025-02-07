export default async function fetchBooks(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Erro ao buscar o arquivo JSON!")
        }

        const data = await response.json()

        return data

    } catch (error) {
        console.error("Erro durante a requisição ou processamento: ", error)
        return []
    }
}