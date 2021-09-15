const updateProductNumber = (product, price, isIncreasing) => {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;

    //calculate total
    calculationTotal();
}

const getInputValue = (product) => {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

const calculationTotal = () => {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const onePlusTotal = getInputValue('one') * 400;
    const subTotal = phoneTotal + caseTotal + onePlusTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update to the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//i-phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('phone', 1219, false);
})

//one plus nord 5g increase decrease events
document.getElementById('one-plus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('one', 400, true);
})

document.getElementById('one-minus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('one', 400, false);
})

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', (e) => {
    e.preventDefault();
    updateProductNumber('case', 59, false);
})