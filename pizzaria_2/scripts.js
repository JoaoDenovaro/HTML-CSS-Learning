let total = 0

function sub(id, valor, sub){
    let elem = document.getElementById(id)

    if (parseInt(elem.innerHTML) <= 0 ){
        return
    }

    elem.innerHTML = parseInt(elem.innerHTML) - 1
    total -= valor
    let subt = document.getElementById(sub)
    subt.innerHTML = parseInt(subt.innerHTML) - valor
    recalcular_total()
}

function add(id, valor, sub){
    let elem = document.getElementById(id)
    elem.innerHTML = parseInt(elem.innerHTML) + 1
    total += valor
    let subt = document.getElementById(sub)
    subt.innerHTML = parseInt(subt.innerHTML) + valor
    recalcular_total()
}

function recalcular_total(){
    let elem = document.getElementById('total') 
    elem.innerHTML = total
    
}


// function calcular_subtotal(name){
//     let elem = document.getElementById(name) 
//     elem.innerHTML = parseInt()
// }



// function recalcular_total(){
//     let elem = document.getElementById('total') 
    
//     var table = document.getElementById("tabela"),
//         sumVal = 0;
//         for (var i = 1; i < table.rows.length; i++) {
//             sumVal = sumVal + parseF(table.rows[i].cells[3].getElementByTagName('p').innerHTML);
//         }
//         parseInt(document.getElementById('total').innerHTML) = sumVal

//     elem.innerHTML = sumVal
// }