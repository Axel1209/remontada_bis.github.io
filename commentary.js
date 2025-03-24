// commentary.js - Gestion des commentaires du match

const commentaryFeed = document.getElementById("commentary-feed");

const matchEvents = [
    "Début du match ! Le PSG mène 4-0 au cumulé.",
    "But de Suarez ! Le Barça ouvre le score.",
    "Carton jaune pour Piqué ! Faute sur Di Maria.",
    "But de Neymar sur coup franc ! 4-1.",
    "Penalty pour le Barça ! Neymar va tirer... et marque ! 5-1.",
    "BUT DE SERGI ROBERTO ! INCROYABLE ! 6-1 POUR LE BARÇA !",
    "Fin du match ! Le Barça élimine le PSG avec un score cumulé de 6-5 !"
];

let currentEventIndex = 0;

function addCommentary() {
    if (currentEventIndex < matchEvents.length) {
        const eventElement = document.createElement("div");
        eventElement.className = "commentary";
        eventElement.textContent = matchEvents[currentEventIndex];
        commentaryFeed.appendChild(eventElement);
        commentaryFeed.scrollTop = commentaryFeed.scrollHeight;
        currentEventIndex++;
    }
}

export { addCommentary };
