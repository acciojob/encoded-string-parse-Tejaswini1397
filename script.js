const parseCode = (str) => {
  // your code here
	let res=str.split("000");
	
	return res;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

