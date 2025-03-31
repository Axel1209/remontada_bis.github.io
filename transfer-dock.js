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
        this.container.innerHTML = `
            
     <style>
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
            background-color: white;
            display: none;
        }
        #player {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: blue;
            border-radius: 50%;
            touch-action: none;
        }
        .enemy {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 12px;
        }
        #remote {
            position: absolute;
            width: 50px;
            height: 25px;
            background-color: gray;
            border-radius: 15px;
        }
        #score {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 18px;
            z-index: 10;
        }
        #game-over {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 1000;
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
        <div id="player">Cauvin</div>
        <div id="remote"></div>
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
        const startScreen = document.getElementById('start-screen');
        const gameContainer = document.getElementById('game-container');
        const player = document.getElementById('player');
        const remote = document.getElementById('remote');
        const scoreDisplay = document.getElementById('score');
        const gameOverScreen = document.getElementById('game-over');
        const finalScoreDisplay = document.getElementById('final-score');
        const startButton = document.getElementById('start-button');
        const restartButton = document.getElementById('restart-button');
        
        let playerX, playerY;
        let score = 0;
        let enemies = [];
        let gameOver = false;
        const PLAYER_SIZE = 50;
        const ENEMY_SIZE = 50;
        const REMOTE_WIDTH = 50;
        const REMOTE_HEIGHT = 25;
        const enemyNames = ["Axel", "Jean phi", "Renaud", "Étienne", "Dimitri", "Bastien"];

        function initGame() {
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            gameOverScreen.style.display = 'none';
            
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
