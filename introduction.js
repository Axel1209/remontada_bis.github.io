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
    const introText = `Il est 20h30, et l’appartement de Renaud ressemble déjà à un vestiaire après un match de district : des canettes un peu partout, des chips écrasées sur le canapé, et surtout, une ambiance électrique. 

Ce soir, c’est LE match retour du huitième de finale de Ligue des Champions : **Barcelone - PSG**. 

Autour de la table basse, une bande de joyeux lurons : Axel, Étienne, Bastien, Jean-Phi, Renaud et Dimitri. Et au milieu d’eux, tel un condamné à la veille de son exécution : **Cauvin, le seul supporter du PSG**. 

Mais attention, Cauvin n’est pas en mode supporter arrogant. **Non. Cauvin flippe.** Ce qui, évidemment, ne fait qu’amuser ses charmants amis. 

— Mais gros, c’est bon, vous avez gagné 4-0 à l’aller. Vous êtes **QUALIFIÉS**, c’est scientifique ! fait remarquer Dimitri en mordant dans sa pizza froide.  
— T’inquiète, même si Barcelone marque un but, ils en auront encore trois à mettre, c’est mission impossible, ajoute Étienne.  
— Après, Tom Cruise, il a bien réussi six fois de suite... enchaîne Jean-Phi, l'air songeur.  
— Ouais, mais ça, c’est du cinéma. Là, on est dans le vrai football. Pas de stress, hein... **Cauvinflipette.**  

Cauvin soupire. Il essaye d’y croire, mais il connaît trop bien son PSG. Lui, il voit le potentiel drame. Il l’imagine déjà : un but rapide du Barça, puis un deuxième... Non, faut pas penser comme ça.  

— Je vous jure, si on se prend un but avant la mi-temps, je vais pas être bien, lâche-t-il, les mains moites sur son verre de Coca. J'sais pas pourquoi j'ai accepté de venir ce soir, vous êtes déjà insupportables 
— Mec, on est là pour toi, t'inquiète pas. Bon, on se fout de ta gueule, mais on est là, le rassure Dimitri.  
— En tout cas, tu pourrais un peu profiter de la soirée, on va juste regarder une qualification pépère, tranquillou. Détends-toi un peu... **Cauvinflipette.**  

Le coup d’envoi approche. Les bières s’ouvrent. L’écran brille. Et tout le monde s’apprête à passer une **soirée sans histoire**...  

Enfin, c’est ce qu’ils croient.`;

    
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
