function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const cleanStr = [];
    const indexMap = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            cleanStr.push(str[i].toLowerCase());
            indexMap.push(i); // map cleaned index to original index
        }
    }

    const cleanSub = subStr.replace(/\s+/g, "").toLowerCase();

    // Manual substring search
    for (let i = 0; i <= cleanStr.length - cleanSub.length; i++) {
        let match = true;

        for (let j = 0; j < cleanSub.length; j++) {
            if (cleanStr[i + j] !== cleanSub[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return indexMap[i]; // return original index
        }
    }

    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
