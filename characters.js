// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
    cauvin: {
    'goal-barcelona': [
        "NON ! PAS ENCORE EUX !",
        "On va revivre le cauchemar de 2017...",
        "Je sens que je vais vomir..."
    ],
    'goal-psg': [
        "OUIIIIII !!! C'EST PAS FINI !",
        "ALLEZ PARIS, ON NE LÂCHE RIEN !",
        "Cavani, je t’aime !"
    ],
    'penalty-barcelona': [
        "Mais c'est quoi cette blague ?!",
        "L’arbitre veut notre peau, c’est clair !"
    ],
    'card': [
        "Enfin une décision qui va dans notre sens...",
        "Il était temps !"
    ],
    'missed-psg': [
        "Mais c'est pas possible... Pourquoi moi ?",
        "Je vais faire une crise cardiaque..."
    ]
    },
     jeanphi: {
    'goal-barcelona': [
        "Oh, mais quel suspense insoutenable ! *rire*",
        "Paris va encore nous vendre du rêve, puis du cauchemar."
    ],
    'goal-psg': [
        "Attendez... Paris qui marque en C1 ? J’ai mal aux yeux.",
        "Profitez, ça arrive pas souvent !"
    ],
    'penalty-barcelona': [
        "Oh non, encore un complot contre Paris ! *ironique*",
        "Vraiment pas de chance... comme d’habitude."
    ],
    'card': [
        "Une injustice flagrante... ou pas.",
        "Encore une excuse à venir sur l’arbitrage ?"
    ],
    'missed-psg': [
        "Et voilà... Comme prévu !",
        "Paris et la LDC, c’est une histoire d’amour à sens unique."
    ]
     },
    etienne: {
    'goal-barcelona': [
        "Encore une erreur de placement défensif, c'est frustrant.",
        "Le milieu ne suit pas, c'était prévisible...",
        "La transition défensive est catastrophique."
    ],
    'goal-psg': [
        "Bonne construction, belle finition.",
        "Enfin une action bien exécutée !"
    ],
    'penalty-barcelona': [
        "Trop d'erreurs individuelles, c'est puni.",
        "Faut revoir les placements défensifs."
    ],
    'card': [
        "Intervention maladroite, carton logique.",
        "L'équipe doit rester disciplinée."
    ],
    'missed-psg': [
        "Manque de lucidité devant le but.",
        "Mauvais choix de frappe, dommage."
    ]
    },
    renaud: {
    'goal-barcelona': [
        "Paris qui se fait punir, quel plaisir !",
        "Et un but dans la musette, un !"
    ],
    'goal-psg': [
        "Même moi je dois avouer que c'était beau...",
        "Bon, profitez-en, ça va pas durer."
    ],
    'penalty-barcelona': [
        "La remontada, acte II !",
        "Paris va encore nous sortir les violons sur l’arbitrage..."
    ],
    'card': [
        "Ahah, Paris qui pleure sur une carte, classique.",
        "On en parle du nombre de fautes non sifflées pour l'OM ?"
    ],
    'missed-psg': [
        "Paris en Ligue des Champions, c’est du stand-up !",
        "Même Gignac à la retraite l’aurait mise !"
    ]
    },
    dimitri: {
    'goal-barcelona': [
        "Statistiquement, Paris encaisse toujours dans ce genre de matchs...",
        "XG de Barcelone en hausse, logique..."
    ],
    'goal-psg': [
        "Un but à 0.32 XG, belle efficacité !",
        "Paris a marqué avec seulement 2 tirs cadrés, pas mal."
    ],
    'penalty-barcelona': [
        "Ça fait leur 5e penalty en 10 matchs de C1 cette saison.",
        "La probabilité de marquer ici est de 78%."
    ],
    'card': [
        "Sur les 10 derniers matchs, Paris prend en moyenne 1.2 cartons.",
        "La discipline reste un problème..."
    ],
    'missed-psg': [
        "XG de cette action : 0.85... Il fallait le mettre !",
        "C’est le 3e gros raté de Paris dans ce match."
    ]
    },
    bastien: {
    'goal-barcelona': [
        "Et voilà... encore un club français qui se fait marcher dessus.",
        "Ça devient une habitude, non ?"
    ],
    'goal-psg': [
        "Oh, ils ont marqué ? Ça change !",
        "C’est bien, mais ça suffira pas."
    ],
    'penalty-barcelona': [
        "C’est ça, les clubs français en Europe : toujours dominés.",
        "Ils vont encore chouiner sur l’arbitrage au lieu de jouer."
    ],
    'card': [
        "Classique, les clubs français ne savent pas défendre proprement.",
        "Toujours en retard dans les duels..."
    ],
    'missed-psg': [
        "Ah bah, la finition, ça fait 20 ans que c'est leur problème.",
        "On est nuls devant le but, comme toujours."
    ]
    },
    axel: {
    'goal-barcelona': [
        "Ah bah ça commence ! Préparez les mouchoirs, les Parisiens !",
        "Paris en C1, c'est un running gag.",
        "On dirait un remake de 2017, j’adore."
    ],
    'goal-psg': [
        "Oh, ils savent marquer ? Miracle !",
        "Bon, ça va pas durer, mais profitez..."
    ],
    'penalty-barcelona': [
        "Oh, un penalty ? Comme c'est surprenant ! *rire*",
        "Allez, mettez le couvercle sur ce match !"
    ],
    'card': [
        "C’est pas trop tôt !",
        "Une carte pour un club de Ligue 1 ? Rare, mais mérité."
    ],
    'missed-psg': [
        "HAHAHA ! Même moi je l’aurais mise.",
        "Paris en LDC, c’est une comédie."
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
