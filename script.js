let menu = document.querySelector('.menu')
let inputs = document.querySelectorAll('.inputs > .input > input')
let btns    = document.querySelectorAll('.buttons > button')
let resultWindow = document.querySelector('.result')
let counted = document.querySelector('#counted')
let again   = document.querySelector('#again')
// let currentDate = Date.now()
let currentDate = new Date()
// let userDate = new Date(`${inputYy}-${inputMm}-${inputDd}`)

for(let input of inputs){
    input.addEventListener('click', ()=>{
        input.value = ''
    })
}

//Кнопки
for(let btn of btns){
    btn.addEventListener('click', ()=>{
        let inputDd = document.querySelector('#date-dd').value
        let inputMm = document.querySelector('#date-mm').value
        let inputYy = document.querySelector('#date-yy').value
        let userDate = new Date(inputYy,inputMm-1,inputDd)

        resultWindow.classList.add('active')
        menu.classList.add('active')

        if(btn.innerHTML == 'All time'){
            if(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 365) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 365)) > 0){
                counted.innerHTML = `
                    ${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 365) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 365)))} years  \xa0

                    ${currentDate.getMonth() - inputMm + 1} months  \xa0

                    ${currentDate.getDate() - inputDd} days  \xa0

                    ${currentDate.getHours() - userDate.getHours()} hours  \xa0

                    ${currentDate.getMinutes() - userDate.getMinutes()} minutes  \xa0

                    ${currentDate.getSeconds() - userDate.getSeconds()} seconds`
            }
            else{
                counted.innerHTML = `
                    ${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 365) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 365))) - 1} years  \xa0

                    ${currentDate.getMonth() - inputMm + 1} months  \xa0

                    ${currentDate.getDate() - inputDd} days  \xa0

                    ${currentDate.getHours() - userDate.getHours()} hours  \xa0

                    ${currentDate.getMinutes() - userDate.getMinutes()} minutes  \xa0

                    ${currentDate.getSeconds() - userDate.getSeconds()} seconds`
            }
            
        }
        if(btn.innerHTML == 'Years'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 365) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 365)))} years`
        }
        if(btn.innerHTML == 'Months'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 30) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 30)))} months`
        }
        if(btn.innerHTML == 'Weeks'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24 / 7) -  (userDate.getTime() / 1000 / 60 / 60 / 24 / 7)))} weeks`
        }
        if(btn.innerHTML == 'Days'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60 / 24) -  (userDate.getTime() / 1000 / 60 / 60 / 24)))} days`
        }
        if(btn.innerHTML == 'Hours'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60 / 60) -  (userDate.getTime() / 1000 / 60 / 60)))} hours`
        }
        if(btn.innerHTML == 'Minutes'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000 / 60) -  (userDate.getTime() / 1000 / 60)))} minutes`
        }
        if(btn.innerHTML == 'Seconds'){
            counted.innerHTML = `${Math.abs(Math.floor((currentDate  / 1000) -  (userDate.getTime() / 1000)))} seconds`
        }
    })
}

again.addEventListener('click', ()=>{
    resultWindow.classList.remove('active')
    menu.classList.remove('active')
})