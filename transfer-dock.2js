// transfer-dock.js
export class TransferDockGame {
    constructor(onSuccess, onFail) {
        this.onSuccess = onSuccess;
        this.onFail = onFail;
        this.timeouts = [];
        this.animationFrame = null; // Instance property to hold the animation frame ID
        this.boundDragMove = null;
        this.boundStopDrag = null;
        this.gameOver = false; // Instance property for game state

        this.container = document.createElement('div');
        this.container.id = 'transfer-dock-container';
        // ... (rest of container setup and innerHTML)
        this.container.innerHTML = `
          <style> /* ... styles ... */ </style>
          <div id="start-screen"> /* ... start screen HTML ... */ </div>
          <div id="game-container" style="display: none;"> /* ... game container HTML ... */ </div>
        `;
    }

    start() {
        const mainApp = document.getElementById("main-application");
        if (mainApp) {
            mainApp.style.pointerEvents = 'none';
            mainApp.style.opacity = '0.5';
        }

        document.body.appendChild(this.container);

        // Select elements *within* the minigame container
        const startScreen = this.container.querySelector('#start-screen');
        const gameContainer = this.container.querySelector('#game-container');
        const player = this.container.querySelector('#player');
        const remote = this.container.querySelector('#remote');
        const scoreDisplay = this.container.querySelector('#score');
        const gameOverScreen = this.container.querySelector('#game-over');
        const finalScoreDisplay = this.container.querySelector('#final-score');
        const startButton = this.container.querySelector('#start-button');

        // --- Game Variables (scoped to the start() execution) ---
        let playerX, playerY;
        let score = 0;
        let enemies = [];
        // Removed 'gameOver' from here, use this.gameOver from the instance

        const PLAYER_SIZE = 50;
        const ENEMY_SIZE = 50;
        const REMOTE_WIDTH = 50;
        const REMOTE_HEIGHT = 25;
        const enemyNames = ["Axel", "Jean phi", "Renaud", "Étienne", "Dimitri", "Bastien"];

        // --- Helper Functions (defined within start scope) ---

        const checkCollision = (x1, y1, w1, h1, x2, y2, w2, h2) => {
             return !( (x1 + w1 < x2) || (x1 > x2 + w2) || (y1 + h1 < y2) || (y1 > y2 + h2) );
        };

        // Define endGame using arrow function BEFORE it's potentially called
        // Arrow function ensures 'this' refers to the TransferDockGame instance
        const endGame = (success) => {
            if (this.gameOver) return; // Use instance gameOver flag
            console.log(`TransferDockGame ended via endGame. Success: ${success}`);
            this.gameOver = true; // Set instance flag

            // Cancel the animation frame using the instance property
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
                console.log("Animation frame cancelled.");
            } else {
                console.log("EndGame called but no animation frame ID found.");
            }


            finalScoreDisplay.textContent = `Mission ${success ? 'réussie' : 'échouée'} !`;
            gameOverScreen.style.display = 'flex';

            const callbackDelay = 1500;
            this.timeouts.forEach(clearTimeout);
            this.timeouts = [];

            const timeoutId = setTimeout(() => {
                try {
                    if (success) {
                        this.onSuccess();
                    } else {
                        this.onFail();
                    }
                } catch (err) {
                    console.error("Error in success/fail callback:", err);
                } finally {
                     // Ensure destroy is called even if callback fails
                    this.destroy();
                }
            }, callbackDelay);
            this.timeouts.push(timeoutId);
        };


        const updateEnemies = () => {
            const containerRect = gameContainer.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();
            const currentPlayerX = playerRect.left - containerRect.left;
            const currentPlayerY = playerRect.top - containerRect.top;

            enemies.forEach(enemy => {
                const speed = 0.9 + (score * 0.05);
                const dx = (currentPlayerX + PLAYER_SIZE / 2) - (enemy.x + ENEMY_SIZE / 2);
                const dy = (currentPlayerY + PLAYER_SIZE / 2) - (enemy.y + ENEMY_SIZE / 2);
                const distance = Math.hypot(dx, dy);

                if (distance > 1) {
                    const velocityX = (dx / distance) * speed;
                    const velocityY = (dy / distance) * speed;
                    enemy.x += velocityX;
                    enemy.y += velocityY;
                    enemy.element.style.left = `${enemy.x}px`;
                    enemy.element.style.top = `${enemy.y}px`;

                    if (checkCollision(currentPlayerX, currentPlayerY, PLAYER_SIZE, PLAYER_SIZE,
                                       enemy.x, enemy.y, ENEMY_SIZE, ENEMY_SIZE)) {
                        console.log("Collision detected with enemy.");
                        endGame(false); // Call the correct endGame
                    }
                }
            });
        };

