function getInnerTextValue(){
    
}
function getResult(name, num){
    const inputValue = document.getElementById(name);
    const inputValueText = inputValue.innerText;
    const inputValueAmount = parseInt(inputValueText);
    // update extra Value
    const inputValueCost  = num;
    inputValue.innerText = inputValueCost;
    getTotal(num)
}
function getTotal(num){
    const inputValue  = num;
    const bestPrice = document.getElementById('best-price');
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const memoryCharge = document.getElementById('extra-memory');
    const memoryChargeAmount = parseInt(memoryCharge.innerText);
    const storageCharge = document.getElementById('extra-storage');
    const storageChargeAmount = parseInt(storageCharge.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeAmount = parseInt(deliveryCharge.innerText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceValue = parseInt(totalPriceText);
    totalPrice.innerText = bestPriceAmount + memoryChargeAmount + deliveryChargeAmount + storageChargeAmount; // total Price
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalValue = parseInt(grandTotalText);
    grandTotal.innerText = bestPriceAmount + memoryChargeAmount + deliveryChargeAmount + storageChargeAmount; // grand total 
}
// Memory Section Started
document.getElementById('8gb-memory').addEventListener('click', function(){
    getResult('extra-memory', 0)
})
document.getElementById('16gb-memory').addEventListener('click', function(){
    getResult('extra-memory', 180)
})
// Storage Section Started
document.getElementById('256-ssd').addEventListener('click', function(){
    getResult('extra-storage', 0)
})
document.getElementById('512-ssd').addEventListener('click', function(){
    getResult('extra-storage', 100)
})
document.getElementById('1tb-ssd').addEventListener('click', function(){
    getResult('extra-storage', 180)
})
//Delivery Section Started
document.getElementById('free-delivery').addEventListener('click', function(){
    getResult('delivery-charge', 0)
})
document.getElementById('fast-delivery').addEventListener('click', function(){
    getResult('delivery-charge', 20)
})
document.getElementById('submit-button').addEventListener('click', function(){
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;
    const grandTotal = document.getElementById('grand-total');
    const grandTotalText = grandTotal.innerText;
    const grandTotalValue = parseInt(grandTotalText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceValue = parseInt(totalPriceText);

    if (promoCodeValue == 'stevekaku'){
        const promo = (20 / 100) * totalPriceValue;
        const promoAppliedValue = totalPriceValue - promo;
        grandTotal.innerText = promoAppliedValue;
    }
    else (
        alert('Wrong promo code')
    )
})
