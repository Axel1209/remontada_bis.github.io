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

// Fonction pour afficher le GIF de but
export function displayGoalAnimation() {
    return new Promise((resolve) => {
        const gif = document.createElement("img");
        // URL corrigée :
        gif.src = "https://raw.githubusercontent.com/Axel1209/remontada_bis.github.io/64a29c0a5939d6a3cdd84ed5cdec8f18b61ea0f1/sergiroberto.gif";
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

        setTimeout(() => {
            gif.remove();
            resolve(); // Déclenche la suite après 3 secondes
        }, 3400);
    });
}
