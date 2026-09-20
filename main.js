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

//////////////////////////////////////////
console.log(" ");
//////////////////////////////////////////

// THE SUM OF A RANGE //

//////////////////////////////////////////

/*

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Här Har vi min fösta idé. Den funkade nästan men var väldigt kladdig och blev inte helt rätt när step < 0 //
// Så jag började om...                                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function range(start, end, step){
    let numbers = []; // Vi bygger en tom array för användning senare
    let numbersRange; // Vi bygger en tom variabel för användning senare

    if (start > end){ // OM start är större än end ta start minus end
        numbersRange = (start - end);
    }
    else{ // ANNARS ta end minus start, if-satsen är till för att vi ska räkna rätt antal loopar
        numbersRange = (end - start)
    }
  
    for (let i = 0; i <= numbersRange; i++){ // For-loop som kör så många gånger som numbersRange
        if (!step || step === 1){ // OM vi inte satt ett värde för step så räknar den upp en i taget.
            numbers.push(start++);
        }
        else{ // ANNARS (alltså om step har ett värde) kör här
            if (i === 0){ // OM i är exakt lika med 0 så lägg till värdet på start. Detta för att få ett basvärde att utgå ifrån i numbers[]
                numbers.push(start)
            }
                
            else if (i != numbersRange && i % step == 0){ //OM i inte är samma värde som numbersRange OCH i modulo step är == 0 så lägger vi till start + step i numbers[]
                numbers.push(start = start + step); // Lägg till värdet start + step i numbers array:n, samtidigt som start blir det nya värdet.
            }
        }
    }
    return numbers; // returnera numbers array:n.
}
console.log(range(10, 1, -1));
*/

//////////////////////////////////////////

///////////////////////////////////////////////////////////
// Här har vi den fullt fungerande och snyggare koden... //
///////////////////////////////////////////////////////////



function range(start, end, step){
    let numbers = [] // Vi skapar en tom array för att trycka in våra siffror.
                     // Som vi ser finns ingen numbersRange, kom på att vi inte behöver det för att få for-loopen att köra rätt antal gånger.

    if (!step){ // OM step INTE finns, kör:
        for (i = start; i <= end; i++){ // Här kom jag på hur vi kan göra det utan numbersRange, börja på start, och sluta på end.
            numbers.push(start++) // Vi ökar med ett tal åt gången och lägger in i numbers array:n.
        }
    }
    else if (step === 0){ // Kort liten felhantering så att det inte krånglar ifall man väljer 0 som step.
                          // Går självklart att göra mer felhantering men kände att det fick räcka här.
        console.log("Välj ett tal som inte är 0")
    }
    else if (step > 0){ // OM step är en positiv siffra kör:
        for (i = start; i <= end; i += step) // Här ökar i med värdet step i stället. Då slipper man loopa onödigt många gånger.
            numbers.push(i); // Lägg till värdet på i in i numbers array:n.
    }
    else{ // ANNARS (alltså om vi valt ett negativt nummer) kör:
        for (i = start; i >= end; i += step) // Samma som ovan, enda skillnaden är att vi hoppar ur loopen om i är större än end, i och med att vi går baklänges.
            numbers.push(i) // Lägg till värdet på i in i numbers array:n.
    }
    return numbers; // Returnera numbers array:n
}

// Lite olika testvärden. Har INTE gjort felhantering för om man har positiv step medan start > end.
console.log(range(1, 10))
console.log(range(1, 10, 3))
console.log(range(10, 1, -1))
console.log(range(10, 1, -2))

//////////////////////////////////////////
console.log(" ")
//////////////////////////////////////////

//Vår funktion för att summera nummer i en array.
function sum(numbersArray){ // numbersArray håller värdet av en inmatad array
    let totalSum = 0; // Vi börjar med en tom variabel
    for (let i = 0; i < numbersArray.length; i++){ // Vi loopar igenom varje värde inuti vår array
        totalSum += numbersArray[i]; // Vi plussar på värdet på ett specifikt index till totalSum
    } 
    return totalSum; // Vi returnerar totalSum
}

// I detta console.log exempel så körs funktionen range först för att få en array
// Sen kör vi vår sum funktion
// I detta exemplet hade det kunna stått console.log(sum([1, 4, 7, 10])); och vi hade fått exakt samma resultat.
console.log(sum(range(1, 10, 3)));

//////////////////////////////////////////
console.log(" ")
//////////////////////////////////////////

// REVERSING AN ARRAY 1 //

// Vår funktion för att skapa en ny array som är bakvänd
function reverseArray(orderedArray){ // Tar in en array via input
    let reversedArray = [];  // skapar en tom ny array att fylla

    for (i = orderedArray.length - 1; i >= 0; i--){ // Här börjar vi bakifrån i array:n och loopar neråt.
        reversedArray.push(orderedArray[i]) // I och med att vi börjar uppifrån och ner så lägger vi bara till alla värden i omvänd ordning i den nya array:n
    }
    return reversedArray; // Vi returnerar den nya array:n
}

// Vi använder oss återigen av våran range funktion för att få en array att utgå ifrån
console.log(reverseArray(range(1, 10)));

//////////////////////////////////////////
console.log(" ")
//////////////////////////////////////////

// REVERSING AN ARRAY 2 //

// Vår funktion för att göra en array omvänd utan att skapa en ny array
function reverseArrayInPlace(orderedArray){ // Tar in en array via input
    let keepValue; // Tom variabel för att spara värden i
    for (i = 0; i < orderedArray.length / 2; i++){ // Vi loopar igenom vår array, men då vi ändrar på två värden per loop så halverar vi hur många gånger den loopar
                                                   // Gör vi inte detta så kommer vi bara gå runt ett helt varv och sluta där vi började
        keepValue = orderedArray[i]; // Vi sparar värdet på index i inuti keepValue
        
        // orderedArray.length - 1 - i har -1 i sig för att inxedvärden börjar på 0
        // 
        orderedArray[i] = orderedArray[orderedArray.length - 1 - i] // Här händer mycket. Vi skriver över värdet på index i med värdet längst bak i array:n - i
                                                                    // orderedArray.length - 1 - i har -1 i sig för att inxedvärden börjar på 0
                                                                    // Vi kör - i för att värdena ska stämma överens och gå utifrån och in.
        orderedArray[orderedArray.length - 1 - i] = keepValue // Vi sparar över värdet på orderedArray.length - 1 - i med vårat sparade värde
    }
    return orderedArray; //Vi returnerar in i samma array som vi började med, alltså ingen ny array är skapad.
}

// Vi använder oss återigen av våran range funktion för att få en array att utgå ifrån
console.log(reverseArrayInPlace(range(4, 10)));