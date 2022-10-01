/* classical function format without class & constructor */ 
/*
function Person(fullName, favColor){
    this.name = fullName;
    this.favCol = favColor;
    this.great = function(){
        console.log("Hello my name is " + this.name + " and my favorite color is " + this.favCol + ".");
    }
} 
*/

/* creating class Person and constructor with parameter */
class Person {
    constructor(fullName, favColor){
        this.name = fullName;
        this.favCol = favColor;
    }

    greet() {
        console.log("Hello my name is " + this.name + " and my favorite color is " + this.favCol + ".");
    }
}

/* make Person function will be exported if any other file import it. */
export default Person; 