function showMenusTemplate(indexMenu) {
    return `
    <article class="all_burger_menu">
        <div class="burger_menu">
            <img src="${dishes.burger[indexMenu].image}">
            <div>
                <h3>${dishes.burger[indexMenu].name}</h3>
                <p>${dishes.burger[indexMenu].description}</p>
            </div>
            <div>
                <p>${dishes.burger[indexMenu].price.toFixed(2).replace(".", ",")} €</p>
            </div>
        </div>
    </article>
    `
}

function showPizzaTemplate(indexPizza) {
        return `
        <article class="all_burger_menu">
        <div class="burger_menu">
            <img src="${dishes.pizza[indexPizza].image}">
            <div>
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
        <article class="all_burger_menu">
        <div class="burger_menu">
            <img src="${dishes.salat[indexSalad].image}">
            <div>
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