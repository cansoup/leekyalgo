function convert(s: string, numRows: number): string {
    if(numRows === 1) return s

    let zigzagArray = [];
    let stringIndex = 0;
    let result = "";

    while(stringIndex <= s.length - 1) {
        zigzagArray.push(s.slice(stringIndex, stringIndex + 2 * numRows - 2))
        stringIndex += 2 * numRows - 2;
    }

    zigzagArray = zigzagArray.map( x => [x.slice(0, numRows), [...`*${x.slice(numRows)}`].concat(new Array(numRows - `*${x.slice(numRows)}`.length).fill("*")).reverse().join("")]).flat()

    for(let i = 0; i<numRows; i++) {
        for(let j = 0; j<zigzagArray.length; j++) {
            result += zigzagArray[j][i] ?? ""
        }
    }

    return result.replaceAll("*", "")
};