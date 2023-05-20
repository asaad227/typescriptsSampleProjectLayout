// Path: src\testing.ts
function vowelFinder(str) {
    var vowels = "aeiou";
    var vowelCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelCount++;
        }
    }
    return vowelCount.toString();
}
console.log(vowelFinder("hello"));
