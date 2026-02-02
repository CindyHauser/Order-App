console.log(dishes);
console.table(dishes);
console.log(dishes.burger);

function init() {
    renderMenu();
};

function renderMenu() {
    let menuSelectionRef = document.getElementById("menu_selection");
    menuSelectionRef.innerHTML = "";

    for (let indexMenu = 0; indexMenu < dishes.length; indexMenu++) {

        menuSelectionRef.innerHtml += `${dishes[indexMenu]}`;
    };
}