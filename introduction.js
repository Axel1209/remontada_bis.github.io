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
    const introImage = "https://i.ytimg.com/vi/fyZCVDSXS60/maxresdefault.jpg";
    
    // Affichage de l'introduction avec l'image
    introContainer.innerHTML = `
        <img src="${introImage}" alt="Remontada PSG vs Barcelone" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;">
        <p>${introText}</p>
    `;
    
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
