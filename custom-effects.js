// custom-effects.js - Gestion des effets visuels/audio spécifiques aux options

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
