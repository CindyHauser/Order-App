let basket = [];

function renderBasket() {
    let basketMenus = document.getElementById("addedMenus");
    basketMenus.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketMenus.innerHTML += showBasketTemplate(indexBasket);
    };
}

// let allDishes = [
//     ...dishes.burger,      Spread Operator
//     ...dishes.pizza,
//     ...dishes.salat
// ]

function pushToBasket(category, index) {
    let newDish = dishes[category][index];
    let foundDish = basket.find((element) => element.name === newDish.name);

    if (!foundDish) {
        basket.push(newDish);        
    } else {
        newDish.amount++;
    }
    renderBasket();
}
