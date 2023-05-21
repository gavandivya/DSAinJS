
var emp1 = { fname: "Divya", lname: "Gavandi" };
var emp2 = { fname: "Disha", lname: "Gavandi" };

function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.fname + " " + this.lname + ", " + greeting2);
}

//Call
invite.call(emp1, "Hello from Call", "How are u?");
invite.call(emp2, "Hi from Call", "How are u?");

//Apply
invite.apply(emp1, ["Hello from Apply", "How are u?"]);
invite.apply(emp2, ["Heyyy from Apply", "How are u?"]);


//Bind
var invite1 = invite.bind(emp1);
var invite2 = invite.bind(emp2);

invite1("Hello from Bind", "How are u?");
invite2("Hello from Bind", "How are u?");


