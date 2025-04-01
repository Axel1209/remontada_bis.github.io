// transfer-dock.js
export class TransferDockGame {
    constructor(onSuccess, onFail) {
        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.timeouts = [];
        this.animationFrame = null;
        
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
        
        * {
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
        }
        
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
            overflow: hidden;
        }
        
        /* Écran de démarrage */
        #start-screen {
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #45aaf2, #2b8cd8);
            color: white;
            padding: 20px;
        }
        
        #start-screen h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        #start-screen ul {
            list-style: none;
            padding: 0;
            max-width: 80%;
            line-height: 1.8;
        }
        
        #start-button {
            padding: 15px 40px;
            font-size: 1.2em;
            background: linear-gradient(135deg, #26de81, #20bf6b);
            border: none;
            border-radius: 25px;
            box-shadow: 0 5px 15px rgba(38, 222, 129, 0.3);
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        #start-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(38, 222, 129, 0.4);
        }
        
        /* Conteneur de jeu */
        #game-container {
            position: fixed;
            inset: 0;
            display: none;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        
        /* Joueur */
        #player {
            position: absolute;
            width: 60px;
            height: 60px;
            background: radial-gradient(circle, #4a90e2, #2a60d1);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        /* Ennemis */
        .enemy {
            position: absolute;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, #ff6b6b, #c62828);
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);
            animation: enemy-pulse 1.5s infinite;
        }
        
        @keyframes enemy-pulse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Télécommande */
        #remote {
            position: absolute;
            width: 60px;
            height: 30px;
            background: linear-gradient(135deg, #9e9e9e, #616161);
            border-radius: 15px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            transform: rotate(-5deg);
        }
        
        /* Score */
        #score {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 1.2em;
            color: #333;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        /* Game Over */
        #game-over {
            position: fixed;
            inset: 0;
            display: none;
            background: rgba(0,0,0,0.8);
            color: white;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        }
        
        #game-over h2 {
            font-size: 2em;
            margin-bottom: 20px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }
        
        #restart-button {
            padding: 15px 40px;
            font-size: 1.1em;
            background: linear-gradient(135deg, #ff6b6b, #c62828);
            border: none;
            border-radius: 25px;
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        #restart-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
        }
        
        /* Effets visuels supplémentaires */
        .enemy::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
            animation: enemy-glow 2s infinite;
        }
        
        @keyframes enemy-glow {
            0% { opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { opacity: 0.3; }
        }
        
        #game-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.1) 20px,
                rgba(255,255,255,0.1) 40px
            );
            opacity: 0.3;
            z-index: -1;
        }
    </style>
            
    <!-- Écran de démarrage -->
    <div id="start-screen">
        <h1>Jeu de la Télécommande</h1>
        <p>Règles du jeu :</p>
        <ul style="text-align: left; max-width: 80%;">
            <li>Attrapez la télécommande pour changer de chaine</li>
            <li>Évitez vos amis (les ronds rouges) qui vous poursuivent</li>
            <li>Déplacez votre cercle bleu en le glissant</li>
            <li>Si un de vos copains vous touche, vous échouez</li>
        </ul>
        <button id="start-button">Commencer</button>
    </div>
    <!-- Conteneur de jeu -->
    <div id="game-container">
        <div id="score">Score: 0</div>
        <div id="player" style="background-color: blue !important;">Cauvin</div>
        <div id="remote" style="background-color: blue !important;"></div>
        <div id="game-over">
            <h2>Partie terminée !</h2>
            <p id="final-score">Votre score : 0</p>
            <button id="restart-button">Recommencer</button>
        </div>
    </div>
        `;
    }

    start() {
        // Stop the main application

            const mainApp = document.getElementById("main-application");
    if (mainApp) {
        mainApp.style.pointerEvents = 'none';
        mainApp.style.opacity = '0.5';
    } else {
        console.error("Element with ID 'main-application' not found.");
    }

    document.body.appendChild(this.container);

        
        // Sélection des éléments principaux

        const startScreen = this.container.querySelector('#start-screen');
        const gameContainer = this.container.querySelector('#game-container');
        const player = this.container.querySelector('#player');
        const remote = this.container.querySelector('#remote');
        const scoreDisplay = this.container.querySelector('#score');
        const gameOverScreen = this.container.querySelector('#game-over');
        const finalScoreDisplay = this.container.querySelector('#final-score');
        const startButton = this.container.querySelector('#start-button');
        const restartButton = this.container.querySelector('#restart-button');
        
        let playerX, playerY;
        let score = 0;
        let enemies = [];
        let gameOver = false;
        const PLAYER_SIZE = 50;
        const ENEMY_SIZE = 50;
        const REMOTE_WIDTH = 50;
        const REMOTE_HEIGHT = 25;
        const enemyNames = ["Axel", "Jean phi", "Renaud", "Étienne", "Dimitri", "Bastien"];

            // Dans transfer-dock.js, ajouter :
document.addEventListener('touchstart', e => {
    if (e.target === player) e.preventDefault();
}, { passive: false });

        function initGame() {
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            gameOverScreen.style.display = 'none';

            gameContainer.style.opacity = '0.99';
            void gameContainer.offsetHeight; // Cette ligne déclenche le recalcul du layout
            gameContainer.style.opacity = '1';
            
            const container = gameContainer.getBoundingClientRect();
            playerX = container.width / 2 - PLAYER_SIZE / 2;
            playerY = container.height / 2 - PLAYER_SIZE / 2;
            
            player.style.left = `${playerX}px`;
            player.style.top = `${playerY}px`;
            
            enemyNames.forEach(name => createEnemy(name));
            placeRemote();
            
            score = 0;
            scoreDisplay.textContent = 'Score: 0';
            gameOver = false;
            
            let isDragging = false;
            let offsetX, offsetY;
            
            player.addEventListener('touchstart', (e) => {
                if (gameOver) return;
                const touch = e.touches[0];
                const rect = player.getBoundingClientRect();
                offsetX = touch.clientX - rect.left;
                offsetY = touch.clientY - rect.top;
                isDragging = true;
            });

            document.addEventListener('touchmove', (e) => {
                if (!isDragging || gameOver) return;
                const touch = e.touches[0];
                playerX = touch.clientX - offsetX;
                playerY = touch.clientY - offsetY;
                
                const containerRect = gameContainer.getBoundingClientRect();
                playerX = Math.max(0, Math.min(playerX, containerRect.width - PLAYER_SIZE));
                playerY = Math.max(0, Math.min(playerY, containerRect.height - PLAYER_SIZE));
                
                player.style.left = `${playerX}px`;
                player.style.top = `${playerY}px`;
            });

            document.addEventListener('touchend', () => isDragging = false);
            
            function gameLoop() {
                if (gameOver) return;
                updateEnemies();
                checkRemoteCapture();
                requestAnimationFrame(gameLoop);
            }
            gameLoop();
        }

        function createEnemy(name) {
            const enemy = document.createElement('div');
            enemy.className = 'enemy';
            enemy.textContent = name;
            
            const container = gameContainer.getBoundingClientRect();
            const side = Math.floor(Math.random() * 4);
            let startX, startY;
            
            switch(side) {
                case 0: 
                    startX = Math.random() * (container.width - ENEMY_SIZE);
                    startY = -ENEMY_SIZE;
                    break;
                case 1: 
                    startX = Math.random() * (container.width - ENEMY_SIZE);
                    startY = container.height;
                    break;
                case 2: 
                    startX = -ENEMY_SIZE;
                    startY = Math.random() * (container.height - ENEMY_SIZE);
                    break;
                case 3: 
                    startX = container.width;
                    startY = Math.random() * (container.height - ENEMY_SIZE);
                    break;
            }
            
            enemy.style.left = `${startX}px`;
            enemy.style.top = `${startY}px`;
            gameContainer.appendChild(enemy);
            enemies.push({ element: enemy, x: startX, y: startY });
        }

        function updateEnemies() {
            const container = gameContainer.getBoundingClientRect();
            enemies.forEach(enemy => {
                const dx = playerX - enemy.x;
                const dy = playerY - enemy.y;
                const distance = Math.hypot(dx, dy);
                if (distance === 0) return;
                
                const speed = 0.9;
                let velocityX = (dx / distance) * speed;
                let velocityY = (dy / distance) * speed;
                
                const nextX = enemy.x + velocityX;
                const nextY = enemy.y + velocityY;
                
                if (nextX < 0 || nextX + ENEMY_SIZE > container.width) {
                    velocityX = -velocityX;
                }
                if (nextY < 0 || nextY + ENEMY_SIZE > container.height) {
                    velocityY = -velocityY;
                }
                
                enemy.x += velocityX;
                enemy.y += velocityY;
                
                enemy.x = Math.max(0, Math.min(enemy.x, container.width - ENEMY_SIZE));
                enemy.y = Math.max(0, Math.min(enemy.y, container.height - ENEMY_SIZE));
                
                enemy.element.style.left = `${enemy.x}px`;
                enemy.element.style.top = `${enemy.y}px`;
                
                if (checkCollision(playerX, playerY, PLAYER_SIZE, PLAYER_SIZE, 
                                   enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE)) {
                    endGame(false);
                }
            });
        }

        function placeRemote() {
            const container = gameContainer.getBoundingClientRect();
            remote.style.left = `${Math.random() * (container.width - REMOTE_WIDTH)}px`;
            remote.style.top = `${Math.random() * (container.height - REMOTE_HEIGHT)}px`;
        }

        function checkRemoteCapture() {
            const remoteRect = remote.getBoundingClientRect();
            if (playerX < remoteRect.right &&
                playerX + PLAYER_SIZE > remoteRect.left &&
                playerY < remoteRect.bottom &&
                playerY + PLAYER_SIZE > remoteRect.top) {
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
                placeRemote();
                endGame(true);
            }
        }

        function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
            return !(x1 + w1 < x2 || 
                     x1 > x2 + w2 || 
                     y1 + h1 < y2 || 
                     y1 > y2 + h2);
        }

        function endGame(success) {
            gameOver = true;
            finalScoreDisplay.textContent = `Votre score : ${score}`;
            gameOverScreen.style.display = 'flex';
            
            if (success) {
                this.onSuccess();
            } else {
                this.onFail();
            }
        }

        function restartGame() {
            gameOverScreen.style.display = 'none';
            enemies.forEach(e => e.element.remove());
            enemies = [];
            initGame();
        }

        startButton.addEventListener('click', initGame);
        startButton.disabled = false; // Enable the start button
        restartButton.addEventListener('click', restartGame);
        document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
    }

    destroy() {
        // Remove the game container and reset styles
        document.body.removeChild(this.container);
        document.getElementById("main-application").style.pointerEvents = 'auto';
        document.getElementById("main-application").style.opacity = '1';
    }
}
