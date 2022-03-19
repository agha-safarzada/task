let myArray = [];

function myFunc(arr) {

    for (var i = 0; i < 5; i++) {
        arr.push(function() {
            console.log(i)
        })
    }
}
myFunc(myArray);
console.log(myArray);
myArray[4];