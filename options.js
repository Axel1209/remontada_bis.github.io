// options.js - Gestion des actions disponibles
import { gameFeed, selectedCharacter } from "./game.js";
import { addNPCReaction } from "./characters.js";
import { currentEventIndex, matchEvents } from "./commentary.js";
import { displayTopChefImage } from "./custom-effects.js";

let currentEvent;

const optionsContainer = document.getElementById("options-container");

const playerOptions = {
    cauvin: [
        { 
            name: "Insulter l'arbitre", 
            type: "enervement",
            description: "Crier 'Arbitre vendu !'",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Se ronger les ongles", 
            description: "Se ronger les ongles nerveusement",
            type: "panique",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
        { 
            name: "Vérifier le score cumulé", 
            description: "Calculer fébrilement le score global",
            type: "humour",
            condition: () => true // Toujours disponible
        },
         { 
            name: "Changer de chaine", 
            description: "J'en peux plus, je met Koh Lanta",
            type: "modifchaine",
            condition: () => true // Toujours disponible
        }
    ],
    jeanphi: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "humour",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Embêter Cauvin", 
            description: "Péter sur Cauvin",
            type: "embetercauvin",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
        { 
            name: "Vérifier le score cumulé", 
            description: "Compter le nombre de buts qu'il manque à Barcelone pour égaliser",
            type: "humour",
            condition: () => true // Toujours disponible
        }
    ],
    etienne: [
        { name: "Prédire un carton rouge", description: "'Luisito va prendre rouge !'" },
        { name: "Mimer un coup franc", description: "Imiter un geste technique de Neymar" },
        { name: "Crier 'C'est culotté !'", description: "Crier à chaque passe risquée" }
    ],
    renaud: [
        { name: "Montrer le 6-1", description: "Afficher le score sur ses doigts" },
        { name: "Faire le pouce en bas", description: "Gesticuler vers l'écran" },
        { name: "Demander un replay", description: "'Replay de l'humiliation !'" }
    ],
    dimitri: [
        { name: "Montrer le 6-1", description: "Afficher le score sur ses doigts" },
        { name: "Faire le pouce en bas", description: "Gesticuler vers l'écran" },
        { name: "Demander un replay", description: "'Replay de l'humiliation !'" }
    ],
    bastien: [
        { name: "Montrer le 6-1", description: "Afficher le score sur ses doigts" },
        { name: "Faire le pouce en bas", description: "Gesticuler vers l'écran" },
        { name: "Demander un replay", description: "'Replay de l'humiliation !'" }
    ],
    axel: [
        { name: "Montrer le 6-1", description: "Afficher le score sur ses doigts" },
        { name: "Faire le pouce en bas", description: "Gesticuler vers l'écran" },
        { name: "Demander un replay", description: "'Replay de l'humiliation !'" }
    ]
};

function displayActions(event) {
    currentEvent = event;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    // Récupérer le personnage sélectionné
    const selectedCharacter = localStorage.getItem("selectedCharacter") || "cauvin";

    playerOptions[selectedCharacter].forEach(action => {
        if (action.condition && !action.condition(event)) return;
        const button = document.createElement("button");
        button.className = `option-button ${selectedCharacter}`; // Classe personnalisée
        button.textContent = action.name;

        button.addEventListener("click", () => {
            // Ajouter l'action au flux principal
            const actionElement = document.createElement("div");
            actionElement.className = `player-action ${selectedCharacter}`;
            actionElement.textContent = action.description;
            gameFeed.appendChild(actionElement);

            const currentIntensity = Math.round((currentEventIndex / matchEvents.length) * 100);

            if (action.name === "Changer de chaine" && selectedCharacter === "cauvin") {
        displayTopChefImage(); // Appel externalisé
            }
            
   addNPCReaction(action.type, {type :action.type}, currentIntensity);
        });

        optionsContainer.appendChild(button);
    });
};

export { playerOptions, displayActions };
