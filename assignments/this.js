/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding -  In the global scope "this" refers to the window object that includes all of the JavaScript on the page.
* 2. Implicit Binding - Here "this" is the object on the function that is called. In other words it is whatever is left of the period.
* 3. New Binding - New binding is only used with a constructor function. In this context "this" refers to the new object made with the "new" keyword.
* 4. Explicit Binding - Explicit Binding uses .call and .apply to override and define what "this" is referring to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(name) {
    console.log(this);
    return name;
}
sayHello('Bob')
//'this' refers to the window object, aka. every bit of JavaScript on the page.

// Principle 2

// code example for Implicit Binding
const sayHi = {
    greeting: 'Hi',
    saysHi: function(name) {
        console.log(`${this.greeting}, my name is ${name}`);
        console.log(this);
    }
}
sayHi.saysHi('Sam')
//'this' refers to the object on which the function is called, aka. sayHi
// Principle 3

// code example for New Binding
function newPlayer(player) {
    this.name = player;
    this.speak = function() {
        console.log(`Welcome, ${this.name}`);
        console.log(this);
    };
}

const jim = new newPlayer('Jim');
jim.speak();
//'this' refers to the new object created with the 'new' keyword, aka. jim
// Principle 4

// code example for Explicit Binding
function sayBye(name) {
    this.farewell = 'Bye';
    this.person = name;
    this.talk = function() {
        console.log(`${this.farewell}, ${this.person}`)
        console.log(this)
    }
}

const tim = new sayBye("Tim");
const larry = new sayBye("Larry")

tim.talk.call(larry)
larry.talk.call(tim)
//'this' refers to what is explicitly stated with the .call, aka. larry and tim respectively