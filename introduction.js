// introduction.js - Gestion de l'introduction du jeu

document.addEventListener("DOMContentLoaded", () => {
    const introContainer = document.getElementById("intro-container");
    const startGameButton = document.getElementById("start-game-button");
    const gameContainer = document.getElementById("game-container");
    const gameFeed = document.getElementById("game-feed");
    const optionsContainer = document.getElementById("options-container");
    const commentaryFeed = document.getElementById("commentary-feed");
    const nextEventButton = document.getElementById("next-event-button");
    
    // Cacher tout le contenu du jeu au chargement
    gameContainer.style.display = "none";
    gameFeed.style.display = "none";
    optionsContainer.style.display = "none";
    commentaryFeed.style.display = "none";
    nextEventButton.style.display = "none";
    
    // Texte d'introduction
    const introText = "Nous sommes en 2017, le PSG a gagné 4-0 à l'aller contre Barcelone. Il ne reste plus qu'un match pour accéder aux quarts de finale...";
    
    // Affichage de l'introduction
    introContainer.innerHTML = `<p>${introText}</p>`;
    
    // Lancer le jeu après l'introduction
    startGameButton.addEventListener("click", () => {
        introContainer.style.display = "none";
        startGameButton.style.display = "none";
        gameContainer.style.display = "block";
        gameFeed.style.display = "block";
        optionsContainer.style.display = "block";
        commentaryFeed.style.display = "block";
        nextEventButton.style.display = "block";
    });
});
