import { characterReactions, addReaction, addNPCReaction } from "./characters.js";
import { displayActions } from "./options.js";

let selectedCharacter = localStorage.getItem("selectedCharacter") || "cauvin";
let gameFeed = document.getElementById("game-feed");
let nextEventButton = document.getElementById("next-event-button");
let barcaScore = 0;
let psgScore = 4; // Initial score from the previous match

function addEvent(description) {
    const eventElement = document.createElement("div");
    eventElement.className = "event";
    eventElement.textContent = description;
    gameFeed.appendChild(eventElement);
    gameFeed.scrollTop = gameFeed.scrollHeight;
}

function updateScores() {
    document.getElementById("psg-score").textContent = psgScore;
    document.getElementById("barca-score").textContent = barcaScore;
}

function handleMatchEvent(event) {
    if (event.team === 'Barcelone') {
        barcaScore += event.score;
    } else if (event.team === 'PSG') {
        psgScore += event.score;
    }
    updateScores();
    addEvent(event.description);
}

nextEventButton.addEventListener("click", () => {
    const matchEvent = {
        team: 'Barcelone',
        score: 1,
        description: `But du Barça ! Score actuel: PSG ${psgScore} - Barcelone ${barcaScore}`
    };
    handleMatchEvent(matchEvent);
    addNPCReaction();
});

// Display actions when the game starts
document.addEventListener("DOMContentLoaded", () => {
    updateScores();
    displayActions();
});

export { barcaScore, selectedCharacter, gameFeed, handleMatchEvent };
