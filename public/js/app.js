// // PARTIE 1 : 
// Imports de classes
import { Personnages } from "./perso.js"
import { PokeMoon } from "./pokeMoon.js"
import { Attaques } from "./attaques.js"

// -------------------------------------------------------
// -------------------------------------------------------q

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 2 : STRUCTURE GENERALE
let body = document.body;
body.style.backgroundImage = "url('./public/img/textureBeige.jpeg')";

// Section Titre
let sectionTitre = document.createElement('section');
    // Div Titre
let divTitre = document.createElement('div');
let titre = document.createElement('h1');
titre.innerHTML = "POKEMOON"
divTitre.append(titre);

sectionTitre.append(divTitre);

// Sections de jeu
let section = document.createElement('section');
section.setAttribute('id', "cadre");
section.style.textAlign = "center"
    // Div de jeu
for(let i = 0; i < 8; i++){
    let div = document.createElement('div');
    div.style.height = "100%"
    section.append(div);
};
let divs = section.querySelectorAll('div');
// Insérer dans le body
body.prepend(sectionTitre, section);

// -------------------------------------------------------
// -------------------------------------------------------

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 3 : // STYLE 
// Section
let cadre = document.getElementById('cadre');
cadre.style.margin = "3% 10% 0% 10%";
cadre.style.padding = "4%";
cadre.style.height = "600px";
cadre.style.border = "dashed 2px black";
cadre.style.lineHeight = "2";

////////////    // Style Homepage  
    // Div0
divs[0].style.backgroundSize = "100vh";

let div0Intro = document.createElement('span');
div0Intro.innerHTML = "~ Bienvenue au jeu PokeMoon ~";
div0Intro.style.fontWeight = "bold";
div0Intro.style.fontSize = "28px";

let div0p1 = document.createElement('p');
div0p1.innerHTML = "Toute ressemblance avec un autre jeu ou personnages existants n'est que pure coïncidence °£°";
div0p1.style.fontSize = "24px";
div0p1.style.margin = "5% 0%";

let div0p2 = document.createElement('p');
div0p2.innerHTML = "Commandes: <br> Utilisez la souris pour séléctionner vos choix.";
div0p2.style.fontSize = "24px";
div0p2.style.margin = "5% 0%"

let boutonJouer = document.createElement('button');
boutonJouer.innerHTML = "Lancer le jeu";
boutonJouer.style.fontSize = "22px";
boutonJouer.style.margin = "3% 0% 0% 0%";
boutonJouer.style.padding = "1%";
boutonJouer.style.borderRadius = "5px";
boutonJouer.style.border = "3px solid black";

let credit = document.createElement('p');
credit.innerHTML = "- Codé et stylisé par E.T. -";
credit.style.padding = "7% 0% 0% 0%";
credit.style.fontSize = "16px";

divs[0].append(div0Intro, div0p1, div0p2, boutonJouer, credit);

// Affichage des autres divs
for (let i = 0; i < divs.length; i++) {
    if(i != 0){
        divs[i].style.display = "none";
    };
};

////////////    // Style lors du choix du personnage 
    // Div0




//    // Style lors de la promenade
// corps.style.backgroundImage = "url('./public/img/greenScreen.png')"

//    // Style Rencontre PokeMoon
// corps.style.backgroundImage = "none"

//    // Style Combat
// corps.style.backgroundImage = "none"

//    // Style Winner
// corps.style.backgroundImage = "none"

//    // Style Défaite
// corps.style.backgroundImage = "none"

//    // Style Rejouer ?
// corps.style.backgroundImage = "none"


// // commentaires supplémentaires
//      // /!\ Avertissement : Ce jeu à été créé à but parodique, plusieurs références et inside jokes y ont été placées. Prennez-le au second degré :)
// -------------------------------------------------------
// -------------------------------------------------------


// // PARTIE 2 : 
// // Introduction du jeu

//            // Ajouter une option QUITTER (`Vous pouvez quitter à tout moment en appuyant sur la touche Q`)
// -------------------------------------------------------
// -------------------------------------------------------

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 3:
// // Déclarer les objets et variables

//     // Personnages
//        // Instances Personnages
let perso1 = new Personnages("SuperBoi", "il");
let perso2 = new Personnages("WonderGal", "elle");
//        // Tableau Personnages
let tabPerso = [perso1, perso2];
// console.log(tabPerso);

