// options.js - Gestion des actions disponibles

const optionsContainer = document.getElementById("options-container");

const playerOptions = [
    { name: "Encourager son équipe", description: "Encourager son équipe" },
    { name: "Crier sur l'arbitre", description: "Crier sur l'arbitre" },
    { name: "Changer de chaîne", description: "Changer de chaîne" },
    { name: "Prendre une boisson", description: "Prendre une boisson" },
    { name: "Se moquer de l'adversaire", description: "Se moquer de l'adversaire" }
];


function displayActions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous actions

    playerOptions.forEach(action => {
        const actionElement = document.createElement("div");
        actionElement.className = "action";
        actionElement.innerHTML = `<h3>${action.name}</h3><p>${action.description}</p>`;
        optionsContainer.appendChild(actionElement);
    });
}

export { playerOptions, displayActions };
