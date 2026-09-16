// MINIMUM //

// Kollar om värdet x är mindre än y,
// Om så är fallet skriv ut x, annars skriv ut y.
function min(x, y){
    if (x < y)
    {
        return x;
    }
    else
    {
        return y;
    }
}
console.log(min(-12, 2)) // Input för funktionen

//////////////////////////////////////////
console.log(" "); // Bara här för separering i konsollen
//////////////////////////////////////////

// RECURSION //

// Vi kollar om input-värdet är 0
// Om det inte är 0 kollar vi om det är 1
// Om det inte är 1 så returnerar vi input-värdet och tar bort 2
// Den kallar på så sätt på sig själv tills vi får 0 eller 1
function isEven(answer){
    if (answer === 0){
        return true;
    }
    else if (answer === 1){
        return false;
    }
    return isEven(answer - 2);
}
console.log(isEven(14)); // Input för funktionen

//////////////////////////////////////////
console.log(" ");
//////////////////////////////////////////

// BEAN COUNTING 1 //

/* 
Vi sätter ett basvärde på antal B:n, 0 i detta fall.
Vi loopar igenom antalet tecken i vår input
Om den hittar ett B så öka total med 1
Returnera totalt antal B
*/
function countBs(bAmnt){
    let totalBs = 0;
    for (i = 0; i < bAmnt.length; i++){
        if (bAmnt[i] === "B"){
            totalBs++;
        }
    }
    return totalBs;
}
console.log(countBs("BRRBRRRRBBB"));

// BEAN COUNTING 2 //

// Exakt samma som ovan fast du kan välja en egen bokstav.
// Det gör du med att sätta andra värdet som bokstaven du vill kolla.
function countChar(charAmnt, input){
    let totalChars = 0;
    for (i = 0; i < charAmnt.length; i++){
        if (charAmnt[i] === input){
            totalChars++;
        }
    }
    return totalChars;
}
console.log(countChar("LEEEELLLEEELL", "L"));