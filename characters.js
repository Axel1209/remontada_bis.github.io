// characters.js - Gestion des réactions des personnages

import { barcaScore, selectedCharacter, gameFeed } from "./game.js";

const characterReactions = {
cauvin: {
    'goal-barcelona': [
        {text: "NON ! Pas déjà !", intensity: 5},
        {text: "NON ! PAS ENCORE EUX !", intensity: 20},
        {text: "On va revivre le cauchemar de 2017...", intensity: 40},
        {text: "Je sens que je vais vomir...", intensity: 90},
        {text: "Bon, c’est juste un but… Juste un but…", intensity: 30},
        {text: "On va pas commencer à trembler, hein ?", intensity: 50},
        {text: "Non mais sérieux, c'est un cauchemar qui recommence !", intensity: 70},
        {text: "Je veux juste rentrer chez moi...", intensity: 80},
        {text: "Mais c’est un script FIFA ou quoi ?!", intensity: 85},
        {text: "Je ne supporte plus de voir ce maillot blaugrana.", intensity: 95},
        {text: "Mais Putain, c'est pas vrai !", intensity: 70},
        {text: "BARCA EN*****", intensity: 80},
        {text: "C'est une PUTAIN de BLAGUE ! C'est PAS VRAI !", intensity: 85},
        {text: "AAAARGHHHHHHHHHHHHHHH !", intensity: 95},
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
        {text: "ON LEUR MARQUE UN DERNIER ET ON RENTRE À LA MAISON !", intensity: 100}
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
        {text: "Allez, on a des occas, c'est bien ", intensity: 5},
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
    'ajout': [
        {text: "Vous êtes tellement relous...", intensity: 20},
        {text: "Putain mais arrêtez !", intensity: 70},
        {text: "C’est pas drôle, sérieux !", intensity: 30},
        {text: "Vous attendez que ça, hein ?", intensity: 40},
        {text: "Vous êtes insupportables, je vous jure.", intensity: 50},
        {text: "Allez tous vous faire voir.", intensity: 60},
        {text: "Vous avez rien d’autre à faire ?", intensity: 80},
        {text: "Je vais vous muter, c’est bon.", intensity: 90},
        {text: "Je quitte ce groupe, je vous déteste.", intensity: 95},
        {text: "Laissez-moi en paix, je suis en deuil.", intensity: 100},
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
        {text: "Quel départ!", intensity: 5},
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
        {text: "Et ca flippe déjà au moment de conclure !", intensity: 5},
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
    'ajout': [
        {text: "Ah, ça fait moins le malin que contre Dijon là !", intensity: 20},
        {text: "Cauvin en PLS, respire !", intensity: 70},
        {text: "Ne regarde pas ton téléphone, les mèmes arrivent déjà.", intensity: 50},
        {text: "Cauvin, je t'entends plus. T'es toujours là ?", intensity: 60},
        {text: "Va chercher un sac en papier, mec.", intensity: 80},
        {text: "Appelez une ambulance pour Cauvin !", intensity: 100},
        {text: "J’espère que t’as pas parié sur Paris, sinon c’est dur...", intensity: 40},
        {text: "Je connais cette tête... Celle du supporter qui comprend que c’est fini.", intensity: 85},
        {text: "Et là, on est en mode ‘On va se battre jusqu’à la fin !’ Spoiler : non.", intensity: 75},
        {text: "Cauvin, fais pas de bêtises. Y'a toujours l'Europa League... Ah non, même pas.", intensity: 90},
    {text: "C’est marrant, vous croyez vraiment que cette équipe va gagner quelque chose ?", intensity: 0},
    {text: "Encore une défaite en Ligue des Champions ? C’est devenu une habitude.", intensity: 10},
    {text: "J’ai vu des matchs de foot plus intéressants que PSG-Guingamp.", intensity: 20},
    {text: "C’est fou comme vous arrivez toujours à trouver des excuses.", intensity: 30},
    {text: "Franchement, un PSG sans Neymar, c’est comme un burger sans frites.", intensity: 35},
    {text: "Ce club est une vraie blague, vous êtes sérieux à le défendre ?", intensity: 40},
    {text: "D’un côté, c’est bien de voir que l’argent ne fait pas tout.", intensity: 45},
    {text: "Vous avez quand même l’air à fond pour une équipe qui a pas de LDC...", intensity: 50},
    {text: "Ce n’est même plus de l’espoir, c’est de l’aveuglement.", intensity: 55},
    {text: "Un PSG qui ne gagne pas la LDC, c’est comme un Noël sans cadeaux.", intensity: 60},
    {text: "Je vous admire, vous continuez à croire en eux malgré tout ça.", intensity: 65},
    {text: "Quand tu vois l’argent investi et que t’as rien en retour, c’est triste.", intensity: 70},
    {text: "C’est sûr, l’argent c’est la clé pour devenir une équipe légendaire… Oh wait.", intensity: 75},
    {text: "Et dire que vous vous appelez ‘les rois de la capitale’. C’est une blague ?", intensity: 80},
    {text: "Le PSG, c’est une série à suspense... mais sans fin heureuse.", intensity: 85},
    {text: "Il faudrait peut-être revoir le concept de ‘gagner’ dans ce club.", intensity: 90},
    {text: "À force de se prendre des raclées, ça devient une tradition chez vous.", intensity: 95},
    {text: "J’en ai marre d’entendre parler de cette équipe, c’est de l’auto-sabotage.", intensity: 100},
    {text: "Allez, un jour peut-être, la LDC… mais pas avant 10 ans à ce rythme.", intensity: 105},
    {text: "Franchement, on dirait que vous êtes abonnés à l’humiliation européenne.", intensity: 110}
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
        {text: "Wow, grosse erreur de marquage d'entrée !", intensity: 5},
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
        {text: "Aie, l'échauffement n'a pas été assez poussé !", intensity: 5},
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
    ],
    ajout: [
    {text: "C'est quoi ce PSG ? C'est même plus drôle à regarder.", intensity: 0},
    {text: "Vous savez, l'OL arrive à faire mieux avec beaucoup moins d'argent. C’est assez incroyable.", intensity: 10},
    {text: "Ah, vous avez perdu encore une fois en LDC... Vous commencez à ressembler à une série à suspense sans fin.", intensity: 20},
    {text: "Franchement, vous avez plus de chances de voir Kevin Mayer courir un 100m en 9 secondes que le PSG gagner la LDC.", intensity: 25},
    {text: "Encore un match où vous avez été totalement dépassés tactiquement, bravo.", intensity: 30},
    {text: "L’OL n’a pas besoin de Messi pour être plus solide que vous. Vous êtes en train de vous ridiculiser.", intensity: 40},
    {text: "Le PSG a-t-il une tactique, ou est-ce juste de l’improvisation ?", intensity: 45},
    {text: "Sérieusement, même Kevin Mayer pourrait mieux organiser vos transitions offensives.", intensity: 50},
    {text: "Et dire qu'on vous appelle la ‘meilleure équipe de France’, on dirait plus une équipe de débutants.", intensity: 55},
    {text: "L'OL vous montre comment jouer au football, et vous êtes là à vous vautrer.", intensity: 60},
    {text: "Quand tu vois l'OL jouer et toi, tu te dis que le PSG n’a même pas de plan de jeu, c’est un peu flippant.", intensity: 70},
    {text: "C’est comme si Kevin Mayer avait une meilleure gestion du jeu que vous, c’est pas possible.", intensity: 75},
    {text: "L'OL a plus de tactique en un match que vous en toute une saison européenne. Vous vous êtes perdus, non ?", intensity: 80},
    {text: "Même les tactiques de l’OL semblent plus créatives que ce que vous proposez. C'est un vrai désastre.", intensity: 85},
    {text: "Votre défense, c'est comme un château de cartes, et l'OL vous regarde vous effondrer.", intensity: 90},
    {text: "C’est clair, l'OL a plus de cohésion dans son jeu que vous dans toute une saison. Une honte.", intensity: 95},
    {text: "C'est bon, j'ai compris, vous êtes là pour divertir, pas pour gagner. En attendant, l'OL vous écrase.", intensity: 100},
    {text: "Franchement, l’OL serait capable de vous écraser tactiquement même avec Kevin Mayer en tant qu’entraîneur. Vous êtes ridicules.", intensity: 105}
]
},
renaud: {
    'goal-barcelona': [
        {text: "Remontaga, à jamais les premiers ? ", intensity: 5},
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
        {text: "Voilàà, c'est ca qu'on veut ! ", intensity: 5},
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
    ],
    ajout: [
    {text: "Franchement, si l'OM a pu gagner la Ligue des Champions, vous pouvez bien réussir à gagner un match contre n'importe qui.", intensity: 0},
    {text: "J'crois qu'un fan de l'OM a plus de chances de voir son équipe remporter la LDC que vous.", intensity: 10},
    {text: "L'OM a gagné la Ligue des Champions... et vous, vous galérez contre des équipes plus faibles.", intensity: 20},
    {text: "Vous vous croyez meilleurs que l'OM, mais eux, au moins, ils ont une LDC dans leur histoire.", intensity: 25},
    {text: "Franchement, si l'OM a gagné la Ligue des Champions, pourquoi pas vous, hein ? Oh wait…", intensity: 30},
    {text: "J’ai vu plus de tactique dans un match de pétanque que dans votre équipe ce soir.", intensity: 35},
    {text: "L’OM en 1993, c'était un miracle, mais vous, même avec tous vos milliards, vous arrivez à ne rien faire.", intensity: 40},
    {text: "Si l’OM a pu gagner la LDC avec un équipe moins forte que la vôtre, faut peut-être réfléchir à vos stratégies.", intensity: 50},
    {text: "Je suis sûr qu’un groupe d’amis de l’OM pourrait faire mieux que votre défense ce soir.", intensity: 55},
    {text: "Franchement, même les supporters de l'OM ne se moquent pas autant de vous... Enfin, presque.", intensity: 60},
    {text: "L’OM a gagné la LDC avec un jeu ultra défensif… et vous, vous êtes censés être une machine à goals, mais vous coulez.", intensity: 65},
    {text: "Je suis certain que même les joueurs de l’OM feraient mieux sur ce terrain… et ils n’ont même pas de Neymar.", intensity: 70},
    {text: "Je vous jure, même l’OM aurait trouvé un moyen de gagner avec l’équipe que vous avez ce soir. Ou au moins d’être un peu moins pathétiques.", intensity: 75},
    {text: "Le PSG en LDC, c’est comme un chat qui essaie d’attraper un laser : ça court dans tous les sens, mais ça ne capte jamais rien.", intensity: 80},
    {text: "Sérieusement, vous êtes là à pleurer, mais l’OM a gagné la LDC, alors que vous, vous n’avez rien à vous mettre sous la dent.", intensity: 85},
    {text: "Quand l’OM a remporté la LDC, c’était tout un continent qui tremblait. Vous, vous faites juste pleurer vos supporters.", intensity: 90},
    {text: "Vous vous dites ‘on va tout déchirer’, mais en réalité, c’est comme si un dauphin essayait de jouer au rugby.", intensity: 95},
    {text: "Franchement, même l'OM en 1993 avait plus de cohésion que vous ce soir. La honte.", intensity: 100},
    {text: "Le PSG en Ligue des Champions, c’est comme un spectacle de magie où le magicien oublie de sortir le lapin du chapeau.", intensity: 105}
]
},
dimitri: {
    'goal-barcelona': [
        {text: "Allez, la remontada impossible est passée de 0% à 5% !", intensity: 5},
        {text: "Bon, avec ce but, leur probabilité de qualification passe à 12,4 %. Ça commence à sentir mauvais.", intensity: 20},
        {text: "Paris avait 94 % de chances de passer avant le match. On en est où là ?", intensity: 30},
        {text: "L’xG de cette action était à 0.08… ça veut dire qu’ils ont juste de la chatte.", intensity: 40},
        {text: "Avec ce rythme, on est sur une tendance à 3,2 buts encaissés. Faudrait songer à défendre.", intensity: 50},
        {text: "Paris vient de perdre 1,1 % d’espérance de vie collective après ce but.", intensity: 60},
        {text: "Statistiquement, Paris a déjà vécu ça 8 fois en C1. Pourquoi ça changerait ?", intensity: 70},
        {text: "Les expected tears (xT) de Cauvin sont en train d’exploser.", intensity: 80},
        {text: "On est à combien en possession ? Ah ouais, 68 %… pour quoi faire, en fait ?", intensity: 85},
        {text: "Paris, c’est un bug dans Football Manager : 78 % de chances de passer, mais éliminé 10 fois sur 10.", intensity: 95},
        {text: "Bon bah, il reste plus qu’à demander une fusion avec Bordeaux, ils connaissent la loose aussi.", intensity: 100}
    ],
    'goal-psg': [
        {text: "Statistiquement, ils avaient 78 % de chances de marquer là. Normal.", intensity: 20},
        {text: "Belle action, xG de 0.72, c’est un but attendu.", intensity: 30},
        {text: "Avec ce but, leurs chances de qualification remontent à 87 %. Pas mal.", intensity: 50},
        {text: "Enfin un xG qui se convertit en vrai but !", intensity: 60},
        {text: "Ça, c’est une frappe propre : 97 km/h, bien placé, rien à dire.", intensity: 70},
        {text: "C’est un but, mais est-ce que ça compense leur mental en mousse ?", intensity: 75},
        {text: "Si Paris tient ce score, ils passent dans 86 % des cas… oui mais le mental, hein.", intensity: 80},
        {text: "OK, mais on en parle de leur pressing à la 85e ? Ils auront cramé 8 km de trop.", intensity: 90},
        {text: "Bon, reste plus qu’à éviter les 15 dernières minutes maudites.", intensity: 95},
        {text: "Allez, plus qu’un but et ils auront officiellement un espoir. Mais c’est Paris…", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "xG du penalty : 0.78. C’est pratiquement un but automatique.", intensity: 20},
        {text: "Les probabilités de qualification viennent de perdre 10 points en 3 secondes.", intensity: 30},
        {text: "Depuis 2010, Paris concède un penalty tous les 4,2 matchs de C1. Quelle surprise.", intensity: 40},
        {text: "La VAR est du côté de Barcelone, 68 % de chances qu’ils sifflent.", intensity: 50},
        {text: "Quand Paris mène de 3 buts ou plus en C1, ils finissent par se faire peur dans 88 % des cas.", intensity: 60},
        {text: "Un penalty contre eux… et leur moral baisse à 4 %.", intensity: 70},
        {text: "Le dernier penalty arrêté par un gardien de Paris en C1 date de quand déjà ?", intensity: 80},
        {text: "Les expected cries (xC) de Cauvin viennent de passer à 1.5.", intensity: 90},
        {text: "Avec ça, leur espérance de qualif tombe sous les 50 %. Ça pue.", intensity: 95},
        {text: "Bordeaux n’a jamais vécu un tel cauchemar. Mais bon, encore faut-il jouer la C1.", intensity: 100}
    ],
    'card': [
        {text: "Bon, statistiquement, un rouge ici, c’est 78 % de chances de se faire éliminer.", intensity: 20},
        {text: "Avec 3 cartons dans le match, Paris ne finit à 11 que dans 62 % des cas.", intensity: 30},
        {text: "En moyenne, Paris prend 1,6 carton par match en C1. On est dans les temps.", intensity: 40},
        {text: "Le dernier rouge à ce stade d’une compétition européenne pour Paris, c’était en… ah non, y’en a trop.", intensity: 50},
        {text: "Avec 10 contre 11, le bloc défensif tient en moyenne 18 minutes. À voir.", intensity: 60},
        {text: "Après ce rouge, leur intensité au pressing va baisser de 25 %.", intensity: 70},
        {text: "Paris réduit à 10, ça donne une probabilité de victoire qui tombe à 14 %.", intensity: 80},
        {text: "Si on simule ce match 10 000 fois, Paris perd dans 82,7 % des cas.", intensity: 85},
        {text: "Un rouge contre Barcelone ? Oh, bah comme en 2017.", intensity: 95},
        {text: "Je me demande si Bordeaux finirait ce match avec plus ou moins de cartons. Ah non, ils jouent pas la C1.", intensity: 100}
    ],
    'missed-psg': [
        {text: "Allez encore 12 frappes, et statistiquement le PSG marquera un but", intensity: 5},
        {text: "L’xG de cette occasion ? 0.92. Inratable… sauf pour eux.", intensity: 20},
        {text: "Là, on parle d’un tir qui finit 1,8 mètre à côté avec 88 % de chances de rentrer. Catastrophique.", intensity: 30},
        {text: "Même un attaquant de Bordeaux aurait mis celle-là.", intensity: 40},
        {text: "Avec ce raté, ils viennent de perdre 3 % de chances de qualification.", intensity: 50},
        {text: "Là, c’est 99 fois sur 100 au fond. La seule fois où ça rate, c'est Paris.", intensity: 60},
        {text: "Si on prend tous les tirs de cette position en C1, 84 % finissent en but. Pas eux.", intensity: 70},
        {text: "À ce rythme, ils ont 22 % de chances de marquer avant la fin du match.", intensity: 80},
        {text: "Les expected excuses (xE) de l’entraîneur après le match viennent d’augmenter.", intensity: 85},
        {text: "Ce raté = -4 % de confiance collective.", intensity: 95},
        {text: "Une frappe plus molle que la défense de Bordeaux en 2022.", intensity: 100}
    ],
    ajout: [
    {text: "Franchement, à ce rythme, vous allez finir la saison avec plus de défaites que de victoires.", intensity: 0},
    {text: "À force de perdre des points comme ça, vous allez bientôt rivaliser avec les équipes de bas de tableau.", intensity: 10},
    {text: "Sur les 5 derniers matchs, vous avez plus de cartons rouges que de buts inscrits. C’est quand même inquiétant.", intensity: 20},
    {text: "Vous avez plus de chances d’obtenir un penalty que de marquer un but sur un contre. C’est dire le niveau.", intensity: 25},
    {text: "Le PSG a touché plus de fois la barre transversale que la ligne de but cette saison... un vrai exploit.", intensity: 30},
    {text: "Avec votre défense, on dirait une équipe amateur. Vous encaissez en moyenne 1.5 buts par match depuis 5 matchs.", intensity: 35},
    {text: "C'est comme si vous jouiez sans gardien. Ah, attendez... vous avez Donnarumma, pourtant.", intensity: 40},
    {text: "Franchement, avec les statistiques actuelles, il vaut mieux parier sur une victoire de Guingamp que sur le PSG en Ligue des Champions.", intensity: 45},
    {text: "Le PSG a marqué en moyenne 2.3 buts par match cette saison, mais apparemment, ça ne suffit même pas à passer les 8èmes.", intensity: 50},
    {text: "C’est fou comme votre tactique ne suit même pas les données. Vous avez 65% de possession et vous perdez quand même.", intensity: 55},
    {text: "Quand tu regardes les stats de votre attaque et que tu réalises qu’elle est moins efficace que celle d’une équipe de Ligue 2.", intensity: 60},
    {text: "À ce rythme, avec 5 tirs cadrés sur 20, même une équipe d’amateurs aurait plus de chance de marquer.", intensity: 65},
    {text: "Je vous jure, vos statistiques de passes sont aussi fiables qu’une montre cassée. Toujours à côté de la plaque.", intensity: 70},
    {text: "Depuis le début de la saison, vous avez plus de buts contre votre camp que de victoires en LDC. Ça en dit long.", intensity: 75},
    {text: "C’est comme si vous jouiez à 10 contre 11 à chaque match, même avec vos superstars. Et ça ne va pas changer de sitôt.", intensity: 80},
    {text: "Avec vos 80% de possession et 0 buts inscrits, vous êtes en train de réécrire l’histoire... mais de la mauvaise façon.", intensity: 85},
    {text: "Même avec un budget 3 fois supérieur à celui des autres clubs, vous arrivez à faire pire que l’équipe du coin.", intensity: 90},
    {text: "Il serait peut-être temps de revoir votre stratégie. Vous avez plus de buts encaissés que de victoires depuis la reprise.", intensity: 95},
    {text: "D’un point de vue statistique, c’est clair : vous êtes la meilleure équipe… pour donner de l’espoir, puis tout gâcher.", intensity: 100},
    {text: "À ce niveau, vous devriez envisager d’investir dans un bon statisticien pour vous apprendre à gagner des matchs.", intensity: 105}
]
},
bastien: {
    'goal-barcelona': [
        {text: "FFL, l'histoire est en marche ! ", intensity: 5},
        {text: "Ah, le PSG qui s’écroule en C1… une tradition bien française !", intensity: 20},
        {text: "Les clubs français en Europe, c’est comme les desserts anglais : on sait que ça va mal finir.", intensity: 30},
        {text: "Et voilà, comme d’habitude, ils commencent à trembler.", intensity: 40},
        {text: "Je propose qu’on prenne le but en photo et qu’on l’envoie à la FFF pour mise à jour du manuel ‘Comment perdre en C1’.", intensity: 50},
        {text: "Cette défense me rappelle celle de Lyon en 2020, sauf qu’eux avaient au moins battu City.", intensity: 60},
        {text: "Le PSG, c’est un mélange entre un blockbuster et une comédie : beau spectacle, mais toujours un scénario absurde.", intensity: 70},
        {text: "Le coefficient UEFA de la France est en PLS.", intensity: 80},
        {text: "Paris, c’est le seul club qui a peur en menant de 4 buts à l’aller.", intensity: 90},
        {text: "Je pense que même une équipe de National défendrait mieux.", intensity: 95},
        {text: "Les clubs français et la C1, c’est une love story qui finit toujours en divorce.", intensity: 100}
    ],
    'goal-psg': [
        {text: "Oh ? Paris qui marque ? Attendez, c’est légal en C1 ?", intensity: 20},
        {text: "Un club français qui brille en Europe, c’est un peu comme un plat surgelé : t’y crois, mais t’es toujours déçu après.", intensity: 30},
        {text: "Bon, ils vont quand même réussir à tout gâcher, on se détend.", intensity: 40},
        {text: "Un but en C1, c’est bien, mais un mental en C1, c’est mieux.", intensity: 50},
        {text: "Profitez, ça va pas durer.", intensity: 60},
        {text: "On prend les paris sur combien de minutes avant qu’ils paniquent ?", intensity: 70},
        {text: "Si le PSG se qualifie, je mange mon écharpe de l’OM.", intensity: 80},
        {text: "C’est bon, on peut mettre à jour le site de l’UEFA ? Un club français a marqué en quart de finale.", intensity: 90},
        {text: "Si le PSG gagne ce match, je reconnais enfin leur statut de grand club. Spoiler : c’est pas gagné.", intensity: 95},
        {text: "Les mecs mettent un but et pensent qu’ils sont le Real Madrid. Calmez-vous.", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "Et voilà, classique, Paris qui siffle la fin de son propre rêve.", intensity: 20},
        {text: "Depuis 10 ans, je me demande si c’est un club de foot ou un laboratoire expérimental du choke.", intensity: 30},
        {text: "On parie que dans 5 minutes, Cauvin va parler d’arbitrage ?", intensity: 40},
        {text: "Paris et la Ligue des Champions, c’est le Titanic et l’iceberg.", intensity: 50},
        {text: "Penalty ? Bah oui, c’était dans le script !", intensity: 60},
        {text: "Le dernier penalty arrêté par un club français en C1 remonte à l’ère préhistorique.", intensity: 70},
        {text: "Encore un coup des Illuminati de l’UEFA, c’est sûr.", intensity: 80},
        {text: "Je suis sûr que même Saint-Étienne en 76 avait plus de solidité défensive.", intensity: 90},
        {text: "C’est officiel : la France vient de perdre 0,02 points au coefficient UEFA.", intensity: 95},
        {text: "J’attends le moment où ils vont demander à rejouer le match.", intensity: 100}
    ],
    'card': [
        {text: "Un rouge ? On se demande encore pourquoi la France est la risée de l’Europe.", intensity: 20},
        {text: "S’il y avait une Coupe d’Europe des cartons, on aurait nos chances.", intensity: 30},
        {text: "Avec cette discipline, on peut direct s’inscrire à Koh-Lanta.", intensity: 40},
        {text: "Le fair-play à la française : râler, simuler, et se faire expulser.", intensity: 50},
        {text: "Un carton de plus… bientôt ils joueront à 7.", intensity: 60},
        {text: "Même Bordeaux en 2009 était plus discipliné en C1.", intensity: 70},
        {text: "On peut encore prendre un rouge ou on attend un peu ?", intensity: 80},
        {text: "Même un club chypriote a plus de maîtrise que ça.", intensity: 90},
        {text: "Si on fait le cumul de toutes les erreurs françaises en Europe, on pourrait écrire une thèse.", intensity: 95},
        {text: "À ce rythme, même une équipe de Ligue 2 les bat en Coupe de France.", intensity: 100}
    ],
    'missed-psg': [
        {text: "Non mais vous la sentez la loose française là ? ", intensity: 5},
        {text: "Et c’est raté… tiens, quelle surprise !", intensity: 20},
        {text: "On a retrouvé le vrai PSG en C1 : des occasions, pas de buts.", intensity: 30},
        {text: "Si chaque occasion manquée donnait un point UEFA, on serait devant l’Angleterre.", intensity: 40},
        {text: "Un attaquant français en Europe, c’est comme une voiture sans moteur.", intensity: 50},
        {text: "On peut leur envoyer un tuto ‘comment cadrer un tir’ ?", intensity: 60},
        {text: "Même la CFA 2 du Red Star aurait mis celle-là.", intensity: 70},
        {text: "Il fallait bien équilibrer le ratio ‘espoirs’ et ‘déceptions’.", intensity: 80},
        {text: "C’est plus un match de foot, c’est un best-of des occasions ratées.", intensity: 90},
        {text: "Si rater des occasions était un sport olympique, la France aurait l’or chaque année.", intensity: 95},
        {text: "Des frappes qui finissent au 3e étage… on sent la patte française.", intensity: 100}
    ],
    ajout: [
    {text: "Franchement, à ce rythme, la Coupe d'Europe, c'est juste une promenade pour les autres équipes.", intensity: 0},
    {text: "Encore une année où les clubs français ne feront même pas les quarts de finale. C’est presque une tradition.", intensity: 10},
    {text: "Vous jouez en Coupe d'Europe comme si c’était un tournoi de pré-saison. Sérieusement, ça ne va jamais changer.", intensity: 20},
    {text: "Les clubs français en Coupe d’Europe, c’est un peu comme une équipe de foot amateur qui rêve de jouer la finale de la Champions League.", intensity: 25},
    {text: "C’est marrant, les clubs français sont là pour participer, mais pas pour gagner. Vous êtes déjà en vacances, c’est ça ?", intensity: 30},
    {text: "Là, vous perdez contre des équipes qui sont même pas favorites. Sérieusement, vous pensez toujours pouvoir concurrencer les géants européens ?", intensity: 40},
    {text: "Les clubs français en Coupe d'Europe, c'est un peu comme un chat qui essaie de jouer au foot : ils sont mignons, mais ça ne mène nulle part.", intensity: 45},
    {text: "Chaque année, c'est la même chose : des clubs français qui espèrent, mais qui se font éliminer comme des amateurs.", intensity: 50},
    {text: "L’année dernière, les clubs français ont été éliminés dès les 8èmes... Ah non, j'me trompe, il n'y en avait même pas.", intensity: 55},
    {text: "C’est dingue, même des clubs de petite taille en Europe arrivent à surpasser vos équipes, et ça arrive chaque année.", intensity: 60},
    {text: "Les clubs français en Coupe d’Europe, c’est comme un feu de paille : ça commence fort, puis ça se dissipe rapidement.", intensity: 65},
    {text: "C'est fou, vous êtes presque plus proches de la relégation que de la qualification en quarts. Une vraie blague.", intensity: 70},
    {text: "Les clubs français en Coupe d'Europe, c'est comme un épisode de série sans fin, où tout le monde perd à la fin. Mais vous y croyez encore.", intensity: 75},
    {text: "Franchement, la Coupe d'Europe c'est devenu votre terrain d'entraînement. Vous y allez pour perdre et ça fait presque pitié.", intensity: 80},
    {text: "La Ligue des Champions sans un club français en quart ? C’est devenu un classique. Vous arrivez à chaque fois à nous décevoir.", intensity: 85},
    {text: "Les clubs français en Europe, c’est un peu comme un piège à touristes : tout le monde y passe, mais personne ne va au bout.", intensity: 90},
    {text: "Même quand vous avez une équipe qui peut prétendre au titre, vous trouvez un moyen de tout foutre en l'air en huitièmes.", intensity: 95},
    {text: "On dirait que les clubs français sont abonnés aux éliminations en Coupe d'Europe. C’est triste, mais au moins c’est prévisible.", intensity: 100},
    {text: "Vous vous qualifiez, mais c’est juste pour avoir l’honneur de perdre face à une équipe espagnole ou anglaise. C’est devenu votre rôle.", intensity: 105}
]
},
axel: {
    'goal-barcelona': [
        {text: "Ouch, ca commence fort !", intensity: 5},
        {text: "Et ça commence... comme prévu !", intensity: 20},
        {text: "Les mecs ont l’avantage, mais défendent comme Thibaut Pinot dans une descente.", intensity: 30},
        {text: "Paris en Ligue des Champions, c’est toujours une belle promesse… et une fin tragique.", intensity: 40},
        {text: "On dirait Federer face à Nadal sur terre battue : ça résiste, mais on sait comment ça finit.", intensity: 50},
        {text: "Le mental est en train de partir en ski de fond sans bâtons.", intensity: 60},
        {text: "Cauvin, je t’annonce qu’on entre dans la zone rouge.", intensity: 70},
        {text: "Le PSG joue ce match comme un biathlète qui tire à 5/10 : ça va se payer.", intensity: 80},
        {text: "Le Titanic a mis plus de temps à couler.", intensity: 90},
        {text: "Paris a autant de maîtrise que Pinot en troisième semaine de Tour de France.", intensity: 95},
        {text: "C’est plié, il n’y a plus qu’à attendre l’abandon au 85e.", intensity: 100}
    ],
    'goal-psg': [
        {text: "Ah bon ? Ils ont le droit de marquer dans un match à élimination directe ?", intensity: 20},
        {text: "Paris qui marque en C1, c’est comme Federer à Wimbledon : ça faisait longtemps, mais ça fait plaisir.", intensity: 30},
        {text: "Belle action ! Maintenant, faut pas paniquer… mais c’est Paris.", intensity: 40},
        {text: "C’est bien de prendre de l’avance, mais si c’est pour tout jeter après...", intensity: 50},
        {text: "Ça sent le faux espoir.", intensity: 60},
        {text: "Cauvin respire un peu, mais ça va pas durer.", intensity: 70},
        {text: "Le PSG qui gère un avantage, c’est comme un biathlète qui veut tirer vite : on sait comment ça finit.", intensity: 80},
        {text: "J’annonce, on en parle encore dans 20 ans, mais pas pour de bonnes raisons.", intensity: 90},
        {text: "Si Paris se qualifie, je fais un pèlerinage à Roland-Garros.", intensity: 95},
        {text: "C’est bon, on peut mettre le bus et bétonner… ah non, c’est interdit à Paris.", intensity: 100}
    ],
    'penalty-barcelona': [
        {text: "Et voilà, fallait bien que ça arrive.", intensity: 20},
        {text: "Le PSG défend comme un cycliste qui oublie de ravitailler.", intensity: 30},
        {text: "L’arbitre a sorti le sifflet plus vite que Fourcade dans une mass start.", intensity: 40},
        {text: "Cauvin va commencer à parler d’arbitrage dans 3…2…1...", intensity: 50},
        {text: "Un pénalty contre Paris en C1 ? Comme c’est surprenant.", intensity: 60},
        {text: "La VAR en Ligue des Champions et le PSG, c’est un feuilleton Netflix.", intensity: 70},
        {text: "L’histoire retiendra que c’est ici que tout a basculé.", intensity: 80},
        {text: "Je vais chercher du popcorn, on entre dans l’acte final.", intensity: 90},
        {text: "Même Federer au tie-break est plus serein.", intensity: 95},
        {text: "Ce pénalty est le premier clou du cercueil.", intensity: 100}
    ],
    'card': [
        {text: "Un rouge pour Paris ? Ah bah, c’est pratique pour justifier la défaite.", intensity: 20},
        {text: "Ça commence à s’énerver, le mental fond comme de la neige au soleil.", intensity: 30},
        {text: "Bon, il reste combien de joueurs valides sur le terrain ?", intensity: 40},
        {text: "Paris en C1, c’est une masterclass d’auto-sabotage.", intensity: 50},
        {text: "Une erreur d’inattention, ça me rappelle un biathlète qui oublie une balle au tir.", intensity: 60},
        {text: "J’espère que les mecs ont pris une option théâtre au lycée.", intensity: 70},
        {text: "Avec ce niveau de discipline, même Bordeaux ferait mieux.", intensity: 80},
        {text: "Bon, c’est quoi le plan B ? Ah… y en a pas.", intensity: 90},
        {text: "Quand tu joues un match couperet, c’est mieux de pas finir à 9.", intensity: 95},
        {text: "Une expulsion à ce moment du match, c’est comme faire tomber son vélo en plein sprint.", intensity: 100}
    ],
    'missed-psg': [
        {text: "Si le barça marque, et que le PSG arrose, ca va devenir difficile", intensity: 5},
        {text: "Oh non… La fameuse précision ‘made in Ligue 1’.", intensity: 20},
        {text: "C’est quoi cette finition ? Même Pinot a plus de réussite dans un chrono.", intensity: 30},
        {text: "Le ballon va finir dans l’espace, il est sponsorisé par SpaceX.", intensity: 40},
        {text: "Le stade est en feu et lui cadre même pas... quelle masterclass.", intensity: 50},
        {text: "Paris devant le but en C1, c’est le sketch du siècle.", intensity: 60},
        {text: "J’espère qu’ils comptaient pas trop sur leurs attaquants pour passer.", intensity: 70},
        {text: "S’ils continuent, ils vont finir avec plus d’expected goals que Fourcade de médailles d’or.", intensity: 80},
        {text: "C’est officiel, même mon grand-père aurait marqué celui-là.", intensity: 90},
        {text: "On en est au niveau où même Federer en revers lifté aurait plus de réussite.", intensity: 95},
        {text: "Je propose qu’on annule les cages et qu’on fasse un concours de passes.", intensity: 100}
    ],
    ajout: [
    {text: "Franchement, si vous aviez la précision de Federer dans ses coups droits, vous seriez déjà qualifiés pour les quarts.", intensity: 0},
    {text: "Même Federer sur son déclin aurait plus de chance de remporter la Ligue des Champions que vous cette année.", intensity: 10},
    {text: "Si vous jouiez avec la régularité de Fourcade en biathlon, vous passeriez les phases de groupes sans souci.", intensity: 20},
    {text: "Franchement, avec un mental comme celui de Federer, vous seriez déjà en finale de la Ligue des Champions.", intensity: 25},
    {text: "C’est comme si vous couriez avec les pieds liés, alors que Fourcade court pour l’or avec son biathlon. Où est la cohésion ?", intensity: 30},
    {text: "Si votre équipe avait la précision de Fourcade sur la cible, vous feriez au moins 5-0 à chaque match en Coupe d'Europe.", intensity: 40},
    {text: "Avec la concentration de Federer lors de ses matchs importants, vous seriez déjà dans le dernier carré de la Ligue des Champions.", intensity: 50},
    {text: "Les clubs français en Coupe d’Europe, c’est un peu comme voir Federer perdre à Wimbledon : une surprise, mais aussi une déception.", intensity: 55},
    {text: "Si votre équipe avait la constance de Fourcade en Coupe du Monde, vous seriez en train de jouer la finale européenne, pas en train de pleurer.", intensity: 60},
    {text: "Franchement, même Federer à 40 ans aurait plus de chance de gagner la LDC que vous, avec toute votre équipe de stars.", intensity: 65},
    {text: "Fourcade a le mental pour tenir tête aux plus grands, et vous, vous ne tenez même pas 90 minutes face à une équipe européenne moyenne.", intensity: 70},
    {text: "Vous devriez peut-être suivre l'exemple de Federer : travail, mental et précision. Parce que là, c’est un peu la pagaille.", intensity: 75},
    {text: "Avec la régularité de Fourcade, vous seriez déjà en quarts. Mais non, vous préférez vous effondrer au moindre obstacle.", intensity: 80},
    {text: "Même Federer a su rebondir après ses défaites. Vous, vous n’arrivez même pas à vous relever après un match nul.", intensity: 85},
    {text: "Fourcade, il ne baisse jamais les bras, même après des échecs. C’est dommage que vos joueurs ne montrent pas la même détermination.", intensity: 90},
    {text: "Si vous aviez la mentalité de Federer sur un grand match, vous seriez au sommet de l’Europe. Mais vous préférez plier dès les 8èmes.", intensity: 95},
    {text: "Regardez Fourcade : il ne perd jamais espoir, même dans les moments difficiles. C’est peut-être ce qui manque à votre équipe.", intensity: 100},
    {text: "Avec l'attitude de Federer, vous n'auriez pas seulement survécu à la phase de groupes, vous seriez en train de dominer l'Europe.", intensity: 105}
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

let reactionTimeouts = []; // Pour stocker les timeouts et permettre l'annulation

function addNPCReaction(triggerType, event, intensity) {
    // Nettoyage des timeouts précédents
    reactionTimeouts.forEach(timeout => clearTimeout(timeout));
    reactionTimeouts = [];

    const characters = Object.keys(characterReactions).filter(c => c !== selectedCharacter);
    if (characters.length === 0) return;

    const eventType = event.team ? 
        `${event.type}-${event.team.toLowerCase()}` : 
        event.type;

    const reactionConfig = {
        'goal': { baseReactions: 4, variance: 2 },
        'foul': { baseReactions: 2, variance: 1 },
        'card-yellow': { baseReactions: 3, variance: 1 },
        'default': { baseReactions: 3, variance: 2 }
    };

    const config = reactionConfig[event.type] || reactionConfig.default;
    
    let reactionCount = Math.min(
        Math.max(
            config.baseReactions + Math.floor(Math.random() * (config.variance * 2 + 1)) - config.variance,
            1
        ),
        6
    );

    const reactingCharacters = characters
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(reactionCount, characters.length));

    // Nouvelle logique avec délais progressifs
    const DELAY_BETWEEN_REACTIONS = 1500; // 1500ms entre chaque réaction
    reactingCharacters.forEach((character, index) => {
        const timeout = setTimeout(() => {
            const specificReactions = characterReactions[character]?.[eventType] || [];
            const genericReactions = characterReactions[character]?.generic || [];
            const reactionPool = specificReactions.length > 0 ? specificReactions : genericReactions;
            
            const filteredReactions = reactionPool.filter(r => r.intensity <= intensity);

            if (filteredReactions.length > 0) {
                const randomReaction = filteredReactions[
                    Math.floor(Math.random() * filteredReactions.length)
                ];
                addReaction(character, randomReaction.text);
            }
        }, index * DELAY_BETWEEN_REACTIONS); // Délai croissant pour chaque réaction

        reactionTimeouts.push(timeout);
    });
}

export { characterReactions, addReaction, addNPCReaction };
