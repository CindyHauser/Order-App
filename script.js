
function init() {
    renderAll()
};

function renderAll() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasket()
}

function renderBurger() {
    let menuSelectionRef = document.getElementById("menu_selection");
    menuSelectionRef.innerHTML = "";
    for (let indexBurger = 0; indexBurger < dishes.burger.length; indexBurger++) {
        menuSelectionRef.innerHTML += showBurgerTemplate(indexBurger);
    }
}

function renderPizza() {
    let pizzaSelectionRef = document.getElementById("pizza_selection");
    pizzaSelectionRef.innerHTML = "";
    for (let indexPizza = 0; indexPizza < dishes.pizza.length; indexPizza++) {
        pizzaSelectionRef.innerHTML += showPizzaTemplate(indexPizza);
    };
}

function renderSalad() {
    let saladSelectionRef = document.getElementById("salad_selection");
    saladSelectionRef.innerHTML = "";
    for (let indexSalad = 0; indexSalad < dishes.salat.length; indexSalad++) {
        saladSelectionRef.innerHTML += showSaladTemplate(indexSalad);
    }
}

console.log(dishes);
