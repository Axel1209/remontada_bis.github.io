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
                #transfer-dock-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    z-index: 10000;
                    touch-action: none;
                }
                
                #td-start-screen {
                    padding: 20px;
                    text-align: center;
                }
                
                .td-game-element {
                    position: absolute;
                    touch-action: none;
                    user-select: none;
                }
                
                #td-player {
                    width: 50px;
                    height: 50px;
                    background: blue;
                    border-radius: 50%;
                }
                
                .td-enemy {
                    width: 50px;
                    height: 50px;
                    background: red;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
            </style>
            
            <div id="td-start-screen">
                <h1>Changement de Chaîne</h1>
                <p>Attrapez la télécommande pour échapper au match !</p>
                <button id="td-start-button">Démarrer</button>
            </div>
            
            <div id="td-game-container" style="display: none;">
                <div id="td-score">Score: 0</div>
                <div id="td-player" class="td-game-element"></div>
                <div id="td-remote" class="td-game-element" style="width: 50px; height: 25px; background: grey;"></div>
            </div>
        `;
    }

    start() {
        document.body.appendChild(this.container);
        
        // Éléments du jeu
        const startButton = this.container.querySelector('#td-start-button');
        const gameContainer = this.container.querySelector('#td-game-container');
        const player = this.container.querySelector('#td-player');
        const remote = this.container.querySelector('#td-remote');
        const scoreDisplay = this.container.querySelector('#td-score');
        
        // Variables d'état
        let score = 0;
        let enemies = [];
        let isDragging = false;
        let playerX = 0, playerY = 0;
        
        // Initialisation
        startButton.addEventListener('click', () => {
            this.container.querySelector('#td-start-screen').style.display = 'none';
            gameContainer.style.display = 'block';
            initGame();
        });

        const initGame = () => {
            // Position initiale
            const bounds = gameContainer.getBoundingClientRect();
            playerX = bounds.width/2 - 25;
            playerY = bounds.height/2 - 25;
            updatePosition(player, playerX, playerY);
            
            // Événements tactiles
            player.addEventListener('touchstart', handleTouchStart);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
            
            // Boucle de jeu
            this.animationFrame = requestAnimationFrame(gameLoop);
        };

        const handleTouchStart = (e) => {
            isDragging = true;
            const touch = e.touches[0];
            const rect = player.getBoundingClientRect();
            this.offsetX = touch.clientX - rect.left;
            this.offsetY = touch.clientY - rect.top;
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            playerX = touch.clientX - this.offsetX;
            playerY = touch.clientY - this.offsetY;
            
            // Limites
            const bounds = gameContainer.getBoundingClientRect();
            playerX = Math.max(0, Math.min(playerX, bounds.width - 50));
            playerY = Math.max(0, Math.min(playerY, bounds.height - 50));
            
            updatePosition(player, playerX, playerY);
        };

        const handleTouchEnd = () => {
            isDragging = false;
        };

        const gameLoop = () => {
            // Logique du jeu...
            this.animationFrame = requestAnimationFrame(gameLoop);
        };

        const endGame = (success) => {
            cancelAnimationFrame(this.animationFrame);
            this.cleanup();
            success ? this.onSuccess() : this.onFail();
        };

        // Méthodes utilitaires
        const updatePosition = (element, x, y) => {
            element.style.transform = `translate(${x}px, ${y}px)`;
        };

        const checkCollision = (rect1, rect2) => {
            return !(rect1.right < rect2.left || 
                    rect1.left > rect2.right || 
                    rect1.bottom < rect2.top || 
                    rect1.top > rect2.bottom);
        };
    }

    cleanup() {
        // Nettoyage complet
        cancelAnimationFrame(this.animationFrame);
        this.timeouts.forEach(clearTimeout);
        this.container.remove();
    }

    destroy() {
        this.cleanup();
    }
}
