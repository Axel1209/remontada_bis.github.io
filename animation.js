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
        // Création de l'élément GIF
        const gif = document.createElement("img");
        gif.src = "goal-animation.gif"; // Chemin relatif ou URL
        gif.style = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
            z-index: 9999;
            pointer-events: none;
        `;

        document.body.appendChild(gif);

        // Suppression après 3 secondes (durée du GIF)
        setTimeout(() => {
            gif.remove();
            resolve(); // Résout la promesse quand le GIF est terminé
        }, 3000); 
    });
}
