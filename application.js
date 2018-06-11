var Emitter = require("./emitter")
var emtr = new Emitter();

emtr.on("hey", function(){
    console.log("heeys");
});

emtr.on("hey", function(){
    console.log("What a hey!");
});

emtr.emit("hey");