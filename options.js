// options.js - Gestion des actions disponibles
import { gameFeed, selectedCharacter } from "./game.js";
import { addNPCReaction } from "./characters.js";

const optionsContainer = document.getElementById("options-container");

const playerOptions = {
    cauvin: [
        { name: "Insulter l'arbitre", description: "Crier 'Arbitre vendu !'" },
        { name: "Se ronger les ongles", description: "Se ronger les ongles nerveusement" },
        { name: "Vérifier le score cumulé", description: "Calculer fébrilement le score global" }
    ],
    jeanphi: [
        { name: "Imitier Cauvin", description: "'Oh non, mon PSG !' en voix aiguë" },
        { name: "Chanter 'Remontada'", description: "Entonner une parodie de chant" },
        { name: "Offrir un shot", description: "Forcer Cauvin à boire un shot" }
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

function displayActions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    // Récupérer le personnage sélectionné
    const selectedCharacter = localStorage.getItem("selectedCharacter") || "cauvin";

    playerOptions[selectedCharacter].forEach(action => {
        const button = document.createElement("button");
        button.className = `option-button ${selectedCharacter}`; // Classe personnalisée
        button.textContent = action.name;

        button.addEventListener("click", () => {
            // Ajouter l'action au flux principal
            const actionElement = document.createElement("div");
            actionElement.className = `player-action ${selectedCharacter}`;
            actionElement.textContent = action.description;
            gameFeed.appendChild(actionElement);
            
            addNPCReaction(); // Déclencher les réactions
        });

        optionsContainer.appendChild(button);
    });
}

export { playerOptions, displayActions };
