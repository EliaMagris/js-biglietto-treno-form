

function TotalPrice(){
    

    const costAtKM = 0.21;

    let valueName = document.getElementById ("inputName").value;

    let valueAtKM = document.getElementById ("inputKM").value;

    let scelta = document.getElementById("select").value;

    let ticketPrice = valueAtKM * costAtKM;

    // random number



    // discount under 18

    let underDiscount = (ticketPrice / 100) * 20;
    let ticketForChild = ticketPrice - underDiscount

    // discount upper 65
    
    let upperDiscount = (ticketPrice / 100) * 40;
    let ticketForOld = ticketPrice - upperDiscount

  
    if ( scelta == 2 ){
        ticketPrice = ticketForChild.toFixed(2);
    }
    else if (scelta == 1){
        ticketPrice = ticketPrice.toFixed(2)
    } 
    else {
        ticketPrice = ticketForOld.toFixed(2);
    }
    
    
   document.getElementById("result").innerHTML = "Total cost is:" + "" + ticketPrice + "" + "€"

   // nome passeggero

   document.getElementById("nomePasseggero").innerHTML = valueName

   document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 10) + 1;

   document.getElementById("randomNumberBig").innerHTML = Math.floor(Math.random() * 100000) + 1;

}
