let basket = [];

let priceRef = document.getElementById("price");
let deliveryCostsRef = document.getElementById("deliveryCosts");
let totalPriceRef = document.getElementById("totalPrice");
let basketMenus = document.getElementById("addedMenus");
let responsivMiniBasketRef = document.getElementById("responsivMiniBasket");
let dialogBasketRef = document.getElementById("dialogBasket");
let bodyOverflow = document.getElementById("body_overflow");

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
        basket.push({                       // i have to copy the object -> to not change the original
            name: newDish.name,
            price: newDish.price,
            amount: 1
        });
    } else {
        foundDish.amount++;
    }
    renderBasket();
}

function changeAmount (increaseOrReduce, index) {
    let changeAmountRef = basket[index];
    if (increaseOrReduce == true) {
        changeAmountRef.amount++;
    } else {
        if (changeAmountRef.amount > 1) {
            changeAmountRef.amount--;
        } else {
            deleteDish(index);
        }
    }
    renderBasket();
}

function deleteDish(index) {
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
        responsivMiniBasketRef.innerHTML = `Warenkorb: 0,00€`;
        return;
    };
    priceRef.innerHTML = `${sumPrice.toFixed(2).replace('.', ',')} €`;
    deliveryCostsRef.innerHTML = `${deliveryCosts.toFixed(2).replace('.', ',')} €`;
    totalPriceRef.innerHTML = `${priceToPay.toFixed(2).replace('.', ',')} €`;
    responsivMiniBasketRef.innerHTML = `Warenkorb: ${priceToPay.toFixed(2).replace('.', ',')} €`;
}

function orderNow() {
    if (basket.length > 0) {
        basket.length = 0;
        basketMenus.innerHTML = `<p class="order_display"><span>Ihre Bestellung</span><span> ist unterwegs</span></p>`;
        priceRef.innerHTML = `0,00 €`;
        deliveryCostsRef.innerHTML = `0,00 €`;
        totalPriceRef.innerHTML = `0,00 €`;
        responsivMiniBasketRef.innerHTML = `Warenkorb: 0,00€`;
    };
}

function bubblingProtection(event) {
    event.stopPropagation();
}

function toggleDialogBasket() {
    if (dialogBasketRef.open) {
        dialogBasketRef.close();
        dialogBasketRef.classList.remove("opened_dialog");
        bodyOverflow.classList.remove("body_overflow_hidden");
    } else {
        dialogBasketRef.showModal();
        dialogBasketRef.classList.add("opened_dialog");
        bodyOverflow.classList.add("body_overflow_hidden");
    };
}