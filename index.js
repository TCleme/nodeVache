let cowsay = require("cowsay");
const clemenceNantes = require("./information");

console.log(cowsay.say({
    text : "Hello I'm "+clemenceNantes.name+" from "+clemenceNantes.campus+" Campus!",
    e : "oO",
    T : "U "
}));