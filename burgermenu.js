let click = 0; //Vi definerer en variabel, som skal holde styr på antal klik

document.querySelector('#burgermenu').addEventListener('click', function () { //Der laves en eventlistener på DOM-elementet "burgermenu"
    document.querySelector('.wrapper-menu').classList.toggle('open'); //Vi bruger classlist.toggle for at afspille åben/lukke animation
    click++; //Click-variablen forøges med 1 for hvert click
    checkWindowSize(); //Vi starter funktionen "checkWindowSize"
});


let closeMenuOnBigScreen = window.matchMedia("(max-width: 768px)"); //Vi definerer en variabel som tjekker om skærmstørrelsen er max 768px
closeMenuOnBigScreen.addListener(checkWindowSize); //Dernæst laves en listener, som tjekker om skærmstørrelsen er over/under 768px

function checkWindowSize() { //funktionen startes
    if (closeMenuOnBigScreen.matches) { //Hvis skærmstørrelsen er max 768px, så skal den gå videre
        if (click == 1) { //Hvis click = 1, så skal følgende gøres:
            document.querySelector("#mobil_menu").style.display = "flex"; //burgermenuen skal styles med "flex" fremfor "none"
            document.querySelector("#mobil_menu").classList.remove("fjern_menu"); //Vi sikrer at klassen "fjern_menu" ikke er på elementet
            document.querySelector("#mobil_menu").classList.add("vis_menu"); //Vi viser burgermenuen med fade-in animation-klasse
            document.querySelector("#menu_links").classList.add("vis_menu_punkter"); //Vi viser menupunkterne med fade-in animation-klasse
        } else if (click == 2) { //Hvis click = 2, så skal følgende gøres:
            document.querySelector("#mobil_menu").classList.remove("vis_menu"); //Vi fjerner klassen "vis_menu" på elementet
            document.querySelector("#menu_links").classList.remove("vis_menu_punkter"); //Vi fjerner klassen "vis_menu_punkter" på elementet
            document.querySelector("#mobil_menu").classList.add("fjern_menu"); //Vi skjuler burgermenu med fade-out animation-klasse
            click = 0; //click sættes = 0 igen, så scriptet kan køre rundt
        }
    } else { //Hvis skærmstørrelsen er over 768px, så skal den gå videre
        document.querySelector("#mobil_menu").style.display = "none"; //Burgermenuen skjules
        if (click == 1) { //Hvis burgermenuen var udfoldet, så skal den gå videre
            document.querySelector('.wrapper-menu').classList.toggle('open'); //Classlist.toggle for at afspille åben/lukke animation
        }
        click = 0; //click sættes = 0 igen, så scriptet kan køre rundt
    }
}
