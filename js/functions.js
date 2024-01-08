// Button validation

function validateMakePurchase(number){

    if(number>0){
        makePurchaseButtonId.removeAttribute('disabled');
    }
    else{
        makePurchaseButtonId.setAttribute('disabled', true);
    }
};

function validateApplyCuppon(number){
    if (number>=200){
        applyCupponButtonId.removeAttribute('disabled');
    }

    else{
        applyCupponButtonId.setAttribute('disabled', true);
    }
};


// getting any id element
function getId(string1){
    return (document.getElementById(string1));
};

// getting card value 
function getValue(element){
    let value=(element.querySelector('span')).innerText;
    return(parseFloat(value));
};

// Getting cart info's value 
function cartValue(element){
    return (parseFloat(element.innerText));

};

// Updating total price
function updateTotalPrice(price){
    
    let totalPrice= cartValue(totalPriceId);
    let newTotalPrice=totalPrice+price;
    validateMakePurchase(newTotalPrice);
    validateApplyCuppon(newTotalPrice);
    totalPriceId.innerText=''+newTotalPrice.toFixed(2);
    updateDiscount();
    updateTotal();
    

};
// Updating the discount section

function updateDiscount(){
    if((applyCupponButtonId.innerText)==='Applied'){
        let totalPrice=cartValue(totalPriceId);
        let discount=totalPrice*(20/100);
        discount=discount.toFixed(2);
        discountId.innerText=''+discount;
    }

    else{
        return;
    }
};

// updating the total section
function updateTotal(){
    
    let newTotal=cartValue(totalPriceId);
    let discount=cartValue(discountId);
    let total=newTotal-discount;
    totalId.innerText=''+total.toFixed(2);


};


// Update Purchased Products List

function updatePurchasedProductList(string1,price){
    
    let count=purchasedProductsId.childElementCount;
    let p = document.createElement('p');
    p.classList.add('my-5');
    p.innerHTML=`${count+1}. ${string1} price: ${price} Tk`;
    purchasedProductsId.appendChild(p);
};




// Having id elements

let totalId=getId('total');
let totalPriceId=getId('total-price');
let discountId=getId('discount');
let makePurchaseButtonId=getId('make-purchase');
let applyCupponButtonId=getId('apply-cuppon');
let cuppon=getId('cuppon');
let cupponCode=getId('cuppon-code');
let purchasedProductsId=getId('purchased-products');
let dialogBox=document.getElementById('go-home-dialog');
let goHomeButton=getId('go-home');
let cartProducts=[];

// _________________________________________________________________


// showing cart using local Storage

class Products{
    constructor(productName,productPrice){
        this.productName=productName;
        this.productPrice=productPrice;
    }
}

const getDataFromLocalStorage=()=>{
 let localObject=JSON.parse(localStorage.getItem('cart'));
 if(localObject){
    cartProducts=localObject;
    totalPriceId.innerText=0;
    purchasedProductsId.innerHTML='';
   cartProducts.forEach(element => { 
    updatePurchasedProductList(element.productName,element.productPrice);
    updateTotalPrice(element.productPrice);
    
   });
 }
}

const setDataToLocalStorage=(productName,productPrice)=>{
    let product=new Products(productName,productPrice);
   
    cartProducts.push(product);
    localStorage.setItem('cart',JSON.stringify(cartProducts));
}

