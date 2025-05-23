// options.js - Gestion des actions disponibles
import { gameFeed, selectedCharacter } from "./game.js";
import { addNPCReaction } from "./characters.js";
import { currentEventIndex, matchEvents } from "./commentary.js";
import { displayTopChefImage, displayphotocauvin, displayreplay, displayphotocauvinbarca } from "./animation.js";
import { TransferDockGame } from './transfer-dock.js';

let currentEvent;

const optionsContainer = document.getElementById("options-container");

const playerOptions = {
    cauvin: [
        { 
            name: "Insulter l'arbitre", 
            type: "ajout",
            description: "Arbitre vendu !",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Se ronger les ongles", 
            description: "Se ronger les ongles nerveusement",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
        { 
            name: "Vérifier le score cumulé", 
            description: "Ouch, le barca se rapproche, je suis pas confiant là",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
         { 
            name: "Changer de chaine", 
            description: "J'en peux plus, je met top chef",
            type: "modifchaine",
            condition: () => true // Toujours disponible
        }
    ],
    jeanphi: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
                { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
    ],
    etienne: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
                        { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
    ],
    renaud: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
                        { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
    ],
    dimitri: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
                        { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
    ],
    bastien: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
                        { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
    ],
    axel: [
        { 
            name: "Faire un commentaire sarcastique sur le match", 
            description: "Applaudir la maitrise du PSG",
            type : "ajout",
            condition: (event) => event?.type === 'penalty' && event.team === 'Barcelona'
        },
        { 
            name: "Proposer un replay à Cauvin", 
            description: "Tiens, regarde Cauvin, je crois que t'as pas bien vu",
            type: "ajout",
            condition: (event) => event?.type === 'missed' && event.team === 'PSG'
        },
       { 
            name: "Imposer un maillot du barca à Cauvin", 
            description: "Allez Cauvin, t'as pas le choix, enfile ca",
            type: "ajout",
            condition: () => true // Toujours disponible
        },
        { 
            name: "Prendre une photo de cauvin", 
            description: "Souris Cauvin, c'est pour les réseaux",
            type: "ajout",
            condition: () => true // Toujours disponible
        }
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
                const game = new TransferDockGame(
                    () => { 
                        console.log("TransferDockSucess: Scheduling TopChefimage.");
                        // Success
                setTimeout(() => {
                    displayTopChefImage();
                }, 1000);
                    },
                    () => { // Fail
                        console.log("TransferDock Fail: Displaying failure message");
                        const feed = document.getElementById('game-feed');
                        feed.insertAdjacentHTML('beforeend', '<div class="fail">Échec ! Vous n avez pas réussi à changer de chaine, vous devez donc continuer à regarder le match</div>');
                        game.destroy();
                    }
                );
                console.log("Starting TransferDockGame...");
                game.start();
            }

              if (action.name === "Prendre une photo de cauvin") {
               setTimeout(() => {
                    displayphotocauvin();
                }, 2000);
            }
               if (action.name === "Imposer un maillot du barca à Cauvin") {
               setTimeout(() => {
                    displayphotocauvinbarca();
                }, 2000);
            }

                  if (action.name === "Proposer un replay à Cauvin") {
                                     setTimeout(() => {
                    displayreplay();
                }, 2000);
            }
            
 // Ajouter une temporisation de 5 secondes avant d'afficher la réaction des NPC
                setTimeout(() => {
                    addNPCReaction(action.type, { type: action.type }, currentIntensity);
                }, 5000);
        });

        optionsContainer.appendChild(button);
    });
};

export { playerOptions, displayActions };
