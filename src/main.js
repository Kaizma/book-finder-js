import { searchBooks } from "./api.js";
import { toggleSpinner } from "./spinner.js";
const input = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultsList = document.querySelector("#results-list");
const form = document.querySelector("#search-form");
import { createCard } from "./cards.js";

function clearResults() {
    resultsList.innerHTML = "";
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
        toggleSpinner(true);
        const result = await searchBooks(query);
        toggleSpinner(false);
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

