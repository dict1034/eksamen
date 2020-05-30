let click = 0;

document.querySelector('#burgermenu').addEventListener('click', function () {
    document.querySelector('.wrapper-menu').classList.toggle('open');
    click++;

    if (click == 1) {
        document.querySelector("#mobil_menu").style.display = "flex";
    } else if (click == 2) {
        document.querySelector("#mobil_menu").style.display = "none";
        click = 0;
    }
});
