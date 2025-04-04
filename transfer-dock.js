// transfer-dock.js
export class TransferDockGame {
    constructor(onSuccess, onFail) {
        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.timeouts = [];
        this.animationFrame = null;
        this.boundDragMove = null;
        this.boundStopDrag = null;

        // Création du conteneur isolé
        this.container = document.createElement('div');
        this.container.id = 'transfer-dock-container';
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '1000'; // Assure un empilement correct
        this.container.innerHTML = `

     <style>
     /* --- Styles généraux --- */
     /* (Les styles body, html, #start-screen, etc. restent les mêmes) */
        body {
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
        }
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            overscroll-behavior: contain;
        }
        #start-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 1000;
        }
        #start-screen h1 {
            color: #333;
        }
        #start-screen p {
            max-width: 80%;
            margin: 20px;
            line-height: 1.6;
        }
         #start-screen ul {
             text-align: left;
             max-width: 80%;
         }
        #start-button {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #game-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black; /* Fond noir du jeu */
            display: none;
            z-index: 1;
            overflow: hidden; /* Empêche les éléments de dépasser */
        }

        /* --- Styles pour les images personnages --- */
        #player {
            position: absolute;
            width: 50px;  /* Ajustez si nécessaire */
            height: 50px; /* Ajustez si nécessaire */
            /* background-color: blue; Supprimé */
            /* border-radius: 50%; Supprimé */
            touch-action: none;
            z-index: 10;
            display: block; /* Important pour les images */
            object-fit: contain; /* Ou 'cover', selon le rendu désiré */
        }
        .enemy {
            position: absolute;
            width: 50px;  /* Ajustez si nécessaire */
            height: 50px; /* Ajustez si nécessaire */
            /* background-color: red; Supprimé */
            /* border-radius: 50%; Supprimé */
            /* display: flex; Supprimé */
            /* justify-content: center; Supprimé */
            /* align-items: center; Supprimé */
            /* color: white; Supprimé */
            /* font-size: 12px; Supprimé */
            z-index: 10;
            display: block; /* Important pour les images */
            object-fit: contain; /* Ou 'cover' */
        }

        /* --- Styles pour la télécommande et autres UI --- */
        #remote {
            position: absolute;
            width: 50px;
            height: 25px;
            background-color: gray;
            border-radius: 15px;
            z-index: 10;
        }
        #score {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 18px;
            color: white; /* Score visible sur fond noir */
            z-index: 10;
        }
        #game-over {
            /* display: none; */ /* Contrôlé par JS */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            color: white;
            display: none; /* Caché initialement */
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 1001; /* Au dessus du jeu */
        }
        #game-over h2 {
            margin-bottom: 20px;
        }
        #restart-button {
            padding: 10px 20px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>

    <!-- Écran de démarrage -->
    <div id="start-screen">
        <h1>Jeu de la Télécommande</h1>
        <p>Règles du jeu :</p>
        <ul>
            <li>Attrapez la télécommande (rectangle gris) pour changer de chaîne.</li>
            <li>Évitez vos amis (personnages rouges) qui vous poursuivent.</li>
            <li>Déplacez votre personnage bleu en le glissant avec le doigt/souris.</li>
            <li>Si un de vos amis vous touche, vous échouez et retournez au match !</li>
        </ul>
        <button id="start-button">Commencer</button>
    </div>

    <!-- Conteneur de jeu -->
    <div id="game-container">
        <div id="score">Score: 0</div>
        <!-- Remplacement du div par une image pour le joueur -->
        <img id="player" src="player_blue.svg" alt="Joueur (Cauvin)">
        <div id="remote"></div>
        <div id="game-over">
            <h2>Partie terminée !</h2>
            <p id="final-score">Votre score : 0</p>
            <!-- <button id="restart-button">Recommencer</button> --> <!-- On ne veut pas recommencer ici -->
        </div>
    </div>
        `;
    }

