

function TotalPrice(){
    

    const costAtKM = 0.21;

    let valueName = document.getElementById ("inputName"). value;

    let valueAtKM = document.getElementsByValue ("inputKM"). value;

    let maggiorenne = document.getElementById ("inputAgeYoung"). value;
    
    let Minorenne = document.getElementById ("inputAgeAdult"). value;

    let Anziano = document.getElementById ("inputAgeOld"). value;

    
    let ticketPrice = valueAtKM * costAtKM;

    // discount under 18

    let underDiscount = (ticketPrice / 100) * 20;
    let ticketForChild = ticketPrice - underDiscount

    // discount upper 65
    
    let upperDiscount = (ticketPrice / 100) * 40;
    let ticketForOld = ticketPrice - upperDiscount

  

    if (Minorenne){
        ticketPrice = ticketForChild.toFixed(2);
    }
    else if (Anziano){
        ticketPrice = ticketForOld.toFixed(2);
    } 
    else{
        ticketPrice = ticketPrice.toFixed(2)
    }
    
   document.getElementById ("result").innerHTML = "Total cost is:" + "" + ticketPrice + "" + "€"
}