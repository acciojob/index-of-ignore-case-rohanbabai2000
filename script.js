function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const main = str.toLowerCase();
    const sub = subStr.toLowerCase();

    for (let i = 0; i <= main.length - sub.length; i++) {
        let found = true;

        for (let j = 0; j < sub.length; j++) {
            if (main[i + j] !== sub[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }

    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
