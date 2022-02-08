//Update name
let yourName = "Valerie Haupt"
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

// Define JS variables
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// defining buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

//defining display elements
let qtyGB = document.querySelector('#qty-gb')
let qtyCC = document.querySelector('#qty-cc')
let qtySugar = document.querySelector('#qty-sugar')
let qtyTotal = document.querySelector('#qty-total')

//GB button event listeners
gbPlusBtn.addEventListener('click', function() {
gb++
qtyGB.textContent = gb
qtyTotal.textContent = gb + cc + sugar
})

gbMinusBtn.addEventListener('click', function(){
    if (gb > 0){
        gb--
        qtyGB.textContent = gb
        qtyTotal.textContent = gb + cc + sugar
    }
})

//CC button event listeners
ccPlusBtn.addEventListener('click', function() {
    cc++
    qtyCC.textContent = cc
    qtyTotal.textContent = gb + cc + sugar
    })
    
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc--
        qtyCC.textContent = cc
        qtyTotal.textContent = gb + cc + sugar
        }
    })

//Sugar button event listeners
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    qtySugar.textContent = sugar
    qtyTotal.textContent = gb + cc + sugar
    })
    
sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0){
        sugar--
        qtySugar.textContent = sugar
        qtyTotal.textContent = gb + cc + sugar
        }
    })