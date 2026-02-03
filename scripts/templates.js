function showMenusTemplate(indexMenu) {
    return `
    <article class="complete_menu_section">
        <div class="individual_menu">
            <img src="${dishes.burger[indexMenu].image}">
            <div class="main_dishes">
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