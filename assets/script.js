//declaring constants
const qtydown = document.getElementById('quantity-down')
const qtyup = document.getElementById('quantity-up')
const unitPrice = 15.00

//declariong variables
let qtytotal = 1


let unitPricePar = document.getElementById('unitPrice')
console.log(unitPrice)
unitPricePar.append = '$',unitPrice, ' each'
let totalPrice = document.querySelector('.total-price')
let val = document.createElement('span')
let valId = document.createElement('id')
valId.append('currency')
val.append(valId)
totalPrice.append(val)


totalPrice.innerHTML = 'Total Price: $' +unitPrice*qtytotal
qtyrequested = document.querySelector('.total-quantity')
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

let removebtn = document.querySelector('.remove')
removebtn.addEventListener('click', function(){
    let itemtoremove = document.querySelector('.cart-item')
    itemtoremove.remove()
})