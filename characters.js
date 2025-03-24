// characters.js - Gestion des réactions des personnages

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

// Fonction pour gérer les réactions des autres personnages
function addNPCReaction() {
    let cauvinIndex = Math.min(barcaScore, characterReactions.cauvin.length - 1);

    Object.keys(characterReactions).forEach(character => {
        if (character !== selectedCharacter) {
            addReaction(character, characterReactions[character][cauvinIndex]);
        }
    });
}

// Exporter les fonctions pour utilisation dans d'autres fichiers
export { characterReactions, addReaction, addNPCReaction };
