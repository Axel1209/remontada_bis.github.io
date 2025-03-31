// commentary.js - Gestion des commentaires du match

import { gameFeed , handleMatchEvent } from "./game.js";
import { addNPCReaction } from "./characters.js";
import { displayActions } from "./options.js";
import { displayGoalAnimation } from "./animation.js";


const commentaryFeed = document.getElementById("commentary-feed");
const nextEventButton = document.getElementById("next-event-button");

        const matchEvents = [
    { time: "0'", description: "Et c'est parti pour ce huitième de finale retour pour valider la qualification pour les quarts pour le PSG !", type: "début", team: "Barcelona" },
    { time: "3'", description: "But de Suarez ! Le Barça ouvre le score.", type: "goal", team: "Barcelona" },
    { time: "8'", description: "Di Maria tente une frappe lointaine, mais elle passe largement au-dessus.", type: "missed", team: "PSG" },
    { time: "15'", description: "Cavani rate une occasion en or pour le PSG.", type: "missed", team: "PSG" },
    { time: "40'", description: "But contre son camp de Kurzawa ! Le Barça mène 2-0.", type: "goal", team: "Barcelona" },
    { time: "45+1'", description: "Dernière occasion avant la mi-temps, Cavani reçoit un centre mais sa tête est trop faible.", type: "missed", team: "PSG" },
    { time: "50'", description: "Penalty pour le Barça ! Neymar est fauché dans la surface.", type: "penalty", team: "Barcelona" },
    { time: "50'", description: "Messi transforme le penalty ! 3-0 pour le Barça.", type: "goal", team: "Barcelona" },
    { time: "55'", description: "Coup franc dangereux pour le PSG, mais la frappe de Di Maria est bien arrêtée par Ter Stegen.", type: "missed", team: "PSG" },
    { time: "62'", description: "But de Cavani ! Le PSG réduit l'écart à 3-1.", type: "goal", team: "PSG" },
    { time: "65'", description: "Occasion manquée par Di Maria!", type: "missed", team: "PSG" },
    { time: "70'", description: "Le PSG met la pression ! L'attaque de Paris est étouffée par une défense solide du Barça.", type: "missed", team: "PSG" },
    { time: "75'", description: "Carton jaune pour Piqué suite à une faute sur Di Maria.", type: "card" },
    { time: "88'", description: "But de Neymar ! Superbe coup franc ! 4-1 pour le Barça.", type: "goal", team: "Barcelona" },
    { time: "90+1'", description: "Penalty pour le Barça après une faute sur Suarez !", type: "penalty", team: "Barcelona" },
    { time: "90+1'", description: "Neymar transforme le penalty ! 5-1 pour le Barça.", type: "goal", team: "Barcelona" },
    { time: "90+3'", description: "Cavani obtient un corner pour le PSG, mais la défense catalane repousse facilement.", type: "missed", team: "PSG" },
    { time: "90+5'", description: "BUT DE SERGI ROBERTO ! INCROYABLE ! 6-1 POUR LE BARÇA !", type: "goal", team: "Barcelona" },
    { time: "FIN", description: "C'est terminé ! Le Barça élimine le PSG avec un score cumulé de 6-5 !", type: "end" }
        ];

let currentEventIndex = 0;


async function addCommentary() {
    if (currentEventIndex < matchEvents.length) {
        const event = matchEvents[currentEventIndex];
        const eventElement = document.createElement("div");
        const intensity = Math.round((currentEventIndex / matchEvents.length)*100);
        eventElement.className = "commentary";
        eventElement.textContent = `${event.time} - ${event.description}`;
        // Ajouter la gestion du score
        if (event.type === "goal") {
            handleMatchEvent ({
                team: event.team,
                score: 1,
                description: event.description
            });
        await displayGoalAnimation();
        }
        // Ajouter le commentaire dans le flux principal des événements du jeu
        gameFeed.appendChild(eventElement);
        gameFeed.scrollTop = gameFeed.scrollHeight;
        
        currentEventIndex++;

        // Ajouter des reactions a chaque commentaire
        addNPCReaction(event.type, event, intensity); // Ajouter cette ligne
        displayActions(event); // Ajoutez cette ligne
    }
}

// Lier le bouton "Action suivante" aux commentaires
nextEventButton.addEventListener("click", () => {
    console.log("Next event button clicked");
    addCommentary();
});

export { addCommentary, currentEventIndex, matchEvents };
