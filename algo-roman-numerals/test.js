let output = [];
let num = 2365;

let romanNumeralToArabic = {
  "I": 1,
  "V" : 5,
  "X" : 10,
  "L" : 50,
  "C" : 100,
  "D" : 500,
  "M" : 1000 

}

let romanReverse = romanNumeralToArabic.reverse();

for (const property in romanReverse) {
    if (num >= romanReverse[property]){
        output.push(property)
        num = num - romanReverse[property]
        console.log(output)
        console.log(num)
        
    }



    

}

