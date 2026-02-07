function showBurgerTemplate(indexBurger) {
    return `
    <article class="complete_menu_section">
        <div class="individual_menu">
            <img src="${dishes.burger[indexBurger].image}">
            <div class="main_dishes">
                <h3>${dishes.burger[indexBurger].name}</h3>
                <p>${dishes.burger[indexBurger].description}</p>
            </div>
                <div class="add_and_price">
                    <p>${dishes.burger[indexBurger].price.toFixed(2).replace(".", ",")} €</p>
                    <button id="change_button" onclick="pushToBasket('burger', ${indexBurger})" class="add_button">Add</button>
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
                <div class="add_and_price">
                    <p>${dishes.pizza[indexPizza].price.toFixed(2).replace(".", ",")} €</p>
                    <button id="change_button" onclick="pushToBasket('pizza', ${indexPizza})" class="add_button">Add</button>
                </div>
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
                <div class="add_and_price">
                    <p>${dishes.salat[indexSalad].price.toFixed(2).replace(".", ",")} €</p>
                    <button id="change_button" onclick="pushToBasket('salat', ${indexSalad})" class="add_button">Add</button>
                </div>
            </div>
        </div>
    </article>
    `
}

function showBasketTemplate(indexBasket) {
    return `
    <div class="showBasketMenu"> 
        <p>${basket[indexBasket].amount}x ${basket[indexBasket].name}</p>
        <div class="for_btn_and_price">
            <span>${(basket[indexBasket].amount * basket[indexBasket].price).toFixed(2).replace(".", ",")} €</span>
            <div>
                <button class="btn_increase_recycle" onclick="reduceAmount(${indexBasket})"><img src="./assets/icons/minus.svg" alt="Menge mindern"></button>
                <button class="btn_increase_recycle" onclick="deleteDish(${indexBasket})"><img src="./assets/icons/recycle-bin.png" alt="Papierkorb"></button>
                <button class="btn_increase_recycle" onclick="increaseAmount(${indexBasket})"><img src="./assets/icons/plus-circle.svg" alt="erhöhe die Menge"></button>
            </div>
        </div>
    </div>    
    `
}
