// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
    cauvin: [
        "Tranquille, on a 4 buts d'avance. Impossible de perdre.",
        "Pas grave, c'est juste un but. On mène toujours 4-1 au cumulé.",
        "NON NON NON! C'est pas possible! L'arbitre est acheté!"
    ],
    jeanphi: [
        "Cauvin, tu vas pleurer ce soir!",
        "Ça sent la remontada!",
        "Historique! Cauvin est en PLS!"
    ],
    etienne: [
        "Le PSG va craquer, c'est sûr!",
        "Cauvin, t'es un peu pâle non?",
        "REMONTADAAAAAAA!"
    ],
    renaud: [
        "La remontada est en marche!",
        "Cauvin flipette!",
        "Cauvin, respire par le nez!"
    ],
    dimitri: [
        "Cauvin, tu vas pleurer ce soir!",
        "Ça sent la remontada!",
        "Historique! Cauvin est en PLS!"
    ],
    bastien: [
        "Cauvin, tu vas pleurer ce soir!",
        "Ça sent la remontada!",
        "Historique! Cauvin est en PLS!"
    ],
    axel: [
        "Cauvin, tu vas pleurer ce soir!",
        "Ça sent la remontada!",
        "Historique! Cauvin est en PLS!"
    ]
};

// Fonction pour ajouter une réaction d'un personnage
function addReaction(character, text) {
    const reactionElement = document.createElement('div');
    reactionElement.className = `reaction ${character}`;
    reactionElement.innerHTML = `<span class="character-name ${character}">${character}:</span> ${text}`;
    gameFeed.appendChild(reactionElement);
    gameFeed.scrollTop = gameFeed.scrollHeight;
}

function addNPCReaction() {
    // Réactions basées sur le score (existant)
    let currentBarcaScore = parseInt(document.getElementById("barca-score").textContent, 10);
    let cauvinIndex = Math.min(currentBarcaScore, characterReactions.cauvin.length - 1);

    // Réactions génériques si aucun but n'est marqué
    const genericReactions = {
        jeanphi: ["Ça change rien, Cauvinflipette!", "T'as vu ça, il panique!"],
        etienne: ["Calme-toi, c'est qu'une action!", "Cauvin, respire un coup!"],
        renaud: ["Même mon chat serait plus calme.", "C'est pas ça qui va changer le match!"],
        dimitri: ["Ça change rien, Cauvinflipette!", "T'as vu ça, il panique!"],
        bastien: ["Calme-toi, c'est qu'une action!", "Cauvin, respire un coup!"],
        axel: ["Même mon chat serait plus calme.", "C'est pas ça qui va changer le match!"]
    };

    Object.keys(characterReactions).forEach(character => {
        if (character !== selectedCharacter) {
            const reaction = Math.random() < 0.5 // 50% de chance d'avoir une réaction générique
                ? genericReactions[character][Math.floor(Math.random() * genericReactions[character].length)]
                : characterReactions[character][cauvinIndex];
            
            addReaction(character, reaction);
        }
    });
}

// Exporter les fonctions pour utilisation dans d'autres fichiers
export { characterReactions, addReaction, addNPCReaction };
