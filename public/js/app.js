// // PARTIE 1 : 
// Imports de classes
import {
    Personnages
} from "./perso.js"
import {
    PokeMoon
} from "./pokeMoon.js"
import {
    Attaques
} from "./attaques.js"

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 2 : STRUCTURE GENERALE
let body = document.body;
body.style.backgroundImage = "url('./public/img/textureBeige.jpeg')";
body.style.zIndex = -1;


let br = document.createElement('br');

// Section Titre
let sectionTitre = document.createElement('section');
// Div Titre
let divTitre = document.createElement('div');
let titre = document.createElement('h1');
titre.innerHTML = "POKEMOON";
titre.style.margin = "1%";
divTitre.append(titre);

sectionTitre.append(divTitre);

// Sections de jeu
let section = document.createElement('section');
section.setAttribute('id', "cadre");
section.style.textAlign = "center"
// Div de jeu
for (let i = 0; i < 9; i++) {
    let div = document.createElement('div');
    div.style.height = "100%"
    section.append(div);
};
let divs = section.querySelectorAll('div');
// Insérer dans le body
body.prepend(sectionTitre, section);

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
div0p1.innerHTML = "Voici un jeu inspiré des combats Pokemon. Have fun ! ";
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
credit.innerHTML = "- Codé et stylisé par E.T. - <br> Les images utilisées proviennent du site : https://www.hiclipart.com/";
credit.style.padding = "7% 0% 0% 0%";
credit.style.fontSize = "16px";

divs[0].append(div0Intro, div0p1, div0p2, boutonJouer, credit);

// Affichage des autres divs
for (let i = 0; i < divs.length; i++) {
    if (i != 0) {
        divs[i].style.display = "none";
    };
};

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 4:
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
let salahess = new PokeMoon("Salahess", 0, 400, "Feu");
let carapils = new PokeMoon("Carapils", 0, 400, "Eau");
let bugbizarre = new PokeMoon("Bugbizarre", 0, 400, "Plante");

let salahess2 = new PokeMoon("Salahess", 0, 400, "Feu");
let carapils2 = new PokeMoon("Carapils", 0, 400, "Eau");
let bugbizarre2 = new PokeMoon("Bugbizarre", 0, 400, "Plante");
//        // Tableau PokeMoon
let tabPokeMoon = [salahess2, carapils2, bugbizarre2];

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
let tabAttaques = [griffe, rugissementSala, flammèche, coupDeBoule, mimiQueue, pistoletaO, rugissementBug, fouetLianes];
let tabAttaquesSala = [griffe, rugissementSala, flammèche, "Fuir"];
let tabAttaquesCara = [coupDeBoule, mimiQueue, pistoletaO, "Fuir"];
let tabAttaquesBug = [coupDeBoule, rugissementBug, fouetLianes, "Fuir"];

