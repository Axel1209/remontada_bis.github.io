// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
cauvin: {
    'goal-barcelona': [
        {text: "NON ! PAS ENCORE EUX !", intensity: 20},
        {text: "On va revivre le cauchemar de 2017...", intensity: 40},
        {text: "Je sens que je vais vomir...", intensity: 90},
        {text: "Bon, c’est juste un but… Juste un but…", intensity: 30},
        {text: "On va pas commencer à trembler, hein ?", intensity: 50},
        {text: "Non mais sérieux, c'est un cauchemar qui recommence !", intensity: 70},
        {text: "Je veux juste rentrer chez moi...", intensity: 80},
        {text: "Mais c’est un script FIFA ou quoi ?!", intensity: 85},
        {text: "Je ne supporte plus de voir ce maillot blaugrana.", intensity: 95},
        {text: "STOP ! QUELQU'UN COUPE LE SIGNAL TV !", intensity: 100}
    ],
    'goal-psg': [
        {text: "OUIIIIII !!! C'EST PAS FINI !", intensity: 50},
        {text: "ALLEZ PARIS, ON NE LÂCHE RIEN !", intensity: 20},
        {text: "Cavani, je t’aime !", intensity: 80},
        {text: "VOUS Y AVEZ CRU, BANDE DE HAINEUX !", intensity: 60},
        {text: "Allez, encore un et c’est fini pour eux !", intensity: 70},
        {text: "C’est bon, on respire, on est qualifiés !", intensity: 30},
        {text: "FINISSONS LE TRAVAIL, PAS DE RELÂCHEMENT !", intensity: 40},
        {text: "C’est la délivrance !", intensity: 75},
        {text: "Vous êtes où les rageux, là ?", intensity: 85},
        {text: "ON LEUR MARQUE UN CINQUIÈME ET ON RENTRE À LA MAISON !", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "Mais c'est quoi cette blague ?!", intensity: 20},
        {text: "L’arbitre veut notre peau, c’est clair !", intensity: 60},
        {text: "Non mais il y a VAR ou quoi ?!", intensity: 30},
        {text: "Le football est truqué, c’est officiel.", intensity: 40},
        {text: "J’en peux plus, je vais éteindre la télé…", intensity: 80},
        {text: "Si Messi tire, c’est but, on est foutus.", intensity: 90},
        {text: "Quelqu'un peut appeler l’UEFA ?!", intensity: 70},
        {text: "Bon bah c’est comme en 2017…", intensity: 85},
        {text: "Si ça rentre, je jette mon maillot.", intensity: 95},
        {text: "L’arbitre est un vendu, j’en suis sûr !", intensity: 100}
    ],
    'card': [
        {text: "Enfin une décision qui va dans notre sens...", intensity: 20},
        {text: "Il était temps !", intensity: 60},
        {text: "Allez, ça c’est bon pour nous !", intensity: 30},
        {text: "Justice est faite !", intensity: 40},
        {text: "Bon, au moins un arbitre qui ouvre les yeux.", intensity: 50},
        {text: "Là, c’est carton, là c’est carton direct !", intensity: 65},
        {text: "Je vais pleurer de joie.", intensity: 70},
        {text: "Allez hop, dehors !", intensity: 80},
        {text: "Maintenant, on doit tuer le match !", intensity: 85},
        {text: "S’il y a un rouge, on peut souffler un peu…", intensity: 90}
    ],
    'missed-psg': [
        {text: "Mais c'est pas possible... Pourquoi moi ?", intensity: 20},
        {text: "Je vais faire une crise cardiaque...", intensity: 70},
        {text: "Non, non, non, NON !", intensity: 40},
        {text: "Si on perd à cause de ça…", intensity: 50},
        {text: "Mais tire fort, BORDEL !", intensity: 60},
        {text: "C’est bon, c’est mort, on va le regretter.", intensity: 80},
        {text: "Il y avait la place !", intensity: 85},
        {text: "C’EST UN SCANDALE, ON DOIT MARQUER CES OCCASIONS !", intensity: 90},
        {text: "Je vais m’exiler dans un monastère si on se fait remonter.", intensity: 95},
        {text: "C’EST FINI. C’EST FINI.", intensity: 100}
    ],
    'embetercauvin': [
        {text: "Vous êtes tellement relous...", intensity: 20},
        {text: "Putain mais arrêtez !", intensity: 70},
        {text: "C’est pas drôle, sérieux !", intensity: 30},
        {text: "Vous attendez que ça, hein ?", intensity: 40},
        {text: "Vous êtes insupportables, je vous jure.", intensity: 50},
        {text: "Allez tous vous faire voir.", intensity: 60},
        {text: "Vous avez rien d’autre à faire ?", intensity: 80},
        {text: "Je vais vous muter, c’est bon.", intensity: 90},
        {text: "Je quitte ce groupe, je vous déteste.", intensity: 95},
        {text: "Laissez-moi en paix, je suis en deuil.", intensity: 100}
    ],
    'humour': [
        {text: "Pfff, non mais je suis pas serein là.", intensity: 20},
        {text: "Mais c'est pas drôle, c'est pas possible !", intensity: 70},
        {text: "Vous avez une caméra cachée, c’est ça ?", intensity: 30},
        {text: "La vie d’un supporter parisien, c’est que de la souffrance.", intensity: 40},
        {text: "On a tous nos traumatismes, moi c’est Barcelone.", intensity: 50},
        {text: "Le PSG, c’est une relation toxique.", intensity: 60},
        {text: "Je crois que je vais postuler pour être moine au Tibet.", intensity: 80},
        {text: "En vrai, je devrais juste supporter Guingamp, moins de stress.", intensity: 85},
        {text: "Un jour, on gagnera la LDC… Un jour.", intensity: 90},
        {text: "J’ai vu des feuilletons brésiliens avec moins de drame.", intensity: 100}
    ]
},
jeanphi: {
    'goal-barcelona': [
        {text: "Oh, mais quel suspense insoutenable ! *rire*", intensity: 20},
        {text: "Paris va encore nous vendre du rêve, puis du cauchemar.", intensity: 50},
        {text: "Cauvin, tu te sens bien ? T’as blêmi là.", intensity: 60},
        {text: "Je crois que le PSG vient de se rappeler qu’il joue en Ligue des Champions.", intensity: 70},
        {text: "Regarde-moi ce chef-d'œuvre ! Une démonstration !", intensity: 90},
        {text: "Cauvin, t’as pensé à éteindre la télé ? Ça va te faire mal.", intensity: 100},
        {text: "Cauvin, ton silence en dit long.", intensity: 40},
        {text: "On va bientôt entendre ‘arbitrage scandaleux’ dans 3… 2… 1…", intensity: 30},
        {text: "Tu devrais appeler le service psy du PSG, ils recrutent à chaque printemps.", intensity: 80},
        {text: "Et là, Paris commence à douter... Tradition respectée.", intensity: 75}
    ],
    'goal-psg': [
        {text: "Attendez... Paris qui marque en C1 ? J’ai mal aux yeux.", intensity: 20},
        {text: "Profitez, ça arrive pas souvent !", intensity: 80},
        {text: "Cauvin, calme-toi, il reste encore 89 minutes pour tout gâcher.", intensity: 50},
        {text: "Ah, c'est mignon, ils essaient d'y croire.", intensity: 60},
        {text: "On en reparle quand il faudra défendre hein ?", intensity: 70},
        {text: "Cauvin, pourquoi tu pleures ? Ah non, c'est de la sueur.", intensity: 90},
        {text: "OK, ils ont marqué... Maintenant, place au drame !", intensity: 40},
        {text: "Cauvin, ça va finir en ‘On a manqué de caractère’ en conf’ d’après-match.", intensity: 55},
        {text: "C’est beau... mais dans 10 minutes ils prennent un but gag.", intensity: 65},
        {text: "Je commence à croire au miracle... ou pas.", intensity: 75}
    ],
    'penalty-barcelona': [
        {text: "Oh non, encore un complot contre Paris ! *ironique*", intensity: 20},
        {text: "Vraiment pas de chance... comme d’habitude.", intensity: 20},
        {text: "Penalty pour le Barça ? Bon ben, vous savez ce qui va arriver.", intensity: 50},
        {text: "Cauvin, t’as prévu un tweet sur l’arbitrage ?", intensity: 60},
        {text: "Ne t’inquiète pas Cauvin, ça rééquilibre les 12 derniers PSG-OM.", intensity: 70},
        {text: "Et là, c’est le moment où le PSG commence à trembler.", intensity: 80},
        {text: "C’est écrit, Messi va marquer et Cauvin va disparaître du groupe WhatsApp.", intensity: 90},
        {text: "Je propose un bingo ‘excuses PSG’ après ce match.", intensity: 30},
        {text: "Paris qui pleure sur l’arbitrage... ça change.", intensity: 40},
        {text: "Cauvin, t'as envoyé ton mail à l’UEFA pour protester ?", intensity: 100}
    ],
    'card': [
        {text: "Une injustice flagrante... ou pas.", intensity: 20},
        {text: "Encore une excuse à venir sur l’arbitrage ?", intensity: 20},
        {text: "C’est marrant, je l’avais senti venir.", intensity: 30},
        {text: "Paris va finir à 10. Tradition oblige.", intensity: 50},
        {text: "Le rouge arrive, je prends les paris.", intensity: 60},
        {text: "Cauvin, arrête de crier au scandale, c'est mérité !", intensity: 70},
        {text: "Si Paris perd, on sait déjà qui sera le coupable : l’arbitre.", intensity: 80},
        {text: "L’arbitre a osé siffler contre Paris ? Hérésie !", intensity: 40},
        {text: "Tu sais que le fair-play, ça marche aussi avec les cartons, hein Cauvin ?", intensity: 55},
        {text: "Cauvin, trouve-moi un match où Paris n'a pas pleuré sur l’arbitrage.", intensity: 90}
    ],
    'missed-psg': [
        {text: "Et voilà... Comme prévu !", intensity: 20},
        {text: "Paris et la LDC, c’est une histoire d’amour à sens unique.", intensity: 20},
        {text: "Cauvin, ça rentre pas, hein ? Dommage.", intensity: 40},
        {text: "Tu sens le vent tourner là ?", intensity: 50},
        {text: "Ah bah oui, la pression, c’est pas leur truc.", intensity: 70},
        {text: "Allez, le ballon est en orbite, bien joué.", intensity: 90},
        {text: "Encore un grand moment dans l’histoire du club.", intensity: 60},
        {text: "Cauvin, tu croyais vraiment qu’il allait marquer ?", intensity: 65},
        {text: "Ils ont entraîné les tirs au but avec Giroud ou quoi ?", intensity: 85},
        {text: "Ce raté va faire le tour des réseaux, crois-moi.", intensity: 100}
    ],
    'panique': [
        {text: "Ah, ça fait moins le malin que contre Dijon là !", intensity: 20},
        {text: "Cauvin en PLS, respire !", intensity: 70},
        {text: "Ne regarde pas ton téléphone, les mèmes arrivent déjà.", intensity: 50},
        {text: "Cauvin, je t'entends plus. T'es toujours là ?", intensity: 60},
        {text: "Va chercher un sac en papier, mec.", intensity: 80},
        {text: "Appelez une ambulance pour Cauvin !", intensity: 100},
        {text: "J’espère que t’as pas parié sur Paris, sinon c’est dur...", intensity: 40},
        {text: "Je connais cette tête... Celle du supporter qui comprend que c’est fini.", intensity: 85},
        {text: "Et là, on est en mode ‘On va se battre jusqu’à la fin !’ Spoiler : non.", intensity: 75},
        {text: "Cauvin, fais pas de bêtises. Y'a toujours l'Europa League... Ah non, même pas.", intensity: 90}
    ]
},
etienne: {
    'goal-barcelona': [
        {text: "Encore une erreur de placement défensif, c'est frustrant.", intensity: 20},
        {text: "Le milieu ne suit pas, c'était prévisible...", intensity: 60},
        {text: "La transition défensive est catastrophique.", intensity: 90},
        {text: "Mais pourquoi personne ne coupe la passe ?!", intensity: 30},
        {text: "C’est bien beau d’avoir le ballon, mais défendez un peu !", intensity: 40},
        {text: "Toujours le même problème sur les seconds ballons.", intensity: 50},
        {text: "Une défense alignée comme ça, c’est une invitation au but.", intensity: 70},
        {text: "Ah, le marquage individuel, concept inconnu à Paris...", intensity: 80},
        {text: "Même Juni à 40 ans aurait mieux géré ça.", intensity: 85},
        {text: "C'est trop facile, ils défendent comme une équipe de district.", intensity: 100}
    ],
    'goal-psg': [
        {text: "Bonne construction, belle finition.", intensity: 20},
        {text: "Enfin une action bien exécutée !", intensity: 80},
        {text: "C’est propre, rien à dire.", intensity: 30},
        {text: "Là, ils ont bien étiré le bloc adverse.", intensity: 40},
        {text: "C’est rare de voir Paris jouer simple et efficace.", intensity: 50},
        {text: "Ça, c’est une vraie action de classe.", intensity: 60},
        {text: "Bien joué, mais je suis sûr que Lacazette l’aurait mise aussi.", intensity: 70},
        {text: "C’est quand même plus beau qu’un vieux péno sifflé pour Neymar.", intensity: 85},
        {text: "Enfin une phase de jeu digne d’un grand d’Europe !", intensity: 90},
        {text: "Bon, même Genesio aurait applaudi celle-là.", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "Trop d'erreurs individuelles, c'est puni.", intensity: 20},
        {text: "Faut revoir les placements défensifs.", intensity: 90},
        {text: "Encore un pressing mal coordonné qui finit en faute...", intensity: 30},
        {text: "Sérieux, vous voulez leur donner la qualif ?!", intensity: 40},
        {text: "Le défenseur est en retard, pénalty indiscutable.", intensity: 50},
        {text: "Toujours cette naïveté défensive incroyable.", intensity: 60},
        {text: "À ce niveau, c’est impardonnable.", intensity: 70},
        {text: "C’est digne des relances foireuses de Mapou Yanga-Mbiwa, ça...", intensity: 80},
        {text: "Paris dans la gestion d’un match, c’est comme un enfant avec un château de sable.", intensity: 95},
        {text: "Encore un peno concédé… bientôt ils vont battre le record de Marcelo.", intensity: 100}
    ],
    'card': [
        {text: "Intervention maladroite, carton logique.", intensity: 20},
        {text: "L'équipe doit rester disciplinée.", intensity: 70},
        {text: "Encore une faute bête qui leur coûte cher.", intensity: 30},
        {text: "Franchement, c’est mérité.", intensity: 40},
        {text: "Il a confondu pressing et karaté, c'est malin.", intensity: 50},
        {text: "Tant mieux, ça équilibre un peu.", intensity: 60},
        {text: "Même chez les jeunes de l’OL, on apprend à défendre mieux que ça.", intensity: 80},
        {text: "Ça devient n’importe quoi, bientôt ils vont finir à 8.", intensity: 85},
        {text: "Il va falloir s’accrocher maintenant...", intensity: 90},
        {text: "Bon bah, ils vont encore pleurer sur l’arbitrage.", intensity: 100}
    ],
    'missed-psg': [
        {text: "Manque de lucidité devant le but.", intensity: 20},
        {text: "Mauvais choix de frappe, dommage.", intensity: 70},
        {text: "Il faut lever la tête et ajuster, c'est pas compliqué.", intensity: 30},
        {text: "Techniquement, il la prend mal, ça se voit.", intensity: 40},
        {text: "Avec un vrai attaquant, ça fait but 9 fois sur 10.", intensity: 50},
        {text: "Encore une occasion gâchée, ils vont s’en mordre les doigts.", intensity: 60},
        {text: "Là, un Benzema ou un Sonny Anderson, c’est au fond.", intensity: 75},
        {text: "On peut pas être aussi maladroit devant le but à ce niveau.", intensity: 85},
        {text: "C’est le genre d’action où tu sais que tu vas regretter à la 90e.", intensity: 95},
        {text: "Et après, ils vont dire que c’est pas mental...", intensity: 100}
    ]
},
renaud: {
    'goal-barcelona': [
        {text: "C'est bon, c'est écrit, ils vont encore se faire remonter !", intensity: 20},
        {text: "Paris qui coule en C1 ? Oh bah ça alors, QUELLE SURPRISE !", intensity: 40},
        {text: "Je sens que le stade va éteindre les lumières comme en 93 !", intensity: 50},
        {text: "Ils avaient prévu des extincteurs au Parc ?", intensity: 60},
        {text: "J’ai vu des défenses plus solides dans les tournois corpo du Vieux-Port.", intensity: 70},
        {text: "Paris, c’est un château de cartes quand y’a du vent.", intensity: 80},
        {text: "C’est moi ou leur mur défensif a été construit par un stagiaire ?", intensity: 85},
        {text: "Jean-Michel Aulas doit savourer ce moment quelque part.", intensity: 90},
        {text: "Même l’OM de 2012 défendait mieux, et pourtant...", intensity: 95},
        {text: "La seule étoile qu'ils vont voir, c'est celle qu'ils prennent sur le front.", intensity: 100}
    ],
    'goal-psg': [
        {text: "Oh mince, ils savent encore marquer ?!", intensity: 20},
        {text: "Bordel... ils vont encore nous faire croire qu'ils sont un grand club.", intensity: 30},
        {text: "OK, mais vous savez qu'après, faut tenir le score hein ?", intensity: 50},
        {text: "On a déjà vu Paris mener 4-0, on connaît la suite.", intensity: 60},
        {text: "Ça compte pas tant qu’ils ont pas soulevé la coupe. *Rire*", intensity: 70},
        {text: "Même en marquant, ils ont l'air fébriles.", intensity: 75},
        {text: "Bien joué, mais ça vaut pas un but de Basile Boli en finale de C1.", intensity: 80},
        {text: "On va voir si leur mental est aussi solide qu’ils le prétendent.", intensity: 90},
        {text: "Bon, qu’ils en mettent un autre avant la 85e, sinon c’est foutu.", intensity: 95},
        {text: "Profitez, c’est le seul trophée européen que vous verrez !", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "Paris et la Ligue des Champions, c'est comme moi et les impôts : une longue histoire de souffrance.", intensity: 20},
        {text: "Encore un pénalty ? La VAR est sponsorisée par le Vélodrome ce soir ?", intensity: 30},
        {text: "Si seulement ils défendaient aussi bien que nous en 93...", intensity: 50},
        {text: "Je crois que j'ai déjà vu ce film. C'est un drame.", intensity: 60},
        {text: "Paris va crier au complot... en oubliant qu’ils ont eu 15 penaltys cette saison.", intensity: 70},
        {text: "J'appelle Barthez, il a peut-être encore son maillot pour rentrer dans les cages.", intensity: 80},
        {text: "Ils devraient engager Didier Deschamps pour apprendre à tenir un score.", intensity: 85},
        {text: "Une défense plus fragile que ma tente à la fête de l’Huma.", intensity: 90},
        {text: "C'est ça de croire qu'on peut acheter la gloire, les gars.", intensity: 95},
        {text: "J'avais dit qu'ils allaient s'effondrer !", intensity: 100}
    ],
    'card': [
        {text: "Carton ? Oh mais laissez-leur une chance, c'est déjà dur pour eux !", intensity: 20},
        {text: "Si ça continue, ils vont finir à 9 comme au bon vieux temps de Bielsa !", intensity: 30},
        {text: "Bon, ça équilibre un peu... mais ça changera rien.", intensity: 50},
        {text: "Carton logique. Il avait oublié qu’il jouait au foot, pas au MMA.", intensity: 60},
        {text: "Paris en difficulté ? L'arbitre sort le carton, classique.", intensity: 70},
        {text: "Dans le doute, ils vont encore pleurer au micro après le match.", intensity: 80},
        {text: "Même Di Meco à l'époque trouvait ça trop viril.", intensity: 85},
        {text: "Quand ça chauffe, on voit les vrais joueurs... et les autres.", intensity: 90},
        {text: "Attention, plus qu’un rouge et ils vont demander le report du match !", intensity: 95},
        {text: "Carton ou pas, leur problème c’est surtout qu’ils savent pas défendre.", intensity: 100}
    ],
    'missed-psg': [
        {text: "Et voilà, encore un ballon qui finit en orbite.", intensity: 20},
        {text: "Si c'était à Marseille, le ballon aurait atterri sur le Vieux-Port.", intensity: 30},
        {text: "C'est pas faute de leur avoir dit qu’il fallait cadrer...", intensity: 50},
        {text: "Encore un but refusé par la gravité.", intensity: 60},
        {text: "Mais qui leur a appris à frapper au but ?!", intensity: 70},
        {text: "J’ai vu des joueurs de district être plus efficaces.", intensity: 80},
        {text: "Cavani aurait marqué, et ça me fait mal de le dire.", intensity: 85},
        {text: "Ce raté résume tout : Paris en Ligue des Champions.", intensity: 90},
        {text: "Mais non, continuez comme ça, c'est super !", intensity: 95},
        {text: "Une frappe plus molle que les finances de Bordeaux.", intensity: 100}
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

    // Détermine le type d'événement et son équipe associée
    const eventType = event.team ? 
        `${event.type}-${event.team.toLowerCase()}` : 
        event.type;

    // Configuration des réactions
    const reactionConfig = {
        'goal': { baseReactions: 4, variance: 2 },
        'foul': { baseReactions: 2, variance: 1 },
        'card-yellow': { baseReactions: 3, variance: 1 },
        'default': { baseReactions: 3, variance: 2 }
    };

    const config = reactionConfig[event.type] || reactionConfig.default;
    
    // Calcule le nombre de réactions
    let reactionCount = Math.min(
        Math.max(
            config.baseReactions + Math.floor(Math.random() * (config.variance * 2 + 1)) - config.variance,
            1
        ),
        6
    );

    // Sélection aléatoire des personnages
    const reactingCharacters = characters
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(reactionCount, characters.length));

    // Ajout des réactions
    reactingCharacters.forEach(character => {
        // Réactions spécifiques ou génériques
        const specificReactions = characterReactions[character]?.[eventType] || [];
        const genericReactions = characterReactions[character]?.generic || [];
        const reactionPool = specificReactions.length > 0 ? specificReactions : genericReactions;
        
        // Filtrage par intensité
        const filteredReactions = reactionPool.filter(r => r.intensity <= intensity);

        if (filteredReactions.length > 0) {
            const randomReaction = filteredReactions[
                Math.floor(Math.random() * filteredReactions.length)
            ];
            addReaction(character, randomReaction.text);
        }
    });
}

export { characterReactions, addReaction, addNPCReaction };
