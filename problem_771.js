// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    
    //compare two strings to find commonalities, output number of commonalities
    //case sensitive
    //check if a stone is a jewel
    
    const count = {}
    let total = 0
    
    for(jewel of jewels){
        count[jewel] = 1
    }
    
    for(stone of stones){
        if (count[stone]) total += 1
    }
    
    return total
};