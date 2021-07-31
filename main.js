//import
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require("fs");
//global variables
let prefix = "Bc: "
let date = new Date();

//title
console.log("-----BCSCRIPT-----")
var recursiveAsyncReadLine = function () {
	//main input event
	rl.question(prefix,function(input){
		//1.exit
		if(input == "exit") {
			return rl.close()
		}
		//2.calculator(addition only)
		if(input == "calc") {
			let operator = "+"
			let num1 = 0;
			let num2 = 0;
			let result;
			rl.question("choose an operator:",function (input) {
				let operator = input
				rl.question("choose a number:",function(input){
					num1 = parseInt(input);
					rl.question("choose another number:",function(input){
						num2 = parseInt(input);
						switch(operator){
							case "+":
							    result = num1+num2;	
							    console.log("result: "+result);
							    break;
							case "-":
							    result = num1-num2;	
							    console.log("result: "+result);
							    break;
							case "*":
							    result = num1*num2;	
							    console.log("result: "+result);
							    break;
							case "/":
							    result = num1/num2;	
							    console.log("result: "+result);
							    break;
							default:	
							    console.log("Invalid Operator");
							    break;
						}
						let stopper = input+1
						if(input!=stopper){
							recursiveAsyncReadLine();
						}
					});
				});
			});
		}
		//3.date,time
		if(input == "time"){
			console.log(date);
		}
		//4.delete file
		if(input == "delete"){
			rl.question("choose file name:",function (input) {
				fs.unlink(input, function (err) {
					if (err) throw err;
					console.log(input +' deleted!');
					recursiveAsyncReadLine();
				});
			})
		}
		//end
		recursiveAsyncReadLine();
	});
};
recursiveAsyncReadLine();