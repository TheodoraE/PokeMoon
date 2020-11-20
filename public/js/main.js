// // commentaires supplélentaires
//      // /!\ Avertissement : Ce jeu à été créé à but parodique, plusieurs références et inside jokes y ont été placées. Prennez-le au second degré :)
// -------------------------------------------------------
// -------------------------------------------------------


// // PARTIE 1 : 
// // Introduction du jeu
alert(`~ Bienvenue au jeu PokeMoon ~\nToute ressemblance avec un autre jeu ou personnages existants n'est que pure coïncidence °£°\n\n                                                             -  Codé par E.T.  -`);
   // Commandes
alert(`Commandes:\nLorsque le prompte vous propose "OK", appuyer sur 'ESPACE' ou 'ENTER'.\nPour répondre aux suggestions, utilisez les touches lettres du clavier.`);
//            // Ajouter une option QUITTER (`Vous pouvez quitter à tout moment en appuyant sur la touche Q`)
// -------------------------------------------------------
// -------------------------------------------------------

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 2:
// // Déclarer les objets et variables
//     // Personnages
class Personnages {
    constructor(nom, genre, ){
        this.nom = nom,
        this.genre = genre
    }
};
//        // Instances Personnages
let perso1 = new Personnages("SuperBoi", "il");
let perso2 = new Personnages("WonderGal", "elle");
//        // Tableau Personnages
let tabPerso = [perso1, perso2];
// console.log(tabPerso);


//    // PokeMoon
class PokeMoon {
    constructor(nom, niveau, pv, type){
        this.nom = nom,
        this.niveau =niveau,
        this.pv = pv,
        this.type = type
    }
};
//        // Instances PokeMoon
let salahess = new PokeMoon("Salahess", 400, "Feu");
let carapils = new PokeMoon("Carapils", 400, "Eau");
let bugbizarre = new PokeMoon("Bugbizarre", 400, "Plante");
//        // Tableau PokeMoon
let tabPokeMoon = [salahess, carapils, bugbizarre];


//    // Attaques
class Attaques{
    constructor(nom, degat, precision, type, niveau){
        this.nom = nom,
        this.degat = degat,
        this.precison = precision,
        this.type = type,
        this.niveau = niveau
    }
};
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
// // PARTIE 3:
// // Début du jeu
//        // Choix du personnage
let persoUser = prompt(`Veuillez choisir votre personnage :\nA. ${perso1.nom}\nB. ${perso2.nom}`).toLowerCase();

do {
    if (persoUser == "a"){
        persoUser = perso1;
        alert(`Bienvenue dans cette aventure ${persoUser.nom} !`);
    } else if (persoUser == "b") {
        persoUser = perso2;
        alert(`Bienvenue dans cette aventure ${persoUser.nom} !`);
    } else {
        persoUser = prompt(`Oopss.. Une erreur est arrivée. Veuillez réessayer.\nQuel est votre personnage ?\nA. ${perso1.nom}\nB. ${perso2.nom}`).toLowerCase();
    };
} while (persoUser == ("a"||"b"));


// -------------------------------------------------------
// // Boucle permettant de relancer la partie à partir de <<Promenade>>
//    // Déclaration des variables
let continuer;
let option;
let pokeUser;


let quitter; // Ptet réutiliser à l'intérieur pour option Q

do {
        // // -------------------------------------------------------
//        // Le personnage se promène
    alert(`${persoUser.nom} se promène paisiblement dans le Bois de la Cambre jusqu'à ce qu'${persoUser.genre} remarqua quelque chose de suspect.. Mais qu'est-ce ???`);
    
//         // Random PokeMoon
         let pRand = Math.round(Math.random()*(tabPokeMoon.length -1));
         let pokeRandom = tabPokeMoon[pRand];
    
//        // Apparition PokeMoon
    alert(`Un ${pokeRandom.nom} sauvage apparaît !!!`);

        // // -------------------------------------------------------
//        // Choix options
    option = prompt(`Que choississez-vous de faire ?\nA. CHOISIR UN POKEMOON\nB. FUIR`).toLowerCase();

                // Choix option = Choisir un PokeMoon
    if (option == "a") {
        pokeUser = prompt(`Quel PokeMoon souhaitez-vous mettre en jeu ?\nA. ${salahess.nom}\nB. ${carapils.nom}\nC. ${bugbizarre.nom}`).toLowerCase();

    } 
//                // Choix option = Fuir (Sort du jeu + déshonore la famille)
    else {
        alert(`Tsk tsk tsk... Je suis très déçue jeune Padawan`);
        alert(`La sentence est irrevocable. Ton aventure s'arrête ici...`)
    }

// // Continuer à jouer ?
    // continuer = prompt(`Souhaitez-vous continuer à jouer ?\nA. OUI\nAutre. NON`).toLowerCase();

} while (continuer == "a");

// // Quitter / Fin du jeu
quitter = alert(`À très bientôt !`);









// -------------------------------------------------------
// -------------------------------------------------------
// Tests

// FIN DU JEU
//     if (continuer == "a"){

//  // Test
//    // Arrêt jeu
//     } else if (continuer == "b") {
//         alert(`À très bientôt !`)
//     } else {
//         continuer = prompt(`Oopss.. Une erreur est arrivée. Veuillez réessayer.\nSouhaitez-vous continuer à jouer ?\nA. OUI\nB. NON`).toLowerCase();
//     }
//     continuer = prompt(`Souhaitez-vous continuer à jouer ?\nA. OUI\nB. NON`).toLowerCase();

// -------------------------------------------------------
// BOUCLE RELANCER JEU
// for (let i = 0; i <=1; i++) {
//     if (i == 1) {
//         continuer = prompt(`Souhaitez-vous continuer à jouer ?\nA. OUI\nB. NON`).toLowerCase();
//     } else {
// //         // Le personnage se promène
//     alert(`${persoUser.nom} se promène paisiblement dans le Bois de la Cambre jusqu'à ce qu'${persoUser.genre} remarqua quelque chose de suspect.. Mais qu'est-ce ???`);
    
// //          // Random
//          let pRand = Math.round(Math.random()*(tabPokeMoon.length -1));
//          let pokeRandom = tabPokeMoon[pRand];
    
    
//     alert(`Un ${pokeRandom.nom} sauvage apparaît !!!`);
//     }
// }
