// Question 5
var rate = 10
function getRate() {
  if (rate === undefined) {
      var rate = 6;
      return rate;
   } else {
      return 10;
   }
}
console.log("Rate is", getRate());