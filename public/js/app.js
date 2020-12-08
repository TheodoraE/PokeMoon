// // PARTIE 1 : 
// Imports de classes
import { Personnages } from "./perso.js"
import { PokeMoon } from "./pokeMoon.js"
import { Attaques } from "./attaques.js"


// -------------------------------------------------------
// -------------------------------------------------------

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 2 :
// Style
//    // Style Homepage  
let corps = document.body;
corps.style.backgroundImage = "url('./public/img/textureBeige.jpeg')"
corps.style.backgroundSize = "100vh"
corps.style.textAlign = "center"
console.log(corps)

let cadre = document.getElementById('cadre');
cadre.style.margin = "6% 12%"
cadre.style.padding = "5% 0% 2% 0%"
cadre.style.border = "dashed 2px black"
cadre.style.lineHeight = "2"

let intro = document.getElementById('intro');
intro.style.fontWeight = "bold"
intro.style.fontSize = "24px"


let p1 = document.getElementsByClassName('p1');
p1[0].style.fontSize = "22px"

console.log(p1[0])
// Attention tableau
let p2 = document.getElementsByClassName('p2');
p2[0].style.fontSize = "22px"

console.log(p2[0])

let quest = document.getElementsByClassName('quest');
quest[0].style.padding = "10% 0% 0% 0%"
quest[0].style.fontSize = "16px"

//    // Style lors du choix du personnage

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


// alert(`~ Bienvenue au jeu PokeMoon ~\nToute ressemblance avec un autre jeu ou personnages existants n'est que pure coïncidence °£°\n\n                                                             -  Codé par E.T.  -`);
//    // Commandes
// alert(`Commandes:\nLorsque le prompte vous propose "OK", appuyer sur 'ESPACE' ou 'ENTER'.\nPour répondre aux suggestions, utilisez les touches lettres du clavier.`);
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
// // PARTIE 4:
// // Début du jeu
//        // Choix du personnage
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


// -------------------------------------------------------
// // Boucle permettant de relancer la partie à partir de <<Promenade>>
//    // Déclaration des variables
let continuer;
let option;
let pokeUser;


let quitter; // Ptet réutiliser à l'intérieur pour option Q

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

// Insérer dom dans JS (bruuuuuuuuh)

// Event Boutons OnClick

    // ATTENTION POSITION => Condition
// HTML
{/* <p>Quel personnage choisis-tu ?</p> */}
{/* <span>SuperBoi</span> <span>WonderGal</span> */}

let choix = document.getElementsByTagName('span')
choix[0].onclick = function() {myFunction()};
choix[1].onclick = function() {myFunction2()};

console.log(choix)

function myFunction(){
    choix[0].innerHTML = "ONE"
}
function myFunction2(){
    choix[1].innerHTML = "TWO"
}

