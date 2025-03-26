// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
    cauvin: {
    'goal-barcelona': [
        {text: "NON ! PAS ENCORE EUX !", intensity: 20},
        {text: "On va revivre le cauchemar de 2017...", intensity: 40},
        {text: "Je sens que je vais vomir...", intensity: 90}
    ],
    'goal-psg': [
        {text: "OUIIIIII !!! C'EST PAS FINI !", intensity: 50},
        {text: "ALLEZ PARIS, ON NE LÂCHE RIEN !", intensity: 20},
        {text: "Cavani, je t’aime !", intensity: 80}
    ],
    'penalty-barcelona': [
        {text: "Mais c'est quoi cette blague ?!", intensity: 20},
        {text: "L’arbitre veut notre peau, c’est clair !", intensity: 60}
    ],
    'card': [
        {text: "Enfin une décision qui va dans notre sens...", intensity: 20},
        {text: "Il était temps !", intensity: 60}
    ],
    'missed-psg': [
        {text: "Mais c'est pas possible... Pourquoi moi ?", intensity: 20},
        {text: "Je vais faire une crise cardiaque...", intensity: 70}
    ],
    'embetercauvin': [
        {text: "Vous êtes tellement relou...", intensity: 20},
        {text: "Putain mais arrêtez !", intensity: 70}
    ],
    'humour': [
        {text: "Pfff, non mais je suis pas serein là ", intensity: 20},
        {text: "Mais c'est pas drôle, c'est pas possible !", intensity: 70}
    ]
    },
     jeanphi: {
    'goal-barcelona': [
        {text: "Oh, mais quel suspense insoutenable ! *rire*", intensity: 20},
        {text: "Paris va encore nous vendre du rêve, puis du cauchemar.", intensity: 50}
    ],
    'goal-psg': [
        {text: "Attendez... Paris qui marque en C1 ? J’ai mal aux yeux.", intensity: 20},
        {text: "Profitez, ça arrive pas souvent !", intensity: 80}
    ],
    'penalty-barcelona': [
        {text: "Oh non, encore un complot contre Paris ! *ironique*", intensity: 20},
        {text: "Vraiment pas de chance... comme d’habitude.", intensity: 20}
    ],
    'card': [
        {text: "Une injustice flagrante... ou pas.", intensity: 20},
        {text: "Encore une excuse à venir sur l’arbitrage ?", intensity: 20}
    ],
    'missed-psg': [
        {text: "Et voilà... Comme prévu !", intensity: 20},
        {text: "Paris et la LDC, c’est une histoire d’amour à sens unique.", intensity: 20}
    ],
    'panique': [
        {text: "Ah ca fait moins le malin que contre Dijon là !", intensity: 20},
        {text: "Cauvin en PLS respire !", intensity: 70}
    ]
     },
    etienne: {
    'goal-barcelona': [
        {text: "Encore une erreur de placement défensif, c'est frustrant.", intensity: 20},
        {text: "Le milieu ne suit pas, c'était prévisible...", intensity: 60},
        {text: "La transition défensive est catastrophique.", intensity: 90}
    ],
    'goal-psg': [
        {text: "Bonne construction, belle finition.", intensity: 20},
        {text: "Enfin une action bien exécutée !", intensity: 80}
    ],
    'penalty-barcelona': [
        {text: "Trop d'erreurs individuelles, c'est puni.", intensity: 20},
        {text: "Faut revoir les placements défensifs.", intensity: 90}
    ],
    'card': [
        {text: "Intervention maladroite, carton logique.", intensity: 20},
        {text: "L'équipe doit rester disciplinée.", intensity: 70}
    ],
    'missed-psg': [
        {text: "Manque de lucidité devant le but.", intensity: 20},
        {text: "Mauvais choix de frappe, dommage.", intensity: 70}
    ]
    },
    renaud: {
    'goal-barcelona': [
        {text: "Paris qui se fait punir, quel plaisir !", intensity: 20},
        {text: "Et un but dans la musette, un !", intensity: 60}
    ],
    'goal-psg': [
        {text: "Même moi je dois avouer que c'était beau...", intensity: 20},
        {text: "Bon, profitez-en, ça va pas durer.", intensity: 80}
    ],
    'penalty-barcelona': [
        {text: "La remontada, acte II !", intensity: 20},
        {text: "Paris va encore nous sortir les violons sur l’arbitrage...", intensity: 90}
    ],
    'card': [
        {text: "Ahah, Paris qui pleure sur une carte, classique.", intensity: 20},
        {text: "On en parle du nombre de fautes non sifflées pour l'OM ?", intensity: 60},
    ],
    'missed-psg': [
        {text: "Paris en Ligue des Champions, c’est du stand-up !", intensity: 20},
        {text: "Même Gignac à la retraite l’aurait mise !", intensity: 50},
    ]
    },
    dimitri: {
    'goal-barcelona': [
        {text: "Statistiquement, Paris encaisse toujours dans ce genre de matchs...", intensity: 20},
        {text: "XG de Barcelone en hausse, logique...", intensity: 80}
    ],
    'goal-psg': [
        {text: "Un but à 0.32 XG, belle efficacité !", intensity: 20},
        {text: "Paris a marqué avec seulement 2 tirs cadrés, pas mal.", intensity: 40}
    ],
    'penalty-barcelona': [
        {text: "Ça fait leur 5e penalty en 10 matchs de C1 cette saison.", intensity: 20},
        {text: "La probabilité de marquer ici est de 78%.", intensity: 80}
    ],
    'card': [
        {text: "Sur les 10 derniers matchs, Paris prend en moyenne 1.2 cartons.", intensity: 20},
        {text: "La discipline reste un problème...", intensity: 90}
    ],
    'missed-psg': [
        {text: "XG de cette action : 0.85... Il fallait le mettre !", intensity: 20},
        {text: "C’est le 3e gros raté de Paris dans ce match.", intensity: 90}
    ]
    },
    bastien: {
    'goal-barcelona': [
        {text: "Et voilà... encore un club français qui se fait marcher dessus.", intensity: 20},
        {text: "Ça devient une habitude, non ?", intensity: 26}
    ],
    'goal-psg': [
        {text: "Oh, ils ont marqué ? Ça change !", intensity: 20},
        {text: "C’est bien, mais ça suffira pas.", intensity: 50}
    ],
    'penalty-barcelona': [
        {text: "C’est ça, les clubs français en Europe : toujours dominés.", intensity: 20},
        {text: "Ils vont encore chouiner sur l’arbitrage au lieu de jouer.", intensity: 70},
    ],
    'card': [
        {text: "Classique, les clubs français ne savent pas défendre proprement.", intensity: 20},
        {text: "Toujours en retard dans les duels...", intensity: 80}
    ],
    'missed-psg': [
        {text: "Ah bah, la finition, ça fait 20 ans que c'est leur problème.", intensity: 20},
        {text: "On est nuls devant le but, comme toujours.", intensity: 90}
    ]
    },
    axel: {
    'goal-barcelona': [
        {text: "Ah bah ça commence ! Préparez les mouchoirs, les Parisiens !", intensity: 20},
        {text: "Paris en C1, c'est un running gag.", intensity: 40},
        {text: "On dirait un remake de 2017, j’adore.", intensity: 70}
    ],
    'goal-psg': [
        {text: "Oh, ils savent marquer ? Miracle !", intensity: 20},
        {text: "Bon, ça va pas durer, mais profitez...", intensity: 60},
    ],
    'penalty-barcelona': [
        {text: "Oh, un penalty ? Comme c'est surprenant ! *rire*", intensity: 20},
        {text: "Allez, mettez le couvercle sur ce match !", intensity: 80}
    ],
    'card': [
        {text: "C’est pas trop tôt !", intensity: 20},
        {text: "Une carte pour un club de Ligue 1 ? Rare, mais mérité.", intensity: 70},
    ],
    'missed-psg': [
        {text: "HAHAHA ! Même moi je l’aurais mise.", intensity: 20},
        {text: "Paris en LDC, c’est une comédie.", intensity: 90}
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

function addNPCReaction(triggerType, event, intensity) {
    const characters = Object.keys(characterReactions).filter(c => c !== selectedCharacter);
    if (characters.length === 0) return;
    
    characters.forEach(character => {
        const reactions = characterReactions[character][`option-${triggerType}`] || [];
        const filtered = reactions.filter(r => r.intensity <= intensity);
        
        if (filtered.length > 0) {
            const reaction = filtered[Math.floor(Math.random() * filtered.length)];
            addReaction(character, reaction.text);
        }
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
        const filteredReactions = reactionPool.filter(r => r.intensity <= intensity);

        if (filteredReactions.length > 0) {
            const randomReaction = filteredReactions[
                Math.floor(Math.random() * filteredReactions.length)
                ];
            addReaction(character, randomReaction.text);
        }
    });
}

// Exporter les fonctions pour utilisation dans d'autres fichiers
export { characterReactions, addReaction, addNPCReaction };
