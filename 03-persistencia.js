const form = document.querySelector("#user-form");
const message = document.querySelector("#message");
const savedDataElement = document.querySelector("#saved-data");

const nameInput = document.querySelector("#name");
const themeSelect = document.querySelector("#theme");

const clearButton = document.querySelector("#clear-button");


// =========================
// Aplicar tema
// =========================

function applyTheme(theme) {
    document.body.dataset.theme = theme;
}


// =========================
// Recuperar dados
// =========================

const savedData = localStorage.getItem("userPreferences");

if (savedData) {

    const userPreferences = JSON.parse(savedData);

    nameInput.value = userPreferences.name;
    themeSelect.value = userPreferences.theme;

    applyTheme(userPreferences.theme);

    savedDataElement.textContent =
        JSON.stringify(userPreferences, null, 2);
}


// =========================
// Guardar dados
// =========================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const userPreferences = {
        name: nameInput.value,
        theme: themeSelect.value
    };

    localStorage.setItem(
        "userPreferences",
        JSON.stringify(userPreferences)
    );

    applyTheme(userPreferences.theme);

    savedDataElement.textContent =
        JSON.stringify(userPreferences, null, 2);

    message.textContent =
        "Preferências guardadas!";
});


// =========================
// Limpar configurações
// =========================

clearButton.addEventListener("click", function () {

    localStorage.removeItem("userPreferences");

    nameInput.value = "";
    themeSelect.value = "light";

    applyTheme("light");

    savedDataElement.textContent =
        "Nenhum dado guardado.";

    message.textContent =
        "Configurações removidas.";
});