    start() {
        // Masquer l'application principale (si nécessaire et si l'ID existe)
        const mainApp = document.getElementById("main-application"); // Assurez-vous que cet ID existe dans votre HTML principal
        if (mainApp) {
            mainApp.style.pointerEvents = 'none';
            mainApp.style.opacity = '0.5';
        }

        document.body.appendChild(this.container);

        // Sélection des éléments *dans* le conteneur du mini-jeu
        const startScreen = this.container.querySelector('#start-screen');
        const gameContainer = this.container.querySelector('#game-container');
        const player = this.container.querySelector('#player'); // C'est maintenant une image
        const remote = this.container.querySelector('#remote');
        const scoreDisplay = this.container.querySelector('#score');
        const gameOverScreen = this.container.querySelector('#game-over');
        const finalScoreDisplay = this.container.querySelector('#final-score');
        const startButton = this.container.querySelector('#start-button');
        // const restartButton = this.container.querySelector('#restart-button'); // Pas de bouton recommencer ici

        // Vérification (bonne pratique)
         if (!startScreen || !gameContainer || !player || !remote || !scoreDisplay || !gameOverScreen || !finalScoreDisplay || !startButton) {
            console.error("Erreur : Un ou plusieurs éléments du mini-jeu n'ont pas été trouvés.");
            return;
        }

        let playerX, playerY;
        let score = 0;
        let enemies = [];
        let gameOver = false;
        const PLAYER_SIZE = 50; // Largeur/Hauteur de l'image joueur
        const ENEMY_SIZE = 50;  // Largeur/Hauteur de l'image ennemi
        const REMOTE_WIDTH = 50;
        const REMOTE_HEIGHT = 25;
        const enemyNames = ["Axel", "Jean phi", "Renaud", "Étienne", "Dimitri", "Bastien"]; // Noms pour l'attribut 'alt'

        // Bloquer le défilement sur mobile quand on touche le jeu
        this.container.addEventListener('touchstart', e => {
            // e.preventDefault(); // Attention, peut bloquer le drag du joueur si mal géré
        }, { passive: false });
        this.container.addEventListener('touchmove', e => e.preventDefault(), { passive: false });


        function initGame() {
            console.log("Initialisation du mini-jeu...");
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            gameOverScreen.style.display = 'none';

            // Forcer le reflow peut parfois aider si l'affichage initial bug
             gameContainer.offsetHeight;

            const containerRect = gameContainer.getBoundingClientRect();
            playerX = containerRect.width / 2 - PLAYER_SIZE / 2;
            playerY = containerRect.height / 2 - PLAYER_SIZE / 2;

            player.style.left = `${playerX}px`;
            player.style.top = `${playerY}px`;

            // Nettoyer les anciens ennemis avant d'en créer de nouveaux (si restart était implémenté)
             enemies.forEach(e => e.element.remove());
             enemies = [];

            enemyNames.forEach(name => createEnemy(name));
            placeRemote();

            score = 0;
            scoreDisplay.textContent = 'Score: 0'; // Affichage initial
            gameOver = false; // Réinitialiser l'état du jeu

            let isDragging = false;
            let offsetX, offsetY;

            // --- Gestion du Drag & Drop (Touch & Mouse) ---
            const startDrag = (clientX, clientY) => {
                 if (gameOver) return;
                const rect = player.getBoundingClientRect();
                // Calculer l'offset par rapport au coin supérieur gauche de l'élément
                offsetX = clientX - rect.left;
                offsetY = clientY - rect.top;
                isDragging = true;
                player.style.cursor = 'grabbing'; // Feedback visuel
            };

            const drag = (clientX, clientY) => {
                if (!isDragging || gameOver) return;

                // Calculer la nouvelle position du coin supérieur gauche du joueur
                playerX = clientX - offsetX;
                playerY = clientY - offsetY;

                const containerRect = gameContainer.getBoundingClientRect();
                // Contraindre le joueur à rester dans les limites du conteneur
                playerX = Math.max(0, Math.min(playerX, containerRect.width - PLAYER_SIZE));
                playerY = Math.max(0, Math.min(playerY, containerRect.height - PLAYER_SIZE));

                player.style.left = `${playerX}px`;
                player.style.top = `${playerY}px`;
            };

            const stopDrag = () => {
                if (isDragging) {
                    isDragging = false;
                    player.style.cursor = 'grab'; // Rétablir le curseur
                }
            };

            // Écouteurs pour Touch
            player.addEventListener('touchstart', (e) => {
                // Empêcher le défilement par défaut pendant le drag
                e.preventDefault();
                const touch = e.touches[0];
                startDrag(touch.clientX, touch.clientY);
            }, { passive: false }); // passive: false est important pour preventDefault

            player.addEventListener('touchmove', (e) => {
                 e.preventDefault(); // Empêcher le défilement
                const touch = e.touches[0];
                drag(touch.clientX, touch.clientY);
            }, { passive: false });

            player.addEventListener('touchend', stopDrag);
            player.addEventListener('touchcancel', stopDrag); // En cas d'interruption

            // Écouteurs pour Souris
            player.addEventListener('mousedown', (e) => {
                startDrag(e.clientX, e.clientY);
            });

            // Écouter sur document pour 'mousemove' et 'mouseup' pour que ça marche même si le curseur sort de l'élément joueur
             document.addEventListener('mousemove', (e) => {
                if (isDragging) { // Seulement si on est en train de drag
                    drag(e.clientX, e.clientY);
                }
            });
             document.addEventListener('mouseup', (e) => {
                 if (isDragging) { // Seulement si on était en train de drag
                     stopDrag();
                 }
             });
             // Style initial du curseur
             player.style.cursor = 'grab';


            // Lancer la boucle de jeu
            gameLoop();
        }

        function gameLoop() {
            if (gameOver) return; // Arrêter la boucle si le jeu est terminé

            updateEnemies();
            checkRemoteCapture();

            // Request next frame
            this.animationFrame = requestAnimationFrame(gameLoop.bind(this)); // Utiliser bind(this) si gameLoop utilise 'this'
        }
        // Assigner la méthode gameLoop à l'instance pour pouvoir l'arrêter plus tard si nécessaire
        this.currentGameLoop = gameLoop.bind(this);


        function createEnemy(name) {
            // Créer une image pour l'ennemi
            const enemy = document.createElement('img');
            enemy.className = 'enemy'; // Appliquer la classe CSS
            enemy.src = 'enemy_red.svg'; // Chemin vers l'image ennemie
            enemy.alt = name; // Texte alternatif pour l'accessibilité

            const containerRect = gameContainer.getBoundingClientRect();
            const side = Math.floor(Math.random() * 4); // 0: top, 1: bottom, 2: left, 3: right
            let startX, startY;

            // Position de départ aléatoire hors de l'écran
            switch(side) {
                case 0: // Haut
                    startX = Math.random() * (containerRect.width - ENEMY_SIZE);
                    startY = -ENEMY_SIZE; // Juste au-dessus
                    break;
                case 1: // Bas
                    startX = Math.random() * (containerRect.width - ENEMY_SIZE);
                    startY = containerRect.height; // Juste en dessous
                    break;
                case 2: // Gauche
                    startX = -ENEMY_SIZE; // Juste à gauche
                    startY = Math.random() * (containerRect.height - ENEMY_SIZE);
                    break;
                case 3: // Droite
                    startX = containerRect.width; // Juste à droite
                    startY = Math.random() * (containerRect.height - ENEMY_SIZE);
                    break;
            }

            enemy.style.left = `${startX}px`;
            enemy.style.top = `${startY}px`;
            gameContainer.appendChild(enemy);
            enemies.push({ element: enemy, x: startX, y: startY });
        }

        function updateEnemies() {
            const containerRect = gameContainer.getBoundingClientRect();
             // Récupérer la position actuelle du joueur (qui peut avoir été mise à jour par le drag)
             const playerRect = player.getBoundingClientRect();
             // Ajuster pour obtenir les coordonnées relatives au gameContainer si nécessaire,
             // mais comme gameContainer est fixed 0,0, les coords de getBoundingClientRect devraient être ok.
             // Sinon, il faudrait soustraire containerRect.left et containerRect.top
             const currentPlayerX = playerRect.left - containerRect.left;
             const currentPlayerY = playerRect.top - containerRect.top;


            enemies.forEach(enemy => {
                // Calculer la direction vers le joueur
                const dx = (currentPlayerX + PLAYER_SIZE / 2) - (enemy.x + ENEMY_SIZE / 2); // Centre à centre
                const dy = (currentPlayerY + PLAYER_SIZE / 2) - (enemy.y + ENEMY_SIZE / 2);
                const distance = Math.hypot(dx, dy);

                if (distance < 1) return; // Éviter division par zéro si superposés

                // Vitesse constante (ajustez la valeur pour changer la difficulté)
                const speed = 0.9 + (score * 0.05); // Augmenter légèrement la vitesse avec le score ?

                const velocityX = (dx / distance) * speed;
                const velocityY = (dy / distance) * speed;

                // Mettre à jour la position de l'ennemi
                enemy.x += velocityX;
                enemy.y += velocityY;

                 // Simple collision avec les bords (optionnel, ils pourraient sortir et revenir)
                 // enemy.x = Math.max(0, Math.min(enemy.x, containerRect.width - ENEMY_SIZE));
                 // enemy.y = Math.max(0, Math.min(enemy.y, containerRect.height - ENEMY_SIZE));

                // Appliquer la nouvelle position à l'élément DOM
                enemy.element.style.left = `${enemy.x}px`;
                enemy.element.style.top = `${enemy.y}px`;

                // Vérifier la collision avec le joueur
                if (checkCollision(currentPlayerX, currentPlayerY, PLAYER_SIZE, PLAYER_SIZE,
                                   enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE)) {
                    endGame(false); // Collision -> Échec
                }
            });
        }

        function placeRemote() {
            const containerRect = gameContainer.getBoundingClientRect();
            // Position aléatoire, en s'assurant qu'elle ne soit pas trop près des bords
            const margin = 20; // Marge pour éviter les bords
            remote.style.left = `${margin + Math.random() * (containerRect.width - REMOTE_WIDTH - 2 * margin)}px`;
            remote.style.top = `${margin + Math.random() * (containerRect.height - REMOTE_HEIGHT - 2 * margin)}px`;
        }

         function checkRemoteCapture() {
             if (gameOver) return; // Ne rien faire si le jeu est déjà fini

             const remoteRect = remote.getBoundingClientRect();
             const playerRect = player.getBoundingClientRect(); // Position actuelle du joueur

             // Vérification de collision simple (chevauchement des rectangles)
             if (playerRect.left < remoteRect.right &&
                 playerRect.right > remoteRect.left &&
                 playerRect.top < remoteRect.bottom &&
                 playerRect.bottom > remoteRect.top)
             {
                 score++; // Augmenter le score (ici, atteindre 1 suffit)
                 scoreDisplay.textContent = `Score: ${score}`;
                 // placeRemote(); // On ne replace pas la télécommande, le but est de l'attraper une fois
                 endGame(true); // Télécommande attrapée -> Succès
             }
         }


        // Fonction de détection de collision (AABB - Axis-Aligned Bounding Box)
        function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
             // Vérifie s'il n'y a PAS de collision sur l'axe X ou Y
            const noCollisionX = (x1 + w1 < x2) || (x1 > x2 + w2);
            const noCollisionY = (y1 + h1 < y2) || (y1 > y2 + h2);

             // S'il n'y a pas de non-collision sur X ET pas de non-collision sur Y, alors il y a collision
             return !(noCollisionX || noCollisionY);
        }


