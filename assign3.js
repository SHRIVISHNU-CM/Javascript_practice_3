const rupees = 82; 
const cartitems = [
    {item:'orange', priceindollars:70},
    { item: 'apple', priceindollars: 50 },
    { item: 'cherry', priceindollars: 100 }
];

cartitems.map((items)=>{
    console.log("items "+items.item+" price in rupees: "+items.priceindollars*rupees);
    
});

