let click = 0;

document.querySelector('#burgermenu').addEventListener('click', function () {
    document.querySelector('.wrapper-menu').classList.toggle('open');
    click++;
    checkWindowSize();
});


let closeMenuOnBigScreen = window.matchMedia("(max-width: 768px)");
closeMenuOnBigScreen.addListener(checkWindowSize);

function checkWindowSize() {
    if (closeMenuOnBigScreen.matches) {
        if (click == 1) {
            document.querySelector("#mobil_menu").style.display = "flex";
        } else if (click == 2) {
            document.querySelector("#mobil_menu").style.display = "none";
            click = 0;
        }
    } else {
        document.querySelector("#mobil_menu").style.display = "none";
        if (click == 1) {
            document.querySelector('.wrapper-menu').classList.toggle('open');
        }
        click = 0;
    }
}
