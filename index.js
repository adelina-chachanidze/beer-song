var beerCount = 99;

function beerSong () {
    while (beerCount - 1  > 0) {
    console.log (beerCount +  " bottles of beer on the wall, " + beerCount + " bottles of beer. Take one down and pass it around. " + (beerCount-1) + " bottles of beer on the wall.")
    beerCount = beerCount - 1;
    }
    console.log (beerCount + " bottle of beer on the wall, " + beerCount +  " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
    console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}
