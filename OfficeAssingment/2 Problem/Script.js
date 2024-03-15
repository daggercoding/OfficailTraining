let latestPalindrome = 0

for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
    const product = i * j;
    const newProduct=product.toString()
    let isPalin = palindrome(newProduct)
    // Update the largest palindrome found
    if(isPalin && product>latestPalindrome){
        latestPalindrome = product;
    }
    }
}

document.write(`THE LARGEST PALINDROME IS ${latestPalindrome}`)

function palindrome(number)
{   
    let compareNumber = ""
    for(let i=number.length-1 ; i>=0 ; i-- )
    {
        compareNumber += number[i]
    }
    if(number==compareNumber)
    {  
        return true;
    }
    else{
        return false;
    }
}



