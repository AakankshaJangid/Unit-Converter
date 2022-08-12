const Num = document.querySelector('#numb').value//const Num = document.getElementById('#numb').value
let P1 = document.getElementById("p1")
let P2 = document.getElementById("p2")
let P3 = document.getElementById("p3")
function convertNum(){
    let length_m_to_f = Num * Number(3.28084)
    let lengthStr = `${Num} meters = ${length_m_to_f} feets`
    P1.innerHTML = lengthStr
}