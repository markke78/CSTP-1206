
var name = "Daniel";

let obj = {
    name: "Prabh",
    getName: function() {
        console.log(this.name);
    }
}

obj.getName();