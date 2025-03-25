// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
    cauvin: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    jeanphi: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Cauvi' tu vas pleurer ce soir",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Ce sent la remontada",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    etienne: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    renaud: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    dimitri: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    bastien: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    },
    axel: {
        'goal-barcelona': [
            "NON ! C'EST PAS VRAI ! L'ARBITRE EST ACHETÉ !",
            "Je vais devenir chèvre...",
            "C'est la malédiction du Parc des Princes !"
        ],
        'goal-psg': [
            "OUIIII ! ON EST ENCORE VIVANTS !",
            "Cavani mon héros !"
        ],
        'penalty-barcelona': [
            "Penalty volé ! Scandaleux !",
            "L'arbitre sort d'où ? De Catalogne ?"
        ],
        'card': [
            "Enfin ! Une décision juste !",
            "Carton mérité !"
        ],
        'missed-psg': [
            "PUTAIN CAVANI ! T'ES PAYÉ COMBIEN ?",
            "Même ma grand-mère aurait marqué !"
        ]
    }
};

// Réactions génériques si aucun but n'est marqué
    const genericReactions = {
        jeanphi: ["Ça change rien, Cauvinflipette!", "T'as vu ça, il panique!"],
        etienne: ["Calme-toi, c'est qu'une action!", "Cauvin, respire un coup!"],
        renaud: ["Même mon chat serait plus calme.", "C'est pas ça qui va changer le match!"],
        dimitri: ["Ça change rien, Cauvinflipette!", "T'as vu ça, il panique!"],
        bastien: ["Calme-toi, c'est qu'une action!", "Cauvin, respire un coup!"],
        axel: ["Même mon chat serait plus calme.", "C'est pas ça qui va changer le match!"]
    };

// Fonction pour ajouter une réaction d'un personnage
function addReaction(character, text) {
    const reactionElement = document.createElement('div');
    reactionElement.className = `reaction ${character}`;
    reactionElement.innerHTML = `
        <span class="character-name">${character.toUpperCase()}:</span> 
        ${text}
    `;
    gameFeed.appendChild(reactionElement);
    gameFeed.scrollTop = gameFeed.scrollHeight;
}

function addNPCReaction(event) {
    const characters = Object.keys(characterReactions).filter(c => c !== selectedCharacter);
    const reactingCharacters = characters.sort(() => 0.5 - Math.random()).slice(0, 2);

    reactingCharacters.forEach(character => {
        const eventType = event.team ? 
            `${event.type}-${event.team.toLowerCase()}` : 
            event.type;
        
        const specificReactions = characterReactions[character]?.[eventType];
        const genericReactions = characterReactions[character]?.['generic'] || [];

        const reactionPool = specificReactions?.length > 0 ? 
            specificReactions : 
            genericReactions;

        if (reactionPool.length > 0) {
            const randomReaction = reactionPool[Math.floor(Math.random() * reactionPool.length)];
            addReaction(character, randomReaction);
        }
    });
}

// Exporter les fonctions pour utilisation dans d'autres fichiers
export { characterReactions, addReaction, addNPCReaction };
