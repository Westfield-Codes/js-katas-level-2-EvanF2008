function myAge(age){
    let today = new Date(); 
    let thisYear =  today.getFullYear();
    let birthyear = thisYear - age;
    return birthyear; 

 }

 function main(){
    let age = prompt("insert age");
    let born = prompt(" insert birth year");
    if (myAge(age) == born) alert("welcome"); 
    else alert("underage");
}

function feedDog(dogName,cups){
    let cup = 0;
    while (cup < cups){
        alert("heres a cup of food for " + dogName );
        cup++;
        
    }
    alert(cup + " cups of food for " + dogName);  
}

function main(){
    let dogName = prompt("what's your dog's name?");
    let cups = prompt("how many cups of nutrient does the dog get each meal?");
    feedDog(dogName,cups);
}
