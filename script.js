
let displayValue = document.querySelector(".display_value")
let button = document.querySelectorAll("input[type='button']")
let buttonArr = Array.from(button)
let inputedValue = ''

buttonArr.map((buton)=>{
    buton.addEventListener("click", (e)=>{
        inputedValue += e.target.value
        displayValue.value = inputedValue
        if(e.target.value === "="){
            let sliceInput = inputedValue.slice(0, -1)
            let result = eval(sliceInput)
            displayValue.value = result
            inputedValue = result
        }else if(e.target.value === "DE"){
            let delet = inputedValue.slice(0, -4)
            displayValue.value = delet
            inputedValue = delet
        }else if(e.target.value === "C"){
            displayValue.value = '0'
            inputedValue = ''
        }
        
    })
})





