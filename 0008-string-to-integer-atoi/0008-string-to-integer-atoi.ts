// funtion using regular expression
function myAtoi(s: string): number {
    const trimmed = s.trim();
    const match = trimmed.match(/^[+-]?\d+/);

    if (!match) return 0;

    const num = parseInt(match[0], 10);

    return Math.max(Math.min(num, 2 ** 31 - 1), -(2 ** 31));
}

// function myAtoi(s: string): number {
//     // 1. ignore white space
//     const ignoreWhiteSpace = s.trim();
    
//     let positiveFlag = 1;
//     let result = "";
//     for(let i=0; i<ignoreWhiteSpace.length; i++) {

//         if(i === 0) {
//             switch (ignoreWhiteSpace[0]){
//                 case "-":
//                     positiveFlag = -1;
//                     continue;
//                 case "+":
//                     positiveFlag = 1;
//                     continue;
//             }
//         }

//         if(!isInteger(ignoreWhiteSpace[i])) break;
//         result += ignoreWhiteSpace[i];
//     }

//     if(!isInteger(result)) return 0
//     if(parseInt(result) * positiveFlag < (-2)**31) return (-2)**31
//     if(parseInt(result) * positiveFlag > 2**31 - 1) return 2**31 - 1

//     return parseInt(result) * positiveFlag;
// };

// function isInteger(s: string): boolean {
//     return !isNaN(parseInt(s)) && typeof parseInt(s) === 'number'
// }