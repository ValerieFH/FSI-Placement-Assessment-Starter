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

let Btns = [{
    plusBtnName:gbPlusBtn,
    minusBtnName:gbMinusBtn,
    varName:gb,
    displayName:qtyGB},{
    plusBtnName:ccPlusBtn,
    minusBtnName:ccMinusBtn,
    varName:cc,
    displayName:qtyCC},{
    plusBtnName:sugarPlusBtn,
    minusBtnName:sugarMinusBtn,
    varName:sugar,
    displayName:qtySugar
    }]

for (let i = 0; i < Btns.length; i++){
    Btns[i].plusBtnName.addEventListener('click', function(){
        Btns[i].varName++
        Btns[i].displayName.textContent = Btns[i].varName
        qtyTotal.textContent = Btns[0].varName + Btns[1].varName + Btns[2].varName
    })
    Btns[i].minusBtnName.addEventListener('click', function(){
        if (Btns[i].varName > 0){
            Btns[i].varName--
            Btns[i].displayName.textContent = Btns[i].varName
            qtyTotal.textContent = Btns[0].varName + Btns[1].varName + Btns[2].varName
        }
    })
}
