// 1
function splitAndMerge(sentence, separator) {
    var ans = "";
    var words = sentence.split(" ");

    for (var i = 0; i < words.length; i++) {
        var w = words[i].split("");
        ans += w.join(separator) + ' '
    }
    return ans.slice(0,-1);
}
console.log(splitAndMerge("It's alive!","?"));


//2
function converter(hash){
    var converted = [];
    for (var i in hash) {
        converted.push([i, hash[i]]);
    }
    return converted;
}
some_hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
console.log(converter(some_hash));

//3
function toCamelCase(str) {
    str = str.split('-').join('_');
    var ans = "";
    var words = str.split("_");
    for(var i = 0; i < words.length; i++){
        var letters = words[i].split("");
        if(i > 0){
            letters[0] = letters[0].toUpperCase();
        }
        ans += letters.join("");
    }
    return ans;
}
console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_stealth_Warrior")); // returns "TheStealthWarrior"

//4
function reverseStr(str) {
    var words = str.split(" ");
    for (var i = 0; i<words.length; i++){
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}
console.log(reverseStr(" A fun little challenge! "));
//" A fun little challenge! " => " A nuf elttil !egnellahc "

//5
function stringExpansion(str) {
    var ans = "";
    var number = /\d/;
    var letter = /[A-z]/;
    var hasDigit = 0;
    str = str.split("");
    for(var i = 0; i<str.length; i++){
        if(str[i].match(number))
            hasDigit++;
    }
    if(!hasDigit)
        return str.join("");
    for(var i = 0; i<str.length; i++){
        if(str[i].match(number) && str[i+1].match(number)){
            continue;
        }
        if(str[i].match(number) && str[i+1].match(letter)){
            for (j = 0; j<str[i]; j++){
                ans += str[i+1];
            }
            i++;
            continue;
        }
    }
    return ans;
}
console.log(stringExpansion('3D2a5d2f')); //=== 'DDDaadddddff'

//6
function largest() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++){
        if(arguments[i] > max)
            max = arguments[i];
    }
    return max;
}
function smallest() {
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++){
        if(arguments[i] < min)
            min = arguments[i];
    }
    return min;
}
console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

//7
function transform(arr) {
    return arr.map(function(item) {
        return function() {
            return item;
        }
    });
}
var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50

//8
function sum() {
    if(arguments.length == 0)
        return 0;
    var args = [].slice.call(arguments);
    return args[0] + sum.apply(null, args.slice(1));
}
console.log(sum(1,3,5,7)); //should return 16


//9
function countDown(countTime){
    var timer = setInterval(function() {
        if (countTime >= 0) {
            console.log(countTime);
            countTime--;
        }else {
            clearInterval(timer);
        }
    }, 1000);
}
countDown(3); // 3 2 1 0

//10
Function.prototype.myBind = function(context) {
    var bindedFunc = this;
    return function() {
        return bindedFunc.apply(context, arguments);
    }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10