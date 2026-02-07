let basket = [];

let priceRef = document.getElementById("price");
let deliveryCostsRef = document.getElementById("deliveryCosts");
let totalPriceRef = document.getElementById("totalPrice");
let basketMenus = document.getElementById("addedMenus");

function renderBasket() {
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

function reduceAmount(index) {
    let reduceAmount = basket[index];
    if (reduceAmount.amount > 1) {
        reduceAmount.amount--;
    } else{
        deleteDish(index);
    }
    renderBasket();
}

function deleteDish(index) {
    basket[index].amount = 1;       //amount change to ONE, else it save the old amount
    basket.splice(index, 1);
    renderBasket();
    renderPrices();
}

function calculateBasketPrice() {
    let sum = 0;
    for (let indexPrice = 0; indexPrice < basket.length; indexPrice++) {
        sum += basket[indexPrice].amount * basket[indexPrice].price;
    };
    return sum;
}

function renderPrices() {
    let deliveryCosts = 4.99;
    let sumPrice = calculateBasketPrice();
    let priceToPay = sumPrice + deliveryCosts;

    if (basket.length === 0) {
        priceRef.innerHTML = `0,00 €`;
        deliveryCostsRef.innerHTML = `0,00 €`;
        totalPriceRef.innerHTML = `0,00 €`;
        return;
    };
    priceRef.innerHTML = `${sumPrice.toFixed(2).replace('.', ',')} €`;
    deliveryCostsRef.innerHTML = `${deliveryCosts.toFixed(2).replace('.', ',')} €`;
    totalPriceRef.innerHTML = `${priceToPay.toFixed(2).replace('.', ',')} €`;
}

function orderNow() {
    if (basket.length > 0){
    basket.length = 0;
    basketMenus.innerHTML = `<p class="order_display"><span>Ihre Bestellung</span><span> ist unterwegs</span></p>`;
    priceRef.innerHTML = `0,00 €`;
    deliveryCostsRef.innerHTML = `0,00 €`;
    totalPriceRef.innerHTML = `0,00 €`;
    };
}
