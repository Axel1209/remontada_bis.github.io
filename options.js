// options.js - Gestion des actions disponibles

const optionsContainer = document.getElementById("options-container");

const playerOptions = [
    "Encourager son équipe",
    "Crier sur l'arbitre",
    "Changer de chaîne",
    "Prendre une boisson",
    "Se moquer de l'adversaire"
];

function displayOptions() {
    optionsContainer.innerHTML = "";
    playerOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-button";
        button.addEventListener("click", () => handleOptionClick(option));
        optionsContainer.appendChild(button);
    });
}

function handleOptionClick(option) {
    addReaction("joueur", `Vous avez choisi: ${option}`);
    addNPCReaction();
}

export { displayOptions };