//    // PokeMoon
//        // Instances PokeMoon
let salahess = new PokeMoon("Salahess", 0 ,400, "Feu");
let carapils = new PokeMoon("Carapils", 0 ,400, "Eau");
let bugbizarre = new PokeMoon("Bugbizarre", 0 ,400, "Plante");
//        // Tableau PokeMoon
let tabPokeMoon = [salahess, carapils, bugbizarre];

//    // Attaques
//        // Instances Attaques
//            // Salamèche
let griffe = new Attaques("Griffe", 40, 100, "Normal", 0);
let rugissementSala = new Attaques("Rugissement", 0, 100, "Normal", 0);
let flammèche = new Attaques("Flammèche", 40, 100, "Feu", 7);
//            // Carapuce
let coupDeBoule = new Attaques("Coup de Boule", 40, 100, "Normal", 0);
let mimiQueue = new Attaques("Mimi-Queue", 0, 100, "Normal", 4);
let pistoletaO = new Attaques("Pistolet à O", 40, 100, "Eau", 7);
//             //Bulbizarre
// // Charge same as Carapuce
let rugissementBug = new Attaques("Rugissement", 0, 100, "Normal", 3);
let fouetLianes = new Attaques("Fouet Lianes", 40, 100, "Plante", 7);
//        // Tableau Attaques
//            // Insérer l'option "Fuir" ET Charge pour Carapuce (trier dans un tableau inférieur ?)
let tabAttaques = [griffe, rugissementSala, flammèche, coupDeBoule, mimiQueue, pistoletaO, rugissementBug, fouetLianes]
// -------------------------------------------------------
// -------------------------------------------------------

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 4: Début du jeu
//        // Choix du personnage
// let persoUser = "";
boutonJouer.addEventListener('click', function(){
    divs[0].style.display = "none";
    divs[1].style.display = "block";

    // Style deuxième écran : Choix des personnages
        // Texte
    let div1p1 = document.createElement('p');
    div1p1.innerHTML = "Veuillez choisir votre personnage :";
    div1p1.style.fontSize = "30px";
    div1p1.style.margin = "5% 0%";
        // Boutons
    let div1Choix1 = document.createElement('button');
    div1Choix1.innerHTML = perso1.nom;

    let div1Choix2 = document.createElement('button');
    div1Choix2.innerHTML = perso2.nom;

    divs[1].append(div1p1, div1Choix1, div1Choix2);

    let div1Boutons = divs[1].querySelectorAll('button');
    
    for (let i = 0; i < div1Boutons.length; i++) {
        div1Boutons[i].style.fontSize = "24px";
        div1Boutons[i].style.margin = "1%";
        div1Boutons[i].style.padding = "1%";
        div1Boutons[i].style.borderRadius = "5px";
        div1Boutons[i].style.border = "3px solid black";
    };

    //// Bienvenue SuperBoi et promenade
    div1Choix1.addEventListener('click', function(){
        divs[1].style.display = "none";
        divs[2].style.display = "block";
    
        let div2p1 = document.createElement('p');
        div2p1.innerHTML = `Bienvenue dans cette aventure ${perso1.nom} !`;
        div2p1.style.fontSize = "30px";

        let div2Suivant = document.createElement('button');
        div2Suivant.innerHTML = "Suivant";
        div2Suivant.style.fontSize = "20px";
        div2Suivant.style.margin = "1%";
        div2Suivant.style.padding = "1%";
        div2Suivant.style.borderRadius = "5px";
        div2Suivant.style.border = "3px solid black";

        divs[2].append(div2p1, div2Suivant);
    });
    //// Bienvenue Wondergal et promenade
    div1Choix2.addEventListener('click', function(){
        divs[1].style.display = "none";
        divs[2].style.display = "block";
    
        let div2p1 = document.createElement('p');
        div2p1.innerHTML = `Bienvenue dans cette aventure ${perso2.nom} !`;
        div2p1.style.fontSize = "30px";

        let div2Suivant = document.createElement('button');
        div2Suivant.innerHTML = "Suivant";
        div2Suivant.style.fontSize = "20px";
        div2Suivant.style.margin = "1%";
        div2Suivant.style.padding = "1%";
        div2Suivant.style.borderRadius = "5px";
        div2Suivant.style.border = "3px solid black";

        divs[2].append(div2p1, div2Suivant);
    });

    
});

//    // Déclaration des variables
let continuer;
let option;
let pokeUser;