// -------------------------------------------------------
// -------------------------------------------------------
// // PARTIE 5: Début du jeu
//        // Choix du personnage
let persoUser = "";
let pokeUser = "";
boutonJouer.addEventListener('click', function () {
    divs[0].style.display = "none";
    divs[1].style.display = "block";

    // Style deuxième écran : Choix des personnages
    // Texte
    let div1p1 = document.createElement('p');
    div1p1.innerHTML = "Veuillez choisir votre personnage :";
    div1p1.style.fontSize = "30px";
    div1p1.style.margin = "1% 0%";
    // Boutons
    let div1Choix1 = document.createElement('button');
    div1Choix1.innerHTML = perso1.nom;

    let div1Choix2 = document.createElement('button');
    div1Choix2.innerHTML = perso2.nom;
    // Images
    let img1 = document.createElement('img');
    img1.setAttribute('src', './public/img/Red.png');
    img1.setAttribute('alt', "");
    img1.style.height = "350px";
    img1.style.width = "150px";
    img1.style.margin = "2%";

    let img2 = document.createElement('img');
    img2.setAttribute('src', './public/img/Leaf.png');
    img2.setAttribute('alt', "");
    img2.style.height = "350px";
    img2.style.width = "150px";
    img2.style.margin = "2%";

    divs[1].append(div1p1, div1Choix1, div1Choix2, br);
    divs[1].append(img1, img2);

    let div1Boutons = divs[1].querySelectorAll('button');

    for (let i = 0; i < div1Boutons.length; i++) {
        div1Boutons[i].style.fontSize = "24px";
        div1Boutons[i].style.margin = "2%";
        div1Boutons[i].style.padding = "1%";
        div1Boutons[i].style.borderRadius = "5px";
        div1Boutons[i].style.border = "3px solid black";
    };

    let div2Suivant = document.createElement('button');

    for (let i = 0; i < div1Boutons.length; i++) {
        // Attribution des noms
        if (i === 0) {
            div1Boutons[0].addEventListener('click', function () {
                persoUser = perso1;
            });
        } else if (i === 1) {
            div1Boutons[1].addEventListener('click', function () {
                persoUser = perso2;
            });
        } else {

        };

        //// Bienvenue et promenade
        div1Boutons[i].addEventListener('click', function () {
            cadre.style.backgroundImage = "url('./public/img/greenScreen.png')";
            divs[1].style.display = "none";
            divs[2].style.display = "block";

            let div2p1 = document.createElement('p');
            div2p1.innerHTML = `Bienvenue dans cette aventure ${persoUser.nom} !`;
            div2p1.style.fontSize = "30px";

            let div2p2 = document.createElement('p');
            div2p2.innerHTML = `${persoUser.nom} se promène paisiblement dans le Bois de la Cambre jusqu'à ce qu'${persoUser.genre} remarqua quelque chose de suspect... <br> Mais qu'est-ce ???`;
            div2p2.style.fontSize = "28px";

            div2Suivant.innerHTML = "Suivant";
            div2Suivant.style.fontSize = "20px";
            div2Suivant.style.margin = "1%";
            div2Suivant.style.padding = "1%";
            div2Suivant.style.borderRadius = "5px";
            div2Suivant.style.border = "3px solid black";
            div2Suivant.style.backgroundColor = "lightgreen";

            divs[2].append(div2p1, div2p2, div2Suivant);
        });
    };

    // Apparition PokeMoon
    div2Suivant.addEventListener('click', function () {
        divs[2].style.display = "none";
        divs[3].style.display = "block";

        // Random PokeMoon
        let pRand = Math.floor(Math.random() * (tabPokeMoon.length));
        let pokeRandom = tabPokeMoon[pRand];
        // Paragraphe
        let div3p1 = document.createElement('p');
        div3p1.innerHTML = `Un ${pokeRandom.nom} sauvage apparaît !!!`;
        div3p1.style.fontSize = "30px";

        let img3 = document.createElement('img');
        switch (pRand) {
            case 0:
                img3.setAttribute('src', './public/img/Salameche2.png');
                break;
            case 1:
                img3.setAttribute('src', './public/img/Carapuce2.png');
                break;
            case 2:
                img3.setAttribute('src', './public/img/Bulbizarre2.png');
                break;
        }
        img3.setAttribute('alt', "");
        img3.style.height = "350px";
        img3.style.width = "350px";

        for (let i = 0; i < 2; i++) {
            var option = document.createElement('button');
            divs[3].append(option);
            var options = divs[3].querySelectorAll('button');

            // style button
            option.style.fontSize = "20px";
            option.style.margin = "1%";
            option.style.padding = "1%";
            option.style.borderRadius = "5px";
            option.style.border = "3px solid black";
            if (i === 0) {
                options[0].innerHTML = "Choisir un PokeMoon";
                options[0].style.backgroundColor = "lightgreen";
                // Option Choisir un PokeMoon
                options[0].addEventListener('click', function () {
                    cadre.style.backgroundImage = "url('./public/img/textureBeige.jpeg')";
                    divs[3].style.display = "none";
                    divs[5].style.display = "block";

                    // Texte
                    let div5p1 = document.createElement('p');
                    div5p1.innerHTML = "Quel PokeMoon souhaitez-vous mettre en jeu ?";
                    div5p1.style.fontSize = "30px";

                    // Choix PokeMoons
                    for (let i = 0; i < 3; i++) {
                        // Boutons
                        let choixPoke = document.createElement('button');
                        choixPoke.style.fontSize = "20px";
                        choixPoke.style.margin = "5% 6% 5% 6%";
                        choixPoke.style.padding = "1%";
                        choixPoke.style.borderRadius = "5px";
                        choixPoke.style.border = "3px solid black";

                        divs[5].append(choixPoke, br);
                    };
                    for (let i = 0; i < 3; i++) {
                        // Images PokeMoons
                        let choixImg = document.createElement('img');
                        choixImg.style.height = "200px";
                        choixImg.style.width = "160px";
                        choixImg.style.margin = "4%";

                        divs[5].append(choixImg);
                    };

                    // Tous les boutons choix et images
                    let choixPokes = divs[5].querySelectorAll('button');
                    let choixImgs = divs[5].querySelectorAll('img');

                    for (let i = 0; i < choixPokes.length; i++) {
                        // Salahess
                        if (i === 0) {
                            choixImgs[0].setAttribute('src', './public/img/Salameche1.png');
                            choixPokes[0].innerHTML = `${salahess.nom}`;
                        } else if (i === 1) {
                            // Carapils
                            choixImgs[1].setAttribute('src', './public/img/Carapuce1.png');
                            choixPokes[1].innerHTML = `${carapils.nom}`;
                        } else if (i === 2) {
                            // Bugbizarre
                            choixImgs[2].setAttribute('src', './public/img/Bulbizarre1.png');
                            choixPokes[2].innerHTML = `${bugbizarre.nom}`;
                        }
                    };
                    divs[5].prepend(div5p1);

                    // Choix PokeMoon
                    // Salahess
                    choixPokes[0].addEventListener('click', function () {
                        pokeUser = salahess;

                        divs[5].style.display = "none";
                        divs[6].style.display = "block";

                        // Affichage de l'adversaire
                        let divAdversaire = document.createElement('div');
                        divAdversaire.style.height = "250px";
                        divAdversaire.style.display = "flex";
                        divAdversaire.style.flexDirection = "column";

                        let div6imgadv = document.createElement('img');
                        switch (pokeRandom) {
                            case salahess2:
                                div6imgadv.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils2:
                                div6imgadv.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre2:
                                div6imgadv.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        }
                        div6imgadv.setAttribute('alt', "");
                        div6imgadv.style.height = "175px";
                        div6imgadv.style.width = "175px";
                        div6imgadv.style.display = "flex";
                        div6imgadv.style.placeSelf = "flex-end";

                        // Niveau de vie
                        let divPvAdv = document.createElement('div');
                        divPvAdv.style.display = "flex";
                        divPvAdv.style.justifyContent = "flex-end";

                        let pvAdv = document.createElement('span');
                        pvAdv.style.border = "none";
                        pvAdv.style.width = "50px";
                        pvAdv.innerHTML = pokeRandom.pv;
                        pvAdv.style.fontSize = "20px";
                        pvAdv.style.fontWeight = "bold";
                        pvAdv.style.textDecoration = "underline";
                        let pvAdv2 = document.createElement('span');
                        pvAdv2.innerHTML = ` /400 pv`;
                        pvAdv2.style.fontSize = "20px";
                        pvAdv2.style.fontWeight = "bold";
                        pvAdv2.style.textDecoration = "underline";
                        pvAdv2.style.margin = "0% 2% 0% 0%";

                        divPvAdv.append(pvAdv, pvAdv2);

                        divAdversaire.append(div6imgadv, divPvAdv);

                        // Affichage de mon Pokemon
                        let divUser = document.createElement('div');
                        divUser.style.display = "flex";

                        let divPvUser = document.createElement('div');
                        divPvUser.style.display = "flex";
                        divPvUser.style.justifyContent = "flex-end";

                        let pvUser = document.createElement('span');
                        pvUser.style.border = "none";
                        pvUser.style.width = "50px";
                        pvUser.innerHTML = pokeUser.pv;
                        pvUser.style.fontSize = "20px";
                        pvUser.style.fontWeight = "bold";
                        pvUser.style.textDecoration = "underline";
                        pvUser.style.marginBottom = "5%";
                        let pvUser2 = document.createElement('span');
                        pvUser2.innerHTML = ` /400 pv`;
                        pvUser2.style.fontSize = "20px";
                        pvUser2.style.fontWeight = "bold";
                        pvUser2.style.textDecoration = "underline";
                        pvUser2.style.margin = "0% 2% 0% 0%";
                        pvUser2.style.marginBottom = "5%";

                        divPvUser.append(pvUser, pvUser2);

                        let div6imgpoke = document.createElement('img');
                        switch (pokeUser) {
                            case salahess:
                                div6imgpoke.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils:
                                div6imgpoke.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre:
                                div6imgpoke.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        };
                        div6imgpoke.setAttribute('alt', "");
                        div6imgpoke.style.height = "175px";
                        div6imgpoke.style.width = "175px";

                        // Affichage des commandes
                        let divAttaques = document.createElement('div');
                        divAttaques.style.border = "2px solid black";
                        divAttaques.style.borderRadius = "5px";
                        divAttaques.style.display = "flex";
                        divAttaques.style.flexWrap = "wrap";
                        divAttaques.style.justifyContent = "center";
                        divAttaques.style.padding = "2%";

                        divAttaques.style.fontSize = "25px";

                        let divComment = document.createElement('div');
                        divComment.style.width = "80%";
                        divComment.style.height = "350px";
                        divComment.style.display = "flex";
                        divComment.style.alignItems = "center";
                        divComment.style.justifyContent = "flex-end";
                        //Phrase de commentaire
                        let comment = document.createElement('p');
                        comment.style.fontFamily = "arial";
                        comment.style.fontSize = "18px";
                        comment.style.fontWeight = "bold"
                        comment.style.margin = "8%";
                        comment.innerHTML = ``;
                        divComment.append(comment);

                        let divTemp = document.createElement('div');
                        divTemp.style.width = "20%";
                        divTemp.append(div6imgpoke, divPvUser, divAttaques);

                        divUser.append(divTemp, divComment);
                        divs[6].append(divAdversaire, divUser);

                        for (let i = 0; i < tabAttaquesSala.length; i++) {
                            let div6attaque = document.createElement('button');
                            div6attaque.style.margin = "0.5%";
                            div6attaque.style.border = "none";
                            div6attaque.style.fontSize = "16px";
                            div6attaque.style.backgroundColor = "transparent";
                            div6attaque.style.fontWeight = "bold";

                            divAttaques.append(div6attaque);
                            let div6attaques = divs[6].querySelectorAll('button');

                            switch (i) {
                                case 0:
                                    div6attaques[0].innerHTML = `${tabAttaquesSala[0].nom}`;
                                    // Griffe                                   
                                    div6attaques[0].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesSala[0].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesSala[0].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesSala[0].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = pokeUser.pv;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        };
                                    });
                                    // Stopper à 0
                                    div6attaques[0].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });
                                    break;
                                case 1:
                                    div6attaques[1].innerHTML = `${tabAttaquesSala[1].nom}`;
                                    // Rugissement
                                    div6attaques[1].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesSala[1].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesSala[1].nom} " Ce n'est pas efficace... <br> ${pokeRandom.nom} adverse est juste effrayé`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = pokeUser.pv;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };

                                                    // Stopper à 0
                                                    if (pvUser.innerHTML == "0") {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                                        let div6boutonSuivant = document.createElement('button');
                                                        div6boutonSuivant.innerHTML = "Suivant";
                                                        div6boutonSuivant.style.padding = "3%";
                                                        div6boutonSuivant.style.fontSize = "18px";
                                                        div6boutonSuivant.style.backgroundColor = "yellow";

                                                        divComment.append(div6boutonSuivant);
                                                        /// Défaite
                                                        div6boutonSuivant.addEventListener('click', function () {
                                                            divs[6].style.display = "none";
                                                            divs[7].style.display = "block";

                                                            let div7Title = document.createElement('div');

                                                            let div7title = document.createElement('h1');
                                                            div7title.innerHTML = `DEFAITE...`;
                                                            div7title.style.margin = "0.5%";

                                                            let div7title2 = document.createElement('h2');
                                                            div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                            let gifNo = document.createElement('img');
                                                            gifNo.setAttribute('src', './public/img/torche.gif');

                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = `Wanna replay ?`
                                                            replay.style.padding = "1% 2%";
                                                            replay.style.margin = "1%";

                                                            replay.addEventListener('click', function () {
                                                                location.reload();
                                                            });

                                                            let avis = document.createElement('p');
                                                            avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                            avis.style.fontSize = "14px";

                                                            div7Title.append(div7title, div7title2);

                                                            divs[7].append(div7Title, gifNo, br, replay, avis);
                                                        });
                                                    };
                                                }
                                            }, 1500);
                                        }
                                    });
                                    break;
                                case 2:
                                    div6attaques[2].innerHTML = `${tabAttaquesSala[2].nom}`;
                                    // Flammèche
                                    div6attaques[2].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesSala[2].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesSala[2].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesSala[2].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = pokeUser.pv;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    // Stopper à 0
                                    div6attaques[2].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });
                                    break;
                                case 3:
                                    div6attaques[3].innerHTML = `${tabAttaquesSala[3]}`;
                                    //fuir
                                    div6attaques[3].addEventListener('click', function () {
                                        // Nouvelle page
                                        divs[6].style.display = "none";
                                        options[1].click();
                                    });
                                    break;
                            };
                        };

                        let div6Faire = document.createElement('p');
                        div6Faire.innerHTML = `Que voulez-vous faire ?`;
                        div6Faire.style.fontSize = "18px";
                        div6Faire.style.margin = "0% 8%";
                        divAttaques.prepend(div6Faire);

                    });
                    // Carapils
                    choixPokes[1].addEventListener('click', function () {
                        pokeUser = carapils;

                        divs[5].style.display = "none";
                        divs[6].style.display = "block";

                        // Affichage de l'adversaire
                        let divAdversaire = document.createElement('div');
                        divAdversaire.style.height = "250px";
                        divAdversaire.style.display = "flex";
                        divAdversaire.style.flexDirection = "column";

                        let div6imgadv = document.createElement('img');
                        switch (pokeRandom) {
                            case salahess2:
                                div6imgadv.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils2:
                                div6imgadv.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre2:
                                div6imgadv.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        }
                        div6imgadv.setAttribute('alt', "");
                        div6imgadv.style.height = "175px";
                        div6imgadv.style.width = "175px";
                        div6imgadv.style.display = "flex";
                        div6imgadv.style.placeSelf = "flex-end";

                        // Niveau de vie
                        let divPvAdv = document.createElement('div');
                        divPvAdv.style.display = "flex";
                        divPvAdv.style.justifyContent = "flex-end";

                        let pvAdv = document.createElement('span');
                        pvAdv.innerHTML = pokeRandom.pv;
                        pvAdv.style.fontSize = "20px";
                        pvAdv.style.fontWeight = "bold";
                        pvAdv.style.textDecoration = "underline";
                        pvAdv.style.margin = "0% 0% 0% 2%";
                        let pvAdv2 = document.createElement('span');
                        pvAdv2.innerHTML = ` /400 pv`;
                        pvAdv2.style.fontSize = "20px";
                        pvAdv2.style.fontWeight = "bold";
                        pvAdv2.style.textDecoration = "underline";
                        pvAdv2.style.margin = "0% 2% 0% 0%";

                        divPvAdv.append(pvAdv, pvAdv2);

                        divAdversaire.append(div6imgadv, divPvAdv);

                        // Affichage de mon Pokemon
                        let divUser = document.createElement('div');
                        divUser.style.display = "flex";

                        let divPvUser = document.createElement('div');
                        divPvUser.style.display = "flex";
                        divPvUser.style.justifyContent = "flex-end";

                        let pvUser = document.createElement('span');
                        pvUser.innerHTML = pokeUser.pv;
                        pvUser.style.fontSize = "20px";
                        pvUser.style.fontWeight = "bold";
                        pvUser.style.textDecoration = "underline";
                        pvUser.style.margin = "0% 0% 0% 2%";
                        pvUser.style.marginBottom = "5%";
                        let pvUser2 = document.createElement('span');
                        pvUser2.innerHTML = ` /400 pv`;
                        pvUser2.style.fontSize = "20px";
                        pvUser2.style.fontWeight = "bold";
                        pvUser2.style.textDecoration = "underline";
                        pvUser2.style.margin = "0% 2% 0% 0%";
                        pvUser2.style.marginBottom = "5%";

                        divPvUser.append(pvUser, pvUser2);

                        let div6imgpoke = document.createElement('img');
                        switch (pokeUser) {
                            case salahess:
                                div6imgpoke.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils:
                                div6imgpoke.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre:
                                div6imgpoke.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        };
                        div6imgpoke.setAttribute('alt', "");
                        div6imgpoke.style.height = "175px";
                        div6imgpoke.style.width = "175px";

                        // Affichage des commandes                       
                        let divAttaques = document.createElement('div');
                        divAttaques.style.border = "2px solid black";
                        divAttaques.style.borderRadius = "5px";
                        divAttaques.style.display = "flex";
                        divAttaques.style.flexWrap = "wrap";
                        divAttaques.style.justifyContent = "center";
                        divAttaques.style.padding = "2%";

                        divAttaques.style.fontSize = "25px";

                        let divComment = document.createElement('div');
                        divComment.style.width = "75%";
                        divComment.style.height = "350px";
                        divComment.style.display = "flex";
                        divComment.style.alignItems = "center";
                        divComment.style.justifyContent = "flex-end";
                        //Phrase de commentaire
                        let comment = document.createElement('p');
                        comment.style.fontFamily = "arial";
                        comment.style.fontSize = "18px";
                        comment.style.fontWeight = "bold"
                        comment.style.margin = "8%";
                        comment.innerHTML = ``;
                        divComment.append(comment);

                        let divTemp = document.createElement('div');
                        divTemp.style.width = "25%";
                        divTemp.append(div6imgpoke, divPvUser, divAttaques);

                        divUser.append(divTemp, divComment);
                        divs[6].append(divAdversaire, divUser);

                        for (let i = 0; i < tabAttaquesCara.length; i++) {
                            let div6attaque = document.createElement('button');
                            div6attaque.style.margin = "0.5%";
                            div6attaque.style.border = "none";
                            div6attaque.style.fontSize = "16px";
                            div6attaque.style.backgroundColor = "transparent";
                            div6attaque.style.fontWeight = "bold";

                            divAttaques.append(div6attaque);
                            let div6attaques = divs[6].querySelectorAll('button');

                            switch (i) {
                                case 0:
                                    div6attaques[0].innerHTML = `${tabAttaquesCara[0].nom}`;
                                    // Coup de boule
                                    div6attaques[0].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesCara[0].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesCara[0].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesCara[0].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = pokeUser.pv;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    // Stopper à 0
                                    div6attaques[0].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });
                                    break;
                                case 1:
                                    div6attaques[1].innerHTML = `${tabAttaquesCara[1].nom}`;
                                    //Mmi-queue
                                    div6attaques[1].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesCara[1].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesCara[1].nom} " Ce n'est pas efficace... <br> ${pokeRandom.nom} adverse est juste effrayé`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = `${pokeUser.pv} `;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };

                                                    // Stopper à 0
                                                    if (pvUser.innerHTML == "0") {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                                        let div6boutonSuivant = document.createElement('button');
                                                        div6boutonSuivant.innerHTML = "Suivant";
                                                        div6boutonSuivant.style.padding = "3%";
                                                        div6boutonSuivant.style.fontSize = "18px";
                                                        div6boutonSuivant.style.backgroundColor = "yellow";

                                                        divComment.append(div6boutonSuivant);
                                                        /// Défaite
                                                        div6boutonSuivant.addEventListener('click', function () {
                                                            divs[6].style.display = "none";
                                                            divs[7].style.display = "block";

                                                            let div7Title = document.createElement('div');

                                                            let div7title = document.createElement('h1');
                                                            div7title.innerHTML = `DEFAITE...`;
                                                            div7title.style.margin = "0.5%";

                                                            let div7title2 = document.createElement('h2');
                                                            div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                            let gifNo = document.createElement('img');
                                                            gifNo.setAttribute('src', './public/img/torche.gif');

                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = `Wanna replay ?`
                                                            replay.style.padding = "1% 2%";
                                                            replay.style.margin = "1%";

                                                            replay.addEventListener('click', function () {
                                                                location.reload();
                                                            });

                                                            let avis = document.createElement('p');
                                                            avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                            avis.style.fontSize = "14px";

                                                            div7Title.append(div7title, div7title2);

                                                            divs[7].append(div7Title, gifNo, br, replay, avis);
                                                        });
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    break;
                                case 2:
                                    div6attaques[2].innerHTML = `${tabAttaquesCara[2].nom}`;
                                    // Pistolet à O
                                    div6attaques[2].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesCara[2].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesCara[2].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesCara[2].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = `${pokeUser.pv} `;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    // Stopper à 0
                                    div6attaques[2].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });
                                    break;
                                case 3:
                                    div6attaques[3].innerHTML = `${tabAttaquesCara[3]}`;

                                    //fuir
                                    div6attaques[3].addEventListener('click', function () {
                                        // Nouvelle page
                                        divs[6].style.display = "none";
                                        options[1].click();
                                    });
                                    break;
                            };
                        };

                        let div6Faire = document.createElement('p');
                        div6Faire.innerHTML = `Que voulez-vous faire ?`;
                        div6Faire.style.fontSize = "18px";
                        div6Faire.style.margin = "0% 20%";
                        divAttaques.prepend(div6Faire);

                    });
                    // Bugbizarre
                    choixPokes[2].addEventListener('click', function () {
                        pokeUser = bugbizarre;

                        divs[5].style.display = "none";
                        divs[6].style.display = "block";

                        // Affichage de l'adversaire
                        let divAdversaire = document.createElement('div');
                        divAdversaire.style.height = "250px";
                        divAdversaire.style.display = "flex";
                        divAdversaire.style.flexDirection = "column";

                        let div6imgadv = document.createElement('img');
                        switch (pokeRandom) {
                            case salahess2:
                                div6imgadv.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils2:
                                div6imgadv.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre2:
                                div6imgadv.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        }
                        div6imgadv.setAttribute('alt', "");
                        div6imgadv.style.height = "175px";
                        div6imgadv.style.width = "175px";
                        div6imgadv.style.display = "flex";
                        div6imgadv.style.placeSelf = "flex-end";

                        // Niveau de vie
                        let divPvAdv = document.createElement('div');
                        divPvAdv.style.display = "flex";
                        divPvAdv.style.justifyContent = "flex-end";

                        let pvAdv = document.createElement('span');
                        pvAdv.innerHTML = `${pokeRandom.pv} `;
                        pvAdv.style.fontSize = "20px";
                        pvAdv.style.fontWeight = "bold";
                        pvAdv.style.textDecoration = "underline";
                        pvAdv.style.margin = "0% 0% 0% 2%";
                        let pvAdv2 = document.createElement('span');
                        pvAdv2.innerHTML = ` /400 pv`;
                        pvAdv2.style.fontSize = "20px";
                        pvAdv2.style.fontWeight = "bold";
                        pvAdv2.style.textDecoration = "underline";
                        pvAdv2.style.margin = "0% 2% 0% 0%";

                        divPvAdv.append(pvAdv, pvAdv2);

                        divAdversaire.append(div6imgadv, divPvAdv);

                        // Affichage de mon Pokemon
                        let divUser = document.createElement('div');
                        divUser.style.display = "flex";

                        let divPvUser = document.createElement('div');
                        divPvUser.style.display = "flex";
                        divPvUser.style.justifyContent = "flex-end";

                        let pvUser = document.createElement('span');
                        pvUser.innerHTML = `${pokeUser.pv} `;
                        pvUser.style.fontSize = "20px";
                        pvUser.style.fontWeight = "bold";
                        pvUser.style.textDecoration = "underline";
                        pvUser.style.margin = "0% 0% 0% 2%";
                        pvUser.style.marginBottom = "5%";
                        let pvUser2 = document.createElement('span');
                        pvUser2.innerHTML = ` /400 pv`;
                        pvUser2.style.fontSize = "20px";
                        pvUser2.style.fontWeight = "bold";
                        pvUser2.style.textDecoration = "underline";
                        pvUser2.style.margin = "0% 2% 0% 0%";
                        pvUser2.style.marginBottom = "5%";

                        divPvUser.append(pvUser, pvUser2);

                        let div6imgpoke = document.createElement('img');
                        switch (pokeUser) {
                            case salahess:
                                div6imgpoke.setAttribute('src', './public/img/Salameche2.png');
                                break;
                            case carapils:
                                div6imgpoke.setAttribute('src', './public/img/Carapuce2.png');
                                break;
                            case bugbizarre:
                                div6imgpoke.setAttribute('src', './public/img/Bulbizarre2.png');
                                break;
                        };
                        div6imgpoke.setAttribute('alt', "");
                        div6imgpoke.style.height = "175px";
                        div6imgpoke.style.width = "175px";

                        // Affichage des commandes
                        let divAttaques = document.createElement('div');
                        divAttaques.style.border = "2px solid black";
                        divAttaques.style.borderRadius = "5px";
                        divAttaques.style.display = "flex";
                        divAttaques.style.flexWrap = "wrap";
                        divAttaques.style.justifyContent = "center";
                        divAttaques.style.padding = "2%";

                        divAttaques.style.fontSize = "25px";

                        let divComment = document.createElement('div');
                        divComment.style.width = "75%";
                        divComment.style.height = "400px";
                        divComment.style.display = "flex";
                        divComment.style.alignItems = "center";
                        divComment.style.justifyContent = "flex-end";
                        //Phrase de commentaire
                        let comment = document.createElement('p');
                        comment.style.fontFamily = "arial";
                        comment.style.fontSize = "18px";
                        comment.style.fontWeight = "bold"
                        comment.style.margin = "8%";
                        comment.innerHTML = ``;
                        divComment.append(comment);

                        let divTemp = document.createElement('div');
                        divTemp.style.width = "20%";
                        divTemp.append(div6imgpoke, divPvUser, divAttaques);

                        divUser.append(divTemp, divComment);
                        divs[6].append(divAdversaire, divUser);

                        for (let i = 0; i < tabAttaquesBug.length; i++) {
                            let div6attaque = document.createElement('button');
                            div6attaque.style.margin = "0.5%";
                            div6attaque.style.border = "none";
                            div6attaque.style.fontSize = "16px";
                            div6attaque.style.backgroundColor = "transparent";
                            div6attaque.style.fontWeight = "bold";

                            divAttaques.append(div6attaque);
                            let div6attaques = divs[6].querySelectorAll('button');

                            switch (i) {
                                case 0:
                                    div6attaques[0].innerHTML = `${tabAttaquesBug[0].nom}`;
                                    // Coup de boule
                                    div6attaques[0].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesBug[0].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesBug[0].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesBug[0].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = `${pokeUser.pv} `;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    // Stopper à 0
                                    div6attaques[0].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });                                    
                                    break;
                                case 1:
                                    div6attaques[1].innerHTML = `${tabAttaquesBug[1].nom}`;
                                    // Rugissement
                                    div6attaques[1].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesBug[1].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesBug[1].nom} " Ce n'est pas efficace... <br> ${pokeRandom.nom} adverse est juste effrayé`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = `${pokeUser.pv} `;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };

                                                    // Stopper à 0
                                                    if (pvUser.innerHTML == "0") {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                                        let div6boutonSuivant = document.createElement('button');
                                                        div6boutonSuivant.innerHTML = "Suivant";
                                                        div6boutonSuivant.style.padding = "3%";
                                                        div6boutonSuivant.style.fontSize = "18px";
                                                        div6boutonSuivant.style.backgroundColor = "yellow";

                                                        divComment.append(div6boutonSuivant);
                                                        /// Défaite
                                                        div6boutonSuivant.addEventListener('click', function () {
                                                            divs[6].style.display = "none";
                                                            divs[7].style.display = "block";

                                                            let div7Title = document.createElement('div');

                                                            let div7title = document.createElement('h1');
                                                            div7title.innerHTML = `DEFAITE...`;
                                                            div7title.style.margin = "0.5%";

                                                            let div7title2 = document.createElement('h2');
                                                            div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                            let gifNo = document.createElement('img');
                                                            gifNo.setAttribute('src', './public/img/torche.gif');

                                                            let replay = document.createElement('button');
                                                            replay.innerHTML = `Wanna replay ?`
                                                            replay.style.padding = "1% 2%";
                                                            replay.style.margin = "1%";

                                                            replay.addEventListener('click', function () {
                                                                location.reload();
                                                            });

                                                            let avis = document.createElement('p');
                                                            avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                            avis.style.fontSize = "14px";

                                                            div7Title.append(div7title, div7title2);

                                                            divs[7].append(div7Title, gifNo, br, replay, avis);
                                                        });
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    break;
                                case 2:
                                    div6attaques[2].innerHTML = `${tabAttaquesBug[2].nom}`;
                                    // Fouet Lianes
                                    div6attaques[2].addEventListener('click', function () {
                                        if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                            pokeRandom.pv -= tabAttaquesBug[2].degat;
                                            pvAdv.innerHTML = pokeRandom.pv;
                                            if (pokeRandom.pv === 400) {
                                                pvAdv.style.color = "black";
                                            } else if (pokeRandom.pv > 280) {
                                                pvAdv.style.color = "blue";
                                            } else if (pokeRandom.pv <= 120) {
                                                pvAdv.style.color = "red";
                                            };
                                            comment.innerHTML = `${pokeUser.nom} attaque " ${tabAttaquesBug[2].nom} " C'est très efficace ! <br> ${pokeRandom.nom} adverse a perdu ${tabAttaquesBug[2].degat} points de vie`;
                                            // attaque Adversaire
                                            if (pokeRandom == salahess2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesSala.length - 1));
                                                var attaqueRandom = tabAttaquesSala[attRandom];
                                            } else if (pokeRandom == carapils2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesCara.length - 1));
                                                var attaqueRandom = tabAttaquesCara[attRandom];
                                            } else if (pokeRandom == bugbizarre2) {
                                                // Random
                                                var attRandom = Math.floor(Math.random() * (tabAttaquesBug.length - 1));
                                                var attaqueRandom = tabAttaquesBug[attRandom];
                                            }

                                            setTimeout(() => {
                                                if ((pokeUser.pv > 0) && (pokeRandom.pv > 0)) {
                                                    pokeUser.pv -= attaqueRandom.degat;
                                                    if (attRandom == 1) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " Ce n'est pas efficace... <br> Votre ${pokeUser.nom} est juste effrayé`;
                                                    } else if ((attRandom == 0) || (attRandom == 2)) {
                                                        comment.innerHTML = `${pokeRandom.nom} adverse attaque " ${attaqueRandom.nom} " C'est très efficace ! <br> Votre ${pokeUser.nom} a perdu ${attaqueRandom.degat} points de vie`;
                                                    };
                                                    pvUser.innerHTML = `${pokeUser.pv} `;
                                                    if (pokeUser.pv == 400) {
                                                        pvUser.style.color = "black";
                                                    } else if (pokeUser.pv > 280) {
                                                        pvUser.style.color = "blue";
                                                    } else if (pokeUser.pv <= 120) {
                                                        pvUser.style.color = "red";
                                                    };
                                                };
                                            }, 1500);
                                        }
                                    });
                                    // Stopper à 0
                                    div6attaques[2].addEventListener('click', function () {
                                        // DEFAITE
                                        if (pvUser.innerHTML == "0") {
                                            comment.innerHTML = `${pokeRandom.nom} adverse vous a battu... <br> Passez a l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            /// Défaite
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `DEFAITE...`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `${pokeRandom.nom} a décidé de vous éliminer.<br> Votre aventure s'arrête ici`;

                                                let gifNo = document.createElement('img');
                                                gifNo.setAttribute('src', './public/img/torche.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifNo, br, replay, avis);
                                            });
                                        } else if (pvAdv.innerHTML == "0") {
                                            // VICTOIRE
                                            comment.innerHTML = `${pokeRandom.nom} adverse a été battu ! <br> Passez à l'écran suivant`;

                                            let div6boutonSuivant = document.createElement('button');
                                            div6boutonSuivant.innerHTML = "Suivant";
                                            div6boutonSuivant.style.padding = "3%";
                                            div6boutonSuivant.style.fontSize = "18px";
                                            div6boutonSuivant.style.backgroundColor = "yellow";

                                            divComment.append(div6boutonSuivant);

                                            // Victoire
                                            div6boutonSuivant.addEventListener('click', function () {
                                                divs[6].style.display = "none";
                                                divs[7].style.display = "block";

                                                let div7Title = document.createElement('div');

                                                let div7title = document.createElement('h1');
                                                div7title.innerHTML = `VICTOIRE !!!`;
                                                div7title.style.margin = "0.5%";

                                                let div7title2 = document.createElement('h2');
                                                div7title2.innerHTML = `Bravo, vous avez gagné !`;

                                                let gifYes = document.createElement('img');
                                                gifYes.setAttribute('src', './public/img/won.gif');

                                                let replay = document.createElement('button');
                                                replay.innerHTML = `Wanna replay ?`
                                                replay.style.padding = "1% 2%";
                                                replay.style.margin = "1%";

                                                replay.addEventListener('click', function () {
                                                    location.reload();
                                                });

                                                let avis = document.createElement('p');
                                                avis.innerHTML = `N'hésitez pas à m'envoyer vos avis et vos conseils ;)`;
                                                avis.style.fontSize = "14px";

                                                div7Title.append(div7title, div7title2);

                                                divs[7].append(div7Title, gifYes, br, replay, avis);
                                            })
                                        };
                                    });                                    
                                    break;
                                case 3:
                                    div6attaques[3].innerHTML = `${tabAttaquesBug[3]}`;

                                    //fuir
                                    div6attaques[3].addEventListener('click', function () {
                                        // Nouvelle page
                                        divs[6].style.display = "none";
                                        options[1].click();
                                    });
                                    break;
                            };
                        };

                        let div6Faire = document.createElement('p');
                        div6Faire.innerHTML = `Que voulez-vous faire ?`;
                        div6Faire.style.fontSize = "18px";
                        div6Faire.style.margin = "0% 10%";
                        divAttaques.prepend(div6Faire);
                    });
                });

                // Option fuir
            } else if (i === 1) {
                options[1].innerHTML = "Fuir";
                options[1].style.backgroundColor = "red";
                // Option fuir
                options[1].addEventListener('click', function () {
                    cadre.style.backgroundImage = "url('./public/img/textureBeige.jpeg')";
                    divs[3].style.display = "none";
                    divs[4].style.display = "block";

                    // Texte
                    let div4p1 = document.createElement('p');
                    div4p1.innerHTML = `Tsk tsk tsk... Je suis très déçue jeune Padawan`;
                    div4p1.style.margin = "0% 0% 2% 0%"
                    div4p1.style.fontSize = "30px";
                    div4p1.style.fontWeight = "bold";
                    // Image
                    let imgFuir = document.createElement('img');
                    imgFuir.setAttribute('src', "./public/img/BabyYoda.png");
                    imgFuir.style.height = "400px";
                    imgFuir.style.width = "400px";
                    // Petite description
                    let div4p2 = document.createElement('p');
                    div4p2.innerHTML = "Le jeu s'arrête ici";
                    div4p2.style.textAlign = "end";
                    div4p2.style.margin = "0%";

                    let replay = document.createElement('button');
                    replay.innerHTML = `Retenter ma chance`;
                    replay.style.fontSize = "14px";
                    replay.style.fontWeight = "bold";
                    replay.style.padding = "1% 2%";
                    replay.style.margin = "1%";

                    replay.addEventListener('click', function () {
                        location.reload();
                    });

                    divs[4].append(div4p1, imgFuir, div4p2, replay);
                });
            } else {
                console.log(`nope`)
            }
        }

        divs[3].prepend(div3p1, img3, br);
    });
});