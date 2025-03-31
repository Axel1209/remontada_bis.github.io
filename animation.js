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
        gif.src = "https://raw.githubusercontent.com/Axel1209/remontada_bis.github.io/refs/heads/main/butbarca.gif";
        gif.style = `
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
            z-index: 9999;
        `;
        
        const text = document.createElement("div");
        text.innerText = "GOAAAAAAAAAAL";
        text.style = `
            position: fixed;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            font-weight: bold;
            color: black;
            z-index: 9999;
        `;
        
        document.body.appendChild(gif);
        document.body.appendChild(text);

        setTimeout(() => {
            gif.remove();
            text.remove();
            resolve(); // Déclenche la suite après 3 secondes
        }, 3400);
    });
}

// Fonction pour afficher le GIF de but PSG
export function displayGoalAnimationPSG() {
    return new Promise((resolve) => {
        const gif = document.createElement("img");
        // URL corrigée :
        gif.src = "https://raw.githubusercontent.com/Axel1209/remontada_bis.github.io/refs/heads/main/butpsg.gif";
        gif.style = `
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
            z-index: 9999;
        `;
        
        const text = document.createElement("div");
        text.innerText = "GOAAAAAAAAAAL";
        text.style = `
            position: fixed;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            font-weight: bold;
            color: black;
            z-index: 9999;
        `;
        
        document.body.appendChild(gif);
        document.body.appendChild(text);

        setTimeout(() => {
            gif.remove();
            text.remove();
            resolve(); // Déclenche la suite après 3 secondes
        }, 3400);
    });
}

// Fonction pour mettre un replay
export function displayreplay() {
    return new Promise((resolve) => {
        const gif = document.createElement("img");
        // URL corrigée :
        gif.src = "https://raw.githubusercontent.com/Axel1209/remontada_bis.github.io/c85ba27a06d4f61ab0fea6c091caa2d10f7fea78/sergiroberto.gif";
        gif.style = `
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
            z-index: 9999;
        `;
        
        const text = document.createElement("div");
        text.innerText = "GOAAAAAAAAAAl";
        text.style = `
            position: fixed;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            font-weight: bold;
            color: red;
            z-index: 9999;
        `;
        
        document.body.appendChild(gif);
        document.body.appendChild(text);

        setTimeout(() => {
            gif.remove();
            text.remove();
            resolve(); // Déclenche la suite après 3 secondes
        }, 3600);
    });
}

// Fonction photo cauvin
export function displayphotocauvin() {
    const images = [
        { id: "photo-cauvin", src: "photo_cauvin.jpg" },
        { id: "photo-cauvin2", src: "photo_cauvin2.jpg" },
        { id: "photo-cauvin3", src: "photo_cauvin3.jpg" }
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Supprimer l'image existante si elle est présente
    const existingImage = document.getElementById(selectedImage.id);
    if (existingImage) existingImage.remove();

    const img = document.createElement("img");
    img.id = selectedImage.id;
    img.src = selectedImage.src; // Chemin relatif ou URL
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
    setTimeout(() => img.remove(), 3000);
}

export function displayphotocauvinbarca() {
    const images = [
        { id: "photo-cauvinbarca", src: "cauvin_barca.jpg" }
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Supprimer l'image existante si elle est présente
    const existingImage = document.getElementById(selectedImage.id);
    if (existingImage) existingImage.remove();

    const img = document.createElement("img");
    img.id = selectedImage.id;
    img.src = selectedImage.src; // Chemin relatif ou URL
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
    setTimeout(() => img.remove(), 3000);
}
