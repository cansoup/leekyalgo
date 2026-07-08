function lengthOfLongestSubstring(s: string): number {
    let index = 0 
    let maxlen = 0
    let currlen = 0
    let currStr = ""

    while(index < s.length) {
        // 아직 없으면
        // currStr에 현재 문자 추가
        // currlen 갱신
        if (!currStr.includes(s[index])) {
            currStr = `${currStr}${s[index]}`
            currlen++;
        } else {
            // 이미 있는 문자
            // 가장 가까운 문자의 index를 찾음
            const indexOfPreviousLetter = s.slice(0, index).lastIndexOf(s[index])
            // currStr 초기화
            // 조건에 따라 maxlen 갱신
            console.log(indexOfPreviousLetter)
            currStr = `${s.slice(indexOfPreviousLetter, index)}`
            currlen = currStr.length
        }

        maxlen = maxlen < currlen ? currlen : maxlen;
        index++;
    }

    return maxlen
};

// Failure 1: anviaj와 같이 중복되는 글자가 바로 전에 등장하는 게 아니라 한참 전에 등장하는 경우에 대한 고려를 안함