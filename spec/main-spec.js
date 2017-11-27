const printSong = require('../main/main');

describe('TheBeerSong', function () {

    it('returns strings without bottles', function () {
        let result = printSong(0);
        let expectText =
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";

        expect(result).toEqual(expectText);
    });

    it('returns strings with 1 bottle', function () {
        let result = printSong(1);
        let expectText =
            "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";

        expect(result).toEqual(expectText);
    });
    it('returns strings with 3 bottles', function () {
        let result = printSong(3);
        let expectText =
            "3 bottles of beer on the wall, 3 bottles of beer.\n" +
            "Take one down and pass it around, 2 bottles of beer on the wall.\n" +
            "2 bottles of beer on the wall, 2 bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer on the wall.\n" +
            "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";

        expect(result).toEqual(expectText);
    });
});