         // Modifiée pour utiliser this.onSuccess/this.onFail
        const endGame = (success) => {
            if (gameOver) return; // Empêcher d'appeler plusi

            console.log(`Fin du mini-jeu. Succès: ${success}`);
            gameOver = true; // Mettre l'état à terminé

            // Arrêter la boucle de jeu
             if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }

            // Arrêter le mouvement des ennemis (optionnel)
            // enemies.forEach(enemy => /* arrêter mouvement */);

            finalScoreDisplay.textContent = `Mission ${success ? 'réussie' : 'échouée'} !`; // Message de fin
            gameOverScreen.style.display = 'flex'; // Afficher l'écran de fin

            // Exécuter le callback approprié après un court délai pour montrer l'écran de fin
            setTimeout(() => {
                if (success) {
                    this.onSuccess(); // Appeler le callback de succès
                } else {
                    this.onFail(); // Appeler le callback d'échec
                }
                // Note : this.destroy() sera appelé par le code principal après onSuccess/onFail
            }, 1500); // Délai de 1.5 secondes avant de déclencher la suite
        }
        // Stocker endGame dans l'instance pour y accéder depuis les callbacks si nécessaire
        this.endGameCallback = endGame;


        // Lier les boutons
        startButton.addEventListener('click', initGame);
        startButton.disabled = false; // Assurez-vous que le bouton est cliquable

        // Pas de bouton restart dans ce scénario, on retourne au jeu principal
        // restartButton.addEventListener('click', restartGame);

    } // Fin de start()

    destroy() {
        console.log("Destruction du conteneur du mini-jeu.");
        // Annuler l'animation frame si elle tourne encore
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        // Nettoyer les timeouts restants
        this.timeouts.forEach(clearTimeout);
        this.timeouts = [];

        // Supprimer les écouteurs d'événements globaux ajoutés (mousemove, mouseup)
         document.removeEventListener('mousemove', this.boundDragMove); // Nécessite de stocker les fonctions liées
         document.removeEventListener('mouseup', this.boundStopDrag); // Nécessite de stocker les fonctions liées


        // Supprimer le conteneur du DOM
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }

        // Rétablir l'interaction avec l'application principale
        const mainApp = document.getElementById("main-application"); // Assurez-vous que cet ID existe
        if (mainApp) {
            mainApp.style.pointerEvents = 'auto';
            mainApp.style.opacity = '1';
        }
    }
}
