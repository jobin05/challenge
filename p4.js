const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Enter a number? ', (answer) => {
  
  var sum = 0;
   for(var i = 1; i <= answer;i++)
   {
	   sum = sum+ i;
   }
  console.log('Sum is ', sum);

r1.close();
});

