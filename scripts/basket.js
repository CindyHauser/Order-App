let basket = [];

// function pushToBasket(indexBurger) {
//     let basketMenus = document.getElementById("addedMenus");
//     basketMenus.innerHTML = "";

//     if (basket == 0) {
//         basket.push(dishes.burger[indexBurger]);

//         for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
//             const basketContent = basket[indexBasket];

//             basketMenus.innerHTML += `<p>${basketContent.name} - ${basketContent.price.toFixed(2).replace(".", ",")} €</p>`;

//         }
//     } else {

//         for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
//             const basketContent = basket[indexBasket];

//             if (basket.find(product => product.basketContent.name === basketContent.name)) {
//                 console.log("thats it");
//             } else {
//                 basket.push(dishes.burger[indexBurger]);

//                 basketMenus.innerHTML += `<p>${basketContent.name} - ${basketContent.price.toFixed(2).replace(".", ",")} €</p>`;
//             }

//             console.log(basket);

//         }
//     }
// }

let basketMenus = document.getElementById("addedMenus");


function renderBasket() {
    let basketMenus = document.getElementById("addedMenus");
    basketMenus.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketMenus.innerHTML += showBasketTemplate(indexBasket);


    };
}

function pushToBasket(indexBurger) {

    renderBasket();

    if (basket == 0) {
        basket.push(dishes.burger[indexBurger]);

        renderBasket();

    } else {
        
        if (basket.find(({ name }) => name === dishes.burger[indexBurger].name)) {
            console.log("thats it");
        } else {

            basket.push(dishes.burger[indexBurger]);

            basketMenus.innerHTML += showBasketTemplate(indexBasket);
        }
    }
}
