function showBurgerTemplate(indexBurger) {
    return `
    <article class="complete_menu_section">
        <div class="individual_menu">
            <img src="${dishes.burger[indexBurger].image}">
            <div class="main_dishes">
                <h3>${dishes.burger[indexBurger].name}</h3>
                <p>${dishes.burger[indexBurger].description}</p>
            </div>
            <div>
                <p>${dishes.burger[indexBurger].price.toFixed(2).replace(".", ",")} €</p>
                <button id="change_button" onclick="pushToBasket(${indexBurger})" class="add_button">Add</button>
            </div>
        </div>
    </article>
    `
}

function showPizzaTemplate(indexPizza) {
        return `
        <article class="complete_menu_section">
        <div class="individual_menu">
            <img src="${dishes.pizza[indexPizza].image}">
            <div class="main_dishes">
                <h3>${dishes.pizza[indexPizza].name}</h3>
                <p>${dishes.pizza[indexPizza].description}</p>
            </div>
            <div>
                <p>${dishes.pizza[indexPizza].price.toFixed(2).replace(".", ",")} €</p>
            </div>
        </div>
    </article>
    `
}

function showSaladTemplate(indexSalad) {
        return `
        <article class="complete_menu_section">
        <div class="individual_menu">
            <img src="${dishes.salat[indexSalad].image}">
            <div class="main_dishes">
                <h3>${dishes.salat[indexSalad].name}</h3>
                <p>${dishes.salat[indexSalad].description}</p>
            </div>
            <div>
                <p>${dishes.salat[indexSalad].price.toFixed(2).replace(".", ",")} €</p>
            </div>
        </div>
    </article>
    `
}

function showBasketTemplate(indexBasket) {
    return `
    <p>${basket[indexBasket].name} - ${basket[indexBasket].price.toFixed(2).replace(".", ",")} €</p>
    `
}