function createSpinner(){
    const form = document.querySelector("#search-form");
    const resultsContainer = document.querySelector("#results-container");
    const resultsList = document.querySelector("#results-list");

    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.innerHTML = `
    <div class="spinner-border"></div>
    <p>Loading books...</p>
    `;
    spinner.style.display = "none";
    spinner.style.textAlign = "center";
    spinner.style.margin = "20px 0";

    resultsContainer.insertBefore(spinner, resultsList);
    return spinner;
}

// Function to toggle spinner visibility
export function toggleSpinner(show) {
    let spinner = document.querySelector(".spinner");
    if (!spinner) {
        createSpinner();
        spinner = document.querySelector(".spinner");
    }
  spinner.style.display = show ? "block" : "none";
}