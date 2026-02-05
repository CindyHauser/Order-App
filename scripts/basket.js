let basket = [];

function renderBasket() {
    let basketMenus = document.getElementById("addedMenus");
    basketMenus.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketMenus.innerHTML += showBasketTemplate(indexBasket);
    };
}

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

function increaseAmount(index) {
    let increaseAmount = basket[index];
    increaseAmount.amount++;
    renderBasket()
}

function deleteDish(index) {
    basket[index].amount = 1;
    basket.splice(index, 1);
    renderBasket()
}