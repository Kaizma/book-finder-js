import { searchBooks } from "./api.js";

const input = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultsList = document.querySelector("#results-list");
const form = document.querySelector("#search-form");

function clearResults() {
    resultsList.innerHTML = "";
}

function createCard(book){
    const card = document.createElement("div");
    card.className = "card";
    
    const title = document.createElement("h2");
    title.textContent = book.volumeInfo.title || "No title available";
    
    const author = document.createElement("p");
    author.textContent = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No authors available";
    
    const description = document.createElement("p");
    description.textContent = book.volumeInfo.description || "No description available";
    
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(description);
    
    return card;
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearResults();
    console.log("submit clicked");
    const query = input.value.trim();

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    try {
        const result = await searchBooks(query);

        const items = Array.isArray(result) ? result : result.items ?? [];
        clearResults();
        if (items.length) {
            const frag = document.createDocumentFragment();
            items.forEach(book => frag.appendChild(createCard(book)));
            resultsList.appendChild(frag);
            } else {
              resultsList.innerHTML = "<p>No results found.</p>";
            }
    } catch (error) {
        console.error("Error fetching books:", error);
        resultsList.innerHTML = "<p>Error fetching results. Please try again later.</p>";
    }
}
);

