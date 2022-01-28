console.log(`Class Assignment #2`);
let product=prompt(`Product's Name?`);
let quantity=prompt(`Quantity?`);
let price=prompt(`What is the price?`);
let tax= price*0.0725 + price*quantity;
document.write(`<h1>${product}</h1>
<br>
<h2>${quantity}</h2>
<br> 
<h2>${tax}</h2>`);  