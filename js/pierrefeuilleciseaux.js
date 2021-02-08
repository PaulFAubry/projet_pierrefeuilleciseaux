/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// On crée un tableau qui contient nos trois boutons.  
const boutons = document.querySelectorAll("button");
console.log(boutons);

// On crée un tableau qui contient nos trois images.  
const images = document.querySelectorAll("img");
console.log(images);

let nombreParties = 0;
let partiesGagnee = 0;
let partiesPerdues = 0;
let partiesEgalite = 0;

// Boucle qui récupère les éléments du tableau 'boutons'
for (let i = 0; i < boutons.length; i++) {
    // On écoute les boutons et lorsqu'on clique, la fonction anonyme se déclenche       
    boutons[i].addEventListener("click", function () {
        console.log("Ok ça marche !!!");
        // On récupère ce que le joueur a cliqué. 
        const joueur = boutons[i].innerHTML;
        console.log(joueur);
        // On définit ce que l'ordinateur va jouer, il jouera un bouton au hasard.
        // Math.floor() pour arrondir.
        // Math.random() retourne un nombre entre 0 et 1.
        // On multiplie Math.random() par la taille de notre tableau (3).
        // Math.floor(Math.random() * boutons.length) retourne 0, 1 ou 2.
        const ordi = boutons[Math.floor(Math.random() * boutons.length)].innerHTML;
        console.log(ordi);
        let resultat = "";
        // -------------- Logique du jeu -------------- //
        nombreParties++;
        if (joueur === ordi) {
            resultat = "Égalité";
            partiesEgalite++;
        } else if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Feuille" && ordi === "Pierre") || (joueur === "Ciseaux" && ordi === "Feuille")) {
            resultat = "Gagné !!!";
            partiesGagnee++;
        } else {
            resultat = "Perdu !!!";
            partiesPerdues++;
        }

        // On va chercher dans le document la classe "resultat".
        document.querySelector(".resultat").innerHTML = `
                    Joueur : ${joueur} </br>
                    Ordinateur : ${ordi} </br>  </br>
                    ${resultat}
                `;
        document.querySelector(".parties").innerHTML = `
                    Nombre de parties jouées : ${nombreParties} </br>
                    Parties gagnées : ${partiesGagnee} </br>
                    Parties perdues : ${partiesPerdues} </br>
                    Parties égalité : ${partiesEgalite} </br>
                `;
        console.log(`Joueur : ${joueur} VS Ordinateur : ${ordi}`);
    }); /// Fin de la fonction anonyme pour l'événement click      
}; /// Fin de la boucle FOR

// Boucle qui récupère les éléments du tableau 'images'
for (let i = 0; i < images.length; i++) {
    // On écoute les images et lorsqu'on clique sur les images, la fonction anonyme se déclenche       
    images[i].addEventListener("click", function () {
        console.log("Ok ça marche !!!");
        // On récupère ce que le joueur a cliqué. 
        const joueur = images[i].alt;
        console.log(joueur);
        // On définit ce que l'ordinateur va jouer, il jouera un bouton au hasard.
        // Math.floor() pour arrondir.
        // Math.random() retourne un nombre entre 0 et 1.
        // On multiplie Math.random() par la taille de notre tableau (3).
        // Math.floor(Math.random() * boutons.length) retourne 0, 1 ou 2.
        const ordi = images[Math.floor(Math.random() * images.length)].alt;
        console.log(ordi);
        let resultat = "";
        // -------------- Logique du jeu -------------- //
        nombreParties++;
        if (joueur === ordi) {
            resultat = "Égalité";
            partiesEgalite++;
        } else if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Feuille" && ordi === "Pierre") || (joueur === "Ciseaux" && ordi === "Feuille")) {
            resultat = "Gagné !!!";
            partiesGagnee++;
        } else {
            resultat = "Perdu !!!";
            partiesPerdues++;
        }

        // On va chercher dans le document la classe "resultat".
        document.querySelector(".resultat").innerHTML = `
                    Joueur : ${joueur} </br>
                    Ordinateur : ${ordi} </br>  </br>
                    ${resultat}
                `;
        document.querySelector(".parties").innerHTML = `
                    Nombre de parties jouées : ${nombreParties} </br>
                    Parties gagnées : ${partiesGagnee} </br>
                    Parties perdues : ${partiesPerdues} </br>
                    Parties égalité : ${partiesEgalite} </br>
                `;
        console.log(`Joueur : ${joueur} VS Ordinateur : ${ordi}`);
    });
};  /// Fin de la boucle FOR