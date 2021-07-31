//import
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//global variables
let prefix = "Bc: "
console.log("-----BCSCRIPT-----")
var recursiveAsyncReadLine = function () {
	rl.question(prefix,function(input){
		if(input == "exit") {
			return rl.close()
		}
		//calculator(addition only)
		if(input == "calc") {
			let num1 = 0;
			let num2 = 0;
			rl.question("choose a number:",function(input){
				num1 = parseInt(input);
				rl.question("choose another number:",function(input){
					num2 = parseInt(input);
					let result = num1+num2;
					console.log("result: "+result);
					let stopper = input+1
					if(input!=stopper){
						recursiveAsyncReadLine();
					}
				});
			});
		}
	});
};

recursiveAsyncReadLine();