let quitter; // Ptet réutiliser à l'intérieur pour option Q
// -------------------------------------------------------
// // Boucle permettant de relancer la partie à partir de <<Promenade>>

// do {
        // // -------------------------------------------------------
//        // Le personnage se promène
//     alert(`${persoUser.nom} se promène paisiblement dans le Bois de la Cambre jusqu'à ce qu'${persoUser.genre} remarqua quelque chose de suspect.. Mais qu'est-ce ???`);
    
// //         // Random PokeMoon
//          let pRand = Math.floor(Math.random()*(tabPokeMoon.length -1));
//          let pokeRandom = tabPokeMoon[pRand];
    
// //        // Apparition PokeMoon
//     alert(`Un ${pokeRandom.nom} sauvage apparaît !!!`);

        // // -------------------------------------------------------
//        // Choix options
    // option = prompt(`Que choississez-vous de faire ?\nA. CHOISIR UN POKEMOON\nB. FUIR`).toLowerCase();

    //             // Choix option = Choisir un PokeMoon
    // if (option == "a") {
    //     pokeUser = prompt(`Quel PokeMoon souhaitez-vous mettre en jeu ?\nA. ${salahess.nom}\nB. ${carapils.nom}\nC. ${bugbizarre.nom}`).toLowerCase();

    // } 
//                // Choix option = Fuir (Sort du jeu + déshonore la famille)
    // else {
    //     alert(`Tsk tsk tsk... Je suis très déçue jeune Padawan`);
    //     alert(`La sentence est irrevocable. Ton aventure s'arrête ici...`)
    // }

// // Continuer à jouer ?
//     continuer = prompt(`Souhaitez-vous continuer à jouer ?\nA. OUI\nAutre. NON`).toLowerCase();

// } while (continuer == "a");

// // Quitter / Fin du jeu
// quitter = alert(`À très bientôt !`);

// FIN DU JEU








// -------------------------------------------------------
// -------------------------------------------------------
// Tests


// // TEST


//        // Style lors du choix du personnage
//     p1[0].innerHTML = "Veuillez choisir votre personnage :"

//     choix1[0].innerHTML = "SuperBoi"
//     choix2[0].innerHTML = "WonderGal"
// }

// let credit = document.getElementsByClassName('credit');
// credit[0].style.padding = "8% 0% 0% 0%"
// credit[0].style.fontSize = "16px"

// let choix1 = document.getElementsByClassName('choix1');

// let choix2 = document.getElementsByClassName('choix2');





//        // Choix du personnage
//    // Style lors du choix du personnage
// let persoUser = prompt(`Veuillez choisir votre personnage :\nA. ${perso1.nom}\nB. ${perso2.nom}`).toLowerCase();

// do {
//     if (persoUser == "a"){
//         persoUser = perso1;
//         alert(`Bienvenue dans cette aventure ${persoUser.nom} !`);
//     } else if (persoUser == "b") {
//         persoUser = perso2;
//         alert(`Bienvenue dans cette aventure ${persoUser.nom} !`);
//     } else {
//         persoUser = prompt(`Oopss.. Une erreur est arrivée. Veuillez réessayer.\nQuel est votre personnage ?\nA. ${perso1.nom}\nB. ${perso2.nom}`).toLowerCase();
//     };
// } while (persoUser == ("a"||"b"));




//    // Style lors de la promenade
// corps.style.backgroundImage = "url('./public/img/greenScreen.png')"

//    // Style Rencontre PokeMoon
// corps.style.backgroundImage = "none"

//    // Style Combat
// corps.style.backgroundImage = "none"

//    // Style Winner
// corps.style.backgroundImage = "none"

//    // Style Défaite
// corps.style.backgroundImage = "none"

//    // Style Rejouer ?
// corps.style.backgroundImage = "none"

























// Insérer dom dans JS (bruuuuuuuuh)

// Event Boutons OnClick

    // ATTENTION POSITION => Condition
// HTML
{/* <p>Quel personnage choisis-tu ?</p> */}
{/* <span>SuperBoi</span> <span>WonderGal</span> */}

// let choix = document.getElementsByTagName('span')
// choix[0].onclick = function() {myFunction()};
// choix[1].onclick = function() {myFunction2()};

// console.log(choix)

// function myFunction(){
//     choix[0].innerHTML = "ONE"
// }
// function myFunction2(){
//     choix[1].innerHTML = "TWO"
// }

