module.exports = function getString(num) {
    let result = ''
    while(num > 2) {
        result += num.toString() + " bottles of beer on the wall, " + num.toString() + " bottles of beer.\n" +
            "Take one down and pass it around, " + (num-1).toString() + " bottles of beer on the wall.\n";
        num -= 1;
    }

    if(num == 2) {
        result += "2 bottles of beer on the wall, 2 bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer on the wall.\n";
        num -= 1;
    }

    if(num == 1) {
        result += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n";
        num -= 1;
    }

    if(num == 0) {
        result += "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";

    }
    return result;
}