        const placeRemote = () => {
            const containerRect = gameContainer.getBoundingClientRect();
            const margin = 20;
            remote.style.left = `${margin + Math.random() * (containerRect.width - REMOTE_WIDTH - 2 * margin)}px`;
            remote.style.top = `${margin + Math.random() * (containerRect.height - REMOTE_HEIGHT - 2 * margin)}px`;
        };

        const checkRemoteCapture = () => {
             // No need for gameOver check here, loop handles it
            const remoteRect = remote.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();

            if (playerRect.left < remoteRect.right &&
                playerRect.right > remoteRect.left &&
                playerRect.top < remoteRect.bottom &&
                playerRect.bottom > remoteRect.top)
            {
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
                console.log("Remote captured.");
                endGame(true); // Call the correct endGame
            }
        };

        const createEnemy = (name) => {
            const enemy = document.createElement('img');
            enemy.className = 'enemy';
            enemy.src = 'enemy_red.svg';
            enemy.alt = name;
            const containerRect = gameContainer.getBoundingClientRect();
            let startX, startY;
            const side = Math.floor(Math.random() * 4);
             switch(side) {
                 case 0: startX = Math.random() * (containerRect.width - ENEMY_SIZE); startY = -ENEMY_SIZE; break;
                 case 1: startX = Math.random() * (containerRect.width - ENEMY_SIZE); startY = containerRect.height; break;
                 case 2: startX = -ENEMY_SIZE; startY = Math.random() * (containerRect.height - ENEMY_SIZE); break;
                 case 3: startX = containerRect.width; startY = Math.random() * (containerRect.height - ENEMY_SIZE); break;
             }
            enemy.style.left = `${startX}px`;
            enemy.style.top = `${startY}px`;
            gameContainer.appendChild(enemy);
            enemies.push({ element: enemy, x: startX, y: startY });
        };

        // --- Define initGame ---
        const initGame = () => {
            console.log("Initialisation du mini-jeu...");
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            gameOverScreen.style.display = 'none';

            gameContainer.offsetHeight; // Reflow

            const containerRect = gameContainer.getBoundingClientRect();
            playerX = containerRect.width / 2 - PLAYER_SIZE / 2;
            playerY = containerRect.height / 2 - PLAYER_SIZE / 2;
            player.style.left = `${playerX}px`;
            player.style.top = `${playerY}px`;

            enemies.forEach(e => e.element.remove());
            enemies = [];
            enemyNames.forEach(name => createEnemy(name));

            placeRemote();

            score = 0;
            scoreDisplay.textContent = 'Score: 0';
            this.gameOver = false; // Reset instance gameOver flag IMPORTANT

            // --- Define the Game Loop using Arrow Function ---
            // Arrow function captures 'this' (the TransferDockGame instance) correctly
            const gameLoop = () => {
                // Check the instance flag
                if (this.gameOver) {
                    console.log("Game loop stopping because this.gameOver is true.");
                    // Ensure animationFrame is cleared if loop stops here unexpectedly
                     if (this.animationFrame) {
                         // console.log("Clearing animation frame from within loop check."); // Debug
                         // cancelAnimationFrame(this.animationFrame); // Let endGame handle cancellation
                         // this.animationFrame = null;
                     }
                    return; // Stop the loop
                }

                // Call helpers defined in the start() scope
                updateEnemies();
                checkRemoteCapture(); // This might set this.gameOver

                 // Only request next frame if game is NOT over
                 if (!this.gameOver) {
                     // 'this' refers to the TransferDockGame instance thanks to arrow function
                     // Store the frame ID on the instance
                     this.animationFrame = requestAnimationFrame(gameLoop);
                 } else {
                     console.log("Game loop detected gameOver, not requesting next frame.");
                      // Ensure frame ID is cleared if game ended but cancellation failed
                      if (this.animationFrame) {
                         // cancelAnimationFrame(this.animationFrame); // Let endGame handle it
                         // this.animationFrame = null;
                     }
                 }
            };

            // --- Start the Game Loop ---
            console.log("Starting game loop for the first time...");
            // Clear any previous frame before starting a new one (safety)
            if (this.animationFrame) {
                 console.log("Clearing existing animation frame before starting new loop.");
                 cancelAnimationFrame(this.animationFrame);
                 this.animationFrame = null;
             }
            // Initial call to start the loop
            this.animationFrame = requestAnimationFrame(gameLoop);
             console.log("Initial animation frame requested with ID:", this.animationFrame);


            // --- Setup Drag Listeners ---
            let isDragging = false;
            let offsetX = 0, offsetY = 0;

            const startDrag = (clientX, clientY) => {
                if (this.gameOver) return;
                const rect = player.getBoundingClientRect();
                offsetX = clientX - rect.left;
                offsetY = clientY - rect.top;
                isDragging = true;
                player.style.cursor = 'grabbing';
            };

            const drag = (clientX, clientY) => {
                if (!isDragging || this.gameOver) return;
                playerX = clientX - offsetX;
                playerY = clientY - offsetY;
                const contRect = gameContainer.getBoundingClientRect();
                playerX = Math.max(0, Math.min(playerX, contRect.width - PLAYER_SIZE));
                playerY = Math.max(0, Math.min(playerY, contRect.height - PLAYER_SIZE));
                player.style.left = `${playerX}px`;
                player.style.top = `${playerY}px`;
            };

            const stopDrag = () => {
                if (isDragging) {
                    isDragging = false;
                    player.style.cursor = 'grab';
                }
            };

            // Store bound functions for removal in destroy()
            this.boundDragMove = (e) => {
                if (isDragging) {
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    drag(clientX, clientY);
                }
            };
            this.boundStopDrag = () => {
                 if (isDragging) { stopDrag(); }
            };

            // Add listeners using bound functions
            player.addEventListener('touchstart', (e) => { e.preventDefault(); startDrag(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
            player.addEventListener('mousedown', (e) => { startDrag(e.clientX, e.clientY); });
            document.addEventListener('mousemove', this.boundDragMove);
            document.addEventListener('touchmove', this.boundDragMove, { passive: false });
            document.addEventListener('mouseup', this.boundStopDrag);
            document.addEventListener('touchend', this.boundStopDrag);
            player.style.cursor = 'grab';

        }; // --- End of initGame definition ---


        // --- Link Buttons / Initial Call ---
        startButton.addEventListener('click', initGame);
        startButton.disabled = false;
        this.container.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

    } // --- End of start() method ---

    destroy() {
        console.log("Destroying TransferDockGame instance...");
        // Ensure game loop is stopped if destroy is called unexpectedly
        this.gameOver = true; // Set flag to ensure loop stops
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
             console.log("Animation frame cancelled during destroy:", this.animationFrame);
            this.animationFrame = null;
        } else {
            console.log("Destroy called but no animation frame ID to cancel.");
        }


        this.timeouts.forEach(clearTimeout);
        this.timeouts = [];

        // Remove specific listeners using the stored bound functions
        if (this.boundDragMove) {
            document.removeEventListener('mousemove', this.boundDragMove);
            document.removeEventListener('touchmove', this.boundDragMove);
        }
        if (this.boundStopDrag) {
            document.removeEventListener('mouseup', this.boundStopDrag);
            document.removeEventListener('touchend', this.boundStopDrag);
        }
         // Clean up container touch listener
         // this.container.removeEventListener('touchmove', ...); // Need to store the bound function if we want to remove it

        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }

        const mainApp = document.getElementById("main-application");
        if (mainApp) {
            mainApp.style.pointerEvents = 'auto';
            mainApp.style.opacity = '1';
        }
         console.log("TransferDockGame destroyed.");
    }

    // No need for separate endGame method on the class,
    // the 'endGame' const defined within start() handles it using captured 'this'.

} // --- End of TransferDockGame class ---
