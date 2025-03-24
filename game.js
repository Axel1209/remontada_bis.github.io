import { characterReactions, addReaction, addNPCReaction } from "./characters.js";

let selectedCharacter = "cauvin";
let gameFeed = document.getElementById("game-feed");
let nextEventButton = document.getElementById("next-event-button");
let barcaScore = 0;

// Fonction pour ajouter un événement au jeu
function addEvent(description) {
    const eventElement = document.createElement("div");
    eventElement.className = "event";
    eventElement.textContent = description;
    gameFeed.appendChild(eventElement);
    gameFeed.scrollTop = gameFeed.scrollHeight;
}

// Mise à jour du score
function updateScores() {
    document.getElementById("psg-score").textContent = psgScore;
    document.getElementById("barca-score").textContent = barcaScore;
}

// Gestion du clic sur le bouton "Action suivante"
nextEventButton.addEventListener("click", () => {
    barcaScore++;
    addEvent(`But du Barça ! Score actuel: ${barcaScore}`);
    addNPCReaction();
});

export { barcaScore, selectedCharacter, gameFeed };
