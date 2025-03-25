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
    if (characters.length === 0) return;

    // Détermine le type d'événement et son équipe associée
    const eventType = event.team ? 
        `${event.type}-${event.team.toLowerCase()}` : 
        event.type;

    // Configuration des réactions par type d'événement
    const reactionConfig = {
        'goal': { baseReactions: 4, variance: 2 },  // 4 ±2 → 2-6
        'foul': { baseReactions: 2, variance: 1 },  // 2 ±1 → 1-3
        'card-yellow': { baseReactions: 3, variance: 1 },
        'default': { baseReactions: 3, variance: 2 }
    };

    // Récupère la configuration appropriée
    const config = reactionConfig[event.type] || reactionConfig.default;
    
    // Calcule le nombre de réactions en fonction de la configuration
    let reactionCount = Math.min(
        Math.max(
            config.baseReactions + Math.floor(Math.random() * (config.variance * 2 + 1)) - config.variance,
            1
        ),
        6
    );

    // Ajuste au nombre de personnages disponibles
    reactionCount = Math.min(reactionCount, characters.length);
    reactionCount = Math.max(reactionCount, 1);

    // Sélection aléatoire des personnages
    const reactingCharacters = characters
        .sort(() => 0.5 - Math.random())
        .slice(0, reactionCount);

    // Ajout des réactions
    reactingCharacters.forEach(character => {
        const specificReactions = characterReactions[character]?.[eventType];
        const genericReactions = characterReactions[character]?.['generic'] || [];
        const reactionPool = specificReactions?.length > 0 ? specificReactions : genericReactions;

        if (reactionPool.length > 0) {
            const randomReaction = reactionPool[Math.floor(Math.random() * reactionPool.length)];
            addReaction(character, randomReaction);
        }
    });
}

// Exporter les fonctions pour utilisation dans d'autres fichiers
export { characterReactions, addReaction, addNPCReaction };
