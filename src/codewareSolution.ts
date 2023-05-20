function findLongestWordLength(str: string): number {
  const newStr = str.split(" ");
  let longest = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longest) {
      longest = newStr[i].length;
    }
  }
  return longest;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

function largestOfFour(arr: string | any[]): string | any[] {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    largest.push(largestNum);
  }
  return largest;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

function confirmEnding(str: string | any[], target: string | any[]): boolean {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("action", "tion"));

function repeatStringNumTimes(str: string, num: number): string {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (num > 0) {
      result.push(str);
    }
  }
  return result.join("");
}

console.log(repeatStringNumTimes("hello", 3));

function truncateString(str: string, num: number): string {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
function itemFinder(
  arr: string | any[],
  func: { (num: any): boolean; (arg0: any): any }
): any {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(itemFinder([1, 2, 3, 4], (num: number) => num % 2 === 0));

function booWho(bool: any): boolean {
  return typeof bool === "boolean" ? true : false;
}

console.log(booWho(null));

function newWords(str: string): string {
  let newStr = str.split(" ");
  let result = [];
  for (let i = 0; i < newStr.length; i++) {
    const item = newStr[i].toLowerCase();
    result.push(item[0].toUpperCase() + item.slice(1));
  }
  return result.join(" ");
}

console.log(newWords("hEllo world"));

function frankenSplice(arr1: any[], arr2: any[], n: number): any[] {
  return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function soretdItem(arr: any[], num: number): number {
  const sorted = arr.sort((a, b) => a - b);
  const result = sorted.filter((item) => item < num);

  return result.length;
}

console.log(soretdItem([10, 20, 30, 40, 50], 30));

function mutation(arr: string[]): boolean {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Mary", "Aarmy"]));

function chunkArrayInGroups(arr: string | any[], size: number): any[] {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
function wordsItem(arr: string): boolean {
  const re = /[aA-zZ]/gi;
  const result = arr.match(re);
  const revised = result.reverse();
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== revised[i]) {
      return false;
    }
  }
}

console.log(wordsItem("nope"));
