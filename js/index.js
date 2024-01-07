// Applying cuppon
applyCupponButtonId.addEventListener('click',function(){
    if((cuppon.value)===(cupponCode.innerText)){
        applyCupponButtonId.innerText='Applied';
        updateDiscount();
        updateTotal();
    }

    else{
        alert('Wrong Cuppon Code.Apply The Correct One')
    }

});




// Adding Product-1 to cart

let product1= getId('product-1');

product1.addEventListener('click',function(){
    let price = getValue(product1);
    updateTotalPrice(price);
    updatePurchasedProductList('K. Accessories');
});


// Adding Product-2 to cart

let product2= getId('product-2');

product2.addEventListener('click',function(){
    let price = getValue(product2);
    updateTotalPrice(price);
    updatePurchasedProductList('K. Accessories');
});


// Adding Product-3 to cart

let product3= getId('product-3');

product3.addEventListener('click',function(){
    let price = getValue(product3);
    updateTotalPrice(price);
    updatePurchasedProductList('Home Cooker');
});


// Adding Product-4 to cart

let product4= getId('product-4');

product4.addEventListener('click',function(){
    let price = getValue(product4);
    updateTotalPrice(price);
    updatePurchasedProductList('Sports Back Cap');
});


// Adding Product-5 to cart

let product5= getId('product-5');

product5.addEventListener('click',function(){
    let price = getValue(product5);
    updateTotalPrice(price);
    updatePurchasedProductList('Full Jersey Set');
});


// Adding Product-6 to cart

let product6= getId('product-6');

product6.addEventListener('click',function(){
    let price = getValue(product6);
    updateTotalPrice(price);
    updatePurchasedProductList('Sports cates');
});


// Adding Product-7 to cart

let product7= getId('product-7');

product7.addEventListener('click',function(){
    let price = getValue(product7);
    updateTotalPrice(price);
    updatePurchasedProductList('Single Relax Chair');
});


// Adding Product-8 to cart

let product8= getId('product-8');

product8.addEventListener('click',function(){
    let price = getValue(product8);
    updateTotalPrice(price);
    updatePurchasedProductList('Children play');
});


// Adding Product-9 to cart

let product9= getId('product-9');

product9.addEventListener('click',function(){
    let price = getValue(product9);
    updateTotalPrice(price);
    updatePurchasedProductList('K. Flexible Sofa');
});


// Reloading if go home button is used

goHomeButton.addEventListener('click',function(){
    window.location.href='index.html';
})