// animation.js - Gestion des effets visuels/audio spécifiques aux options

// Fonction pour afficher l'image Top Chef
export function displayTopChefImage() {
    const existingImage = document.getElementById("topchef-image");
    if (existingImage) existingImage.remove();

    const img = document.createElement("img");
    img.id = "topchef-image";
    img.src = "topchef.jpg"; // Chemin relatif ou URL
    img.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80%;
        max-height: 80%;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
    `;
    
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 5000);
}

// Ajoutez ici d'autres fonctions pour d'options (ex: son, animations...)

// goal-animation.js - Gestion de l'animation des buts
export function displayGoalAnimation() {
    return new Promise((resolve) => {
        const gif = document.createElement("img");
        // Utilisez le chemin absolu depuis GitHub
        gif.src = "https://raw.githubusercontent.com/axel1209/remontada_bis/main/sergiroberto.gif";
        
        // ... (le reste du code reste identique)
        gif.style = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
            z-index: 9999;
        `;

        document.body.appendChild(gif);

        // Ajustez la durée si nécessaire (5000 = 5 secondes)
        setTimeout(() => {
            gif.remove();
            resolve();
        }, 5000); // Augmentez si votre GIF est plus long
    });
}
