// introduction.js - Gestion de l'introduction du jeu

import { displayActions } from "./options.js";

document.addEventListener("DOMContentLoaded", () => {
    const introContainer = document.getElementById("intro-container");
    const startGameButton = document.getElementById("start-game-button");
    const characterSelection = document.getElementById("character-selection");
    const gameContainer = document.getElementById("game-container");
    const gameFeed = document.getElementById("game-feed");
    const optionsContainer = document.getElementById("options-container");
    const commentaryFeed = document.getElementById("commentary-feed");
    const nextEventButton = document.getElementById("next-event-button");

   const restartAppButton = document.getElementById("restart-app-button");
    if (restartAppButton) {
        restartAppButton.addEventListener("click", () => {
            // Optional: Confirmation dialog
            if (confirm("Êtes-vous sûr de vouloir recommencer depuis le début ? Toute progression sera perdue.")) {
                // Clear stored character selection before reload
                localStorage.removeItem("selectedCharacter");
                // Reload the entire page
                window.location.reload();
            }
        });
    } else {
        console.error("Restart button (#restart-app-button) not found!");
    }
    
    let selectedCharacter = "";

    // Cacher tout le contenu du jeu au chargement
    gameContainer.style.display = "none";
    gameFeed.style.display = "none";
    optionsContainer.style.display = "none";
    commentaryFeed.style.display = "none";
    nextEventButton.style.display = "none";
    characterSelection.style.display = "none"; // Cacher la sélection perso au départ
    
    // Texte d'introduction découpé en paragraphes
    const introText = [
        `<p>Il est 20h30, et l’appartement d’Axel ressemble déjà à un vestiaire après un match de district : des canettes un peu partout, des chips écrasées sur le canapé, et surtout, une ambiance électrique.</p>`,
        
        `<p>Ce soir, c’est LE match retour du huitième de finale de Ligue des Champions : <strong>Barcelone - PSG</strong>.<br>
        
        Autour de la table basse, une bande de joyeux lurons : Axel, Étienne, Bastien, Jean-Phi, Renaud et Dimitri. Et au milieu d’eux, tel un condamné à la veille de son exécution : <strong>Cauvin, le seul supporter du PSG</strong>.<br>
        
        Mais attention, Cauvin n’est pas en mode supporter arrogant. <strong>Non. Cauvin flippe.</strong> Ce qui, évidemment, ne fait qu’amuser ses charmants amis.</p>`,
        
        `<p>&mdash; Mais gros, c’est bon, vous avez gagné 4-0 à l’aller. Vous êtes <strong>QUALIFIÉS</strong>, c’est scientifique ! fait remarquer Bastien en mordant dans sa pizza froide.<br>
         T’inquiète, même si Barcelone marque un but, ils en auront encore trois à mettre, c’est mission impossible, ajoute Étienne.<br>
         Après, Tom Cruise, il a bien réussi six fois de suite... enchaîne Jean-Phi, l'air songeur.<br>
         Ouais, mais ça, c’est du cinéma. Là, on est dans le vrai football. Pas de stress, hein... <strong>Cauvinflipette.</strong></p>`,
        
        `<p>Cauvin soupire. Il essaye d’y croire, mais il connaît trop bien son PSG. Lui, il voit le potentiel drame. Il l’imagine déjà : un but rapide du Barça, puis un deuxième... Non, faut pas penser comme ça.</p>`,
        
        `<p>&mdash; Je vous jure, si on se prend un but avant la mi-temps, je vais pas être bien, lâche-t-il, les mains moites sur son verre de Coca.<br>
        &mdash; Mec, on est là pour toi, t'inquiète pas. Bon, on se fout de ta gueule, mais on est là, le rassure Dimitri.<br>
        &mdash; En tout cas, tu pourrais un peu profiter de la soirée, on va juste regarder une qualification pépère, tranquillou. Détends-toi un peu... <strong>Cauvinflipette.</strong></p>`,
        
        `<p>Le coup d’envoi approche. Les bières s’ouvrent. L’écran brille. Et tout le monde s’apprête à passer une <strong>soirée sans histoire</strong>...<br>
        
        Enfin, c’est ce qu’ils croient.</p>`
    ];

    const introImage = "https://i.ytimg.com/vi/fyZCVDSXS60/maxresdefault.jpg";
    
    // Affichage progressif
    introContainer.innerHTML = `
        <img src="${introImage}" alt="Remontada PSG vs Barcelone" style="max-width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;">
        <div id="text-display"></div>
        <button id="next-button" class="game-button" style="margin-top: 15px;">Suivant →</button>
    `;

    let currentTextIndex = 0;
    const textDisplay = document.getElementById("text-display");
    const nextButton = document.getElementById("next-button");

    // Afficher le texte progressivement
    function showNextText() {
        textDisplay.innerHTML = introText[currentTextIndex];
        currentTextIndex++;
        
        if(currentTextIndex === introText.length) {
            nextButton.style.display = "none";
            characterSelection.style.display = "block"; // Afficher la sélection de perso
        }
    }

    // Gestionnaire pour le bouton "Suivant"
    nextButton.addEventListener("click", showNextText);
    
    // Premier affichage
    showNextText();

    // Sélection du personnage
    document.querySelectorAll(".character-button").forEach(button => {
        button.addEventListener("click", () => {
            selectedCharacter = button.getAttribute("data-character");
            localStorage.setItem("selectedCharacter", selectedCharacter);
            characterSelection.style.display = "none";
            startGameButton.style.display = "block";
        });
    });
    
    // Lancer le jeu
    startGameButton.addEventListener("click", () => {
        introContainer.style.display = "none";
        startGameButton.style.display = "none";
        gameContainer.style.display = "block";
        gameFeed.style.display = "block";
        optionsContainer.style.display = "block";
        commentaryFeed.style.display = "block";
        nextEventButton.style.display = "block";
        displayActions();
    });
});
