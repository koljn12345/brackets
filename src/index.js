module.exports = function check(str, bracketsConfig) {
  let objectBracketsConfig={};
  let stack=[];
for (let i=0;i<bracketsConfig.length; i++) {
	objectBracketsConfig[bracketsConfig[i][0]]=bracketsConfig[i][1];
}
for(let j=0;j<str.length; j++){
	if(objectBracketsConfig[str[j]]==str[j] && str[j]==stack[stack.length-1]) {
		stack.pop();
	}
	else if(objectBracketsConfig[str[j]]) {
		stack.push(objectBracketsConfig[str[j]]);
    }
	else if(str[j]==stack[stack.length-1]){
		stack.pop();
	}
	else {return false;}
}
if(!stack.length) {return true;}
else {return false;}
}
