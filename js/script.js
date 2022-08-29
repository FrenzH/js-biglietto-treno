console.log('JS OK!')

const messageHTMLElement =  document.getElementById('TicketPrice');


const km = parseInt(prompt('How much km?'));

const age  = parseInt(prompt('How old are you?'));

if (!isNaN(km) && !isNaN(age)){
    

    let Price = km * 0.21;
    let discount = 0;
   

    if (age < 18){
         discount = (Price/100*20);    
    } else if (age > 65){
         discount = (Price/100*40);
    }

    Price -= discount;

    
    const TicketPrice = '<p> Ticket price is ' + Price.toFixed(2) + ' euro .</p>';
   
    messageHTMLElement.innerHTML = TicketPrice;




}else{
    messageHTMLElement.innerHTML = 'Data entered incorrectly...refresh and retry .';
}
