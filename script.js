const data = [];

const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const outputElement = document.getElementById("output");

buttonElement.addEventListener("click", function() {
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        data.push(inputValue);
        inputElement.value = "";
        renderData();
    }
});

function renderData() {
    outputElement.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<p>${item}</p>`;
        outputElement.appendChild(card);
    });
}
