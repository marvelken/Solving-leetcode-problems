var firstPalindrome = function (words) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split("").reverse().join("");

    if (words[i] === reversed) {
      newArr.push(words[i]);
    }
  }

  if (newArr.length == 0) {
    return "";
  } else {
    return newArr[0];
  }
};

firstPalindrome(["def", "ghi"]);
