main();
/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let dogName = prompt("what's the dogs name?");
    let cups = prompt("how many cups is the portion??");
    feedDog(dogName,cups);
}
/* FUNCTION feedDog(dogName, cups) */
/* define a function called feedDog with string parameter dogName, number parameter cups
 * loop from cup = 1 to cups.  For each cup, display "Here's a cup of kibble, [dogName]!"
 * @param: dogName (string), cups (integer)
 * @return: none
 */ 
function feedDog(dogName, cups){
    for (let i = 0; i < cups; i ++ )
{ 
alert(i + " cups of kibble for " + dogName);
}
}








