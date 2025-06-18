export function createCard(book){
    const card = document.createElement("div");
    card.className = "card";
    
    const title = document.createElement("h2");
    title.textContent = book.volumeInfo.title || "No title available";
    
    const author = document.createElement("p");
    author.textContent = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No authors available";

    const thumbnail = document.createElement("img");
    if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
        thumbnail.src = book.volumeInfo.imageLinks.thumbnail;
        thumbnail.alt = `Cover image of ${book.volumeInfo.title}`;
        card.appendChild(thumbnail);
    } else {
        const noImage = document.createElement("p");
        noImage.textContent = "No image available";
        card.appendChild(noImage);
    }
    
    const description = document.createElement("p");
    description.textContent = book.volumeInfo.description || "No description available";
    
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(thumbnail);
    card.appendChild(description);
    
    return card;
}