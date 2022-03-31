// level {1/2/3}



//level 1

var arr = [1, 2, 3];
//1.
// var res = [];
// for (var i = 0; i < arr.length; i++) {
//     res.push(arr[i] + 1);
// }

// console.log(res)

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// };

// console.log(sum)


var obj = { name: 'Elie', rank: 'Pro' }
var str = ""
// console.log(obj.name, obj.rank)

var i = 0

for (var key in obj) {
    // console.log(key, obj[key])

    str = str + `${key} : ${obj[key]}`

    if (i == 0) {
        str = str + ", "
    }
    i++;
}
console.log(str)





