// commentary.js - Gestion des commentaires du match

import { gameFeed } from "./game.js";

const commentaryFeed = document.getElementById("commentary-feed");
const nextEventButton = document.getElementById("next-event-button");

        const matchEvents = [
            { time: "3'", description: "But de Suarez ! Le Barça ouvre le score.", type: "goal", team: "Barcelona" },
            { time: "15'", description: "Cavani rate une occasion en or pour le PSG.", type: "missed" },
            { time: "40'", description: "But contre son camp de Kurzawa ! Le Barça mène 2-0.", type: "goal", team: "Barcelona" },
            { time: "50'", description: "Penalty pour le Barça ! Neymar est fauché dans la surface.", type: "penalty" },
            { time: "50'", description: "Messi transforme le penalty ! 3-0 pour le Barça.", type: "goal", team: "Barcelona" },
            { time: "62'", description: "But de Cavani ! Le PSG réduit l'écart à 3-1.", type: "goal", team: "PSG" },
            { time: "65'", description: "Occasion manquée par Messi !", type: "missed" },
            { time: "75'", description: "Carton jaune pour Piqué suite à une faute sur Di Maria.", type: "card" },
            { time: "88'", description: "But de Neymar ! Superbe coup franc ! 4-1 pour le Barça.", type: "goal", team: "Barcelona" },
            { time: "90+1'", description: "Penalty pour le Barça après une faute sur Suarez !", type: "penalty" },
            { time: "90+1'", description: "Neymar transforme le penalty ! 5-1 pour le Barça.", type: "goal", team: "Barcelona" },
            { time: "90+5'", description: "BUT DE SERGI ROBERTO ! INCROYABLE ! 6-1 POUR LE BARÇA !", type: "goal", team: "Barcelona" },
            { time: "FIN", description: "C'est terminé ! Le Barça élimine le PSG avec un score cumulé de 6-5 !", type: "end" }
        ];

let currentEventIndex = 0;


function addCommentary() {
    if (currentEventIndex < matchEvents.length) {
        const event = matchEvents[currentEventIndex];
        // Ajouter la gestion du score
        if (event.type === "goal") {
            const matchEvent = {
                team: event.team,
                score: 1,
                description: event.description
            };
            handleMatchEvent(matchEvent);
        }
        // Ajouter le commentaire dans le flux principal des événements du jeu
        gameFeed.appendChild(eventElement);
        gameFeed.scrollTop = gameFeed.scrollHeight;
        
        currentEventIndex++;
    }
    }
}

// Lier le bouton "Action suivante" aux commentaires
nextEventButton.addEventListener("click", () => {
    console.log("Next event button clicked");
    addCommentary();
});

export { addCommentary };
