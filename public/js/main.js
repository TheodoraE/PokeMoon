// // commentaires supplélentaires
// 
// // PARTIE 1 : 
// // Introduction du jeu
// alert(`~ Bienvenue au jeu PokeMoon ~\nToute ressemblance avec un autre jeu ou personnages existants n'est que pure coïncidence °£°`);
//    // Commandes
// alert(`Commandes:\nLorsque le prompte vous propose "OK", appuyer sur 'ESPACE' ou 'ENTER'.\nPour répondre aux suggestions, utilisez les touches lettres du clavier.`);
//            // Ajouter une option QUITTER (`Vous pouvez quitter à tout moment en appuyant sur la touche Q`)

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
let salamèche = new PokeMoon("Salamèche", 400, "Feu");
let carapuce = new PokeMoon("Carapuce", 400, "Eau");
let bulbizarre = new PokeMoon("Bulbizarre", 400, "Plante");
//        // Tableau PokeMoon
let tabPokeMoon = [salamèche, carapuce, bulbizarre];

                // Random
            let pRand = Math.round(Math.random()*(tabPokeMoon.length -1));
            let pokeRandom = tabPokeMoon[pRand];

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
let charge = new Attaques("Charge", 40, 100, "Normal", 0);
let mimiQueue = new Attaques("Mimi-Queue", 0, 100, "Normal", 4);
let pistoletaO = new Attaques("Pistolet à O", 40, 100, "Eau", 7);
//             //Bulbizarre
// // Charge same as Carapuce
let rugissementBulbi = new Attaques("Rugissement", 0, 100, "Normal", 3);
let fouetLianes = new Attaques("Fouet Lianes", 40, 100, "Plante", 7);
//        // Tableau Attaques
//            // Insérer l'option "Fuir" ET Charge pour Carapuce (trier dans un tableau inférieur ?)
let tabAttaques = [griffe, rugissementSala, flammèche, charge, mimiQueue, pistoletaO, rugissementBulbi, fouetLianes]


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

//        // Le personnage se promène
alert(`${persoUser.nom} se promène paisiblement dans le Bois de la Cambre jusqu'à ce qu'${persoUser.genre} remarqua quelque chose de suspect.. Mais qu'est-ce ???`);
alert(`Un ${pokeRandom.nom} sauvage apparaît !!!`);




// ajouter boucle "Souhaitez-vous continuer à jouer" avant promenade jusque après le combat