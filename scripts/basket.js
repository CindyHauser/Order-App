let basket = [];

function renderBasket() {
    let basketMenus = document.getElementById("addedMenus");
    basketMenus.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketMenus.innerHTML += showBasketTemplate(indexBasket);
        renderPrices();
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

function calculateBasketPrice() {
    let sum = 0;
    for (let indexPrice = 0; indexPrice < basket.length; indexPrice++) {
        sum += basket[indexPrice].amount * basket[indexPrice].price;
    };
    return sum;
}

function renderPrices() {
    let priceRef = document.getElementById("price");
    let deliveryCostsRef = document.getElementById("deliveryCosts");
    let totalPriceRef = document.getElementById("totalPrice");

    let deliveryCosts = 4.99;
    let sumPrice = calculateBasketPrice();
    let priceToPay = sumPrice + deliveryCosts;

    priceRef.innerHTML = `${sumPrice.toFixed(2).replace('.', ',')} €`;
    deliveryCostsRef.innerHTML = `${deliveryCosts.toFixed(2).replace('.', ',')} €`;
    totalPriceRef.innerHTML = `${priceToPay.toFixed(2).replace('.', ',')} €`;
}
