let current = 1;
let next = 1;
let previous = 0;

for(let i = 0; i<= 9; i++){
    
    console.log(i+1 + " - "  + current);

    previous = current
    current = next
    next += previous 

  
    
}