const prompt = require("prompt-sync")();
let x = y = [];
let r = n = sumX = sumY = sumXY = spowX = spowY = powsumX = powsumY = upper = lower = 0;

n = Number(prompt("Enter length of array: "));

for(let i = 0; i < n ; i++)
{
  x[i] = Number(prompt("Enter first array ["+ i +"] item:"));
  y[i] = Number(prompt("Enter second array ["+ i +"] item:"));
  sumXY += x[i] * y[i];
  sumX += x[i];
  spowX += Math.pow(x[i], 2);
  sumY += y[i];
  spowY += Math.pow(sumY , 2);
}

powsumX = Math.pow(sumX, 2);
powsumY = Math.pow(sumY , 2); 

upper = (n * sumXY) - (sumX * sumY);
lower = Math.sqrt( (n *  spowX) - powsumX ) * Math.sqrt( (n * spowY) - powsumY);

r = upper / lower;

console.log(r);
