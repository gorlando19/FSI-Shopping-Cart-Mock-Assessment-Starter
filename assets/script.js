//declaring constants
const qtydown = document.getElementById('quantity-down')
const qtyup = document.getElementById('quantity-up')
const unitPrice = 15.00

//declariong variables
let qtytotal = 1

//assign html elements
let unitPricePar = document.getElementById('unitPrice')
let totalPrice = document.querySelector('.total-price')
let val = document.createElement('span')
let valId = document.createElement('id')
let qtyrequested = document.querySelector('.total-quantity')
let removebtn = document.querySelector('.remove')

//Initializing fields
unitPricePar.innerHTML = '$'+ unitPrice + '.00 each'
totalPrice.innerHTML = 'Total Price: $' +unitPrice*qtytotal

//listeners
qtydown.addEventListener('click', function(){
    qtytotal --
    if(qtytotal<0){
        qtytotal =0
    }
    qtyrequested.innerHTML = 'Quantity: ' + qtytotal
    totalPrice.innerHTML = 'Total Price: $' +unitPrice*qtytotal
})

qtyup.addEventListener('click', function(){
    qtytotal ++
    qtyrequested.innerHTML = 'Quantity: ' + qtytotal
    totalPrice.innerHTML = 'Total Price: $' +unitPrice*qtytotal
})

removebtn.addEventListener('click', function(){
    let itemtoremove = document.querySelector('.cart-item')
    itemtoremove.remove()
})