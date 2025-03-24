// options.js - Gestion des actions disponibles
import { gameFeed, selectedCharacter } from "./game.js";
import { addNPCReaction } from "./characters.js";

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
    optionsContainer.innerHTML = ""; // Vider les anciennes options

    playerOptions.forEach(action => {
        const button = document.createElement("button");
        button.className = "option-button"; // Ajout d'une classe pour le style
        button.textContent = action.name; // Affiche seulement le nom

        // Ajout d'un événement au clic
        button.addEventListener("click", () => {
            console.log(`Option sélectionnée : ${action.name}`);
            // Ici, tu peux ajouter la logique pour gérer le choix du joueur
        });

        optionsContainer.appendChild(button);
    });
}

button.addEventListener("click", () => {
    console.log(`Option sélectionnée : ${action.name}`);

    // Ajouter l'action du joueur au flux
    const actionElement = document.createElement("div");
    actionElement.className = "player-action"; // Classe CSS dédiée
    actionElement.textContent = `${selectedCharacter} ${action.description.toLowerCase()}`;
    gameFeed.appendChild(actionElement);
    gameFeed.scrollTop = gameFeed.scrollHeight;

    // Déclencher une réaction des PNJ
    addNPCReaction();
});

export { playerOptions, displayActions };
