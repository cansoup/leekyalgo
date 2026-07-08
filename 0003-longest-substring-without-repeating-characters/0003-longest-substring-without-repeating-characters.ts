function lengthOfLongestSubstring(s: string): number {
    let index = 0
    let maxlen = 0
    let currlen = 0
    let currStr = ""

    while (index < s.length) {
        // if not appeared yet
        // - add current letter to currStr
        // - update currlen
        if (!currStr.includes(s[index])) {
            currStr = `${currStr}${s[index]}`
            currlen++;
        } else {
            // if already appeared
            // look for the closest index of the same letter
            const indexOfPreviousLetter = s.slice(0, index).lastIndexOf(s[index])
            // update currStr
            currStr = `${s.slice(indexOfPreviousLetter, index)}`
            currlen = currStr.length
        }

        // update maxlen
        maxlen = maxlen < currlen ? currlen : maxlen;
        index++;
    }

    return maxlen
};

// Failure 1: Haven't consider the case lie "anviaj". Only consider the case that duplicated characters appear right before current index, such as "pwwkew"
