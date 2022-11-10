const prompt = require("prompt-sync")();
 let sd= ave= a= b = n = i =0;
 let x = [];

 n = Number(prompt("value of n:"));

 for(;i<n;i++) {
  x[i]=Number(prompt("x["+i+"]>"));
  
  ave += x[i];
  
 }

 ave = ave / n;

 for(;i<n;i++)
 {
  a += Math.pow(x[i] - ave,2);
 }
 console.log(a);
  b = a/n;

  sd = Math.sqrt(b);

  console.log(sd);