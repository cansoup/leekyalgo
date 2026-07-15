function longestPalindrome(s: string): string {
    let maxSubstring = "";

    for(let i = 0; i < s.length; i++) {
        let chkpoint = 0;
        let tempOddSubstring = "";
        let tempEvenSubstring = "";

        // odd-indexed, s[i] is the mid point
        while(s[i-chkpoint] && s[i+chkpoint]) {
            if(s[i-chkpoint] === s[i+chkpoint]) {
                tempOddSubstring = s.slice(i-chkpoint, i+chkpoint+1)
                chkpoint++;
            }
            else break;
        }

        chkpoint = 0;
        // even-indexed, s[i] and s[i+1] is the mid point
        while(s[i-chkpoint] && s[i+1+chkpoint]) {
            if(s[i-chkpoint] === s[i+1+chkpoint]) {
                tempEvenSubstring = s.slice(i-chkpoint, i+chkpoint+2)
                chkpoint++;
            }
            else break;
        }

        if (maxSubstring.length < Math.max(tempOddSubstring.length, tempEvenSubstring.length)) {
            maxSubstring = tempOddSubstring.length > tempEvenSubstring.length ? tempOddSubstring : tempEvenSubstring
        }
    }

    return maxSubstring;
}


// 1st trial
// function longestPalindrome(s: string): string {
//     let i, j;
//     let temp = "";

//     let maxLength = 0;
//     let maxSubstring = s[0];

//     for(i = 0; i < s.length - 1; i++) {
//         temp = s[i]

//         for(j = i + 1; j < s.length; j++) {
//             temp = temp.concat(s[j])

//             if(checkPalindrome(temp) && (temp.length > maxLength)) {
//                 maxLength = temp.length
//                 maxSubstring = temp
//             } 
//         }
//     }

//     // 3-layered loop => time limit exceed.... how can i solve?
//     return maxSubstring
// };

// function checkPalindrome(s: string): boolean {
//     // length = 3, half = 1
//     // length = 2, half = 1
//     const halfLength = Math.floor(s.length/2)
//     let index = 0;
//     let result = true;

//     if(s.length === 1) return true

//     while(index <= halfLength) {
//         if(s[index] !== s[s.length - 1 - index]) return false;
//         index++;
//     }

//     return result;
// }