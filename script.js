function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let n=s1.length;
	for(let i=0;i<n;i++){
		if(s2.charAt(0)===s1[i]){
			return i;
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
