function reverse(x: number): number {

    const reverseNum = parseInt([...Math.abs(x).toString()].reverse().join(""))
    const result = x < 0 ? -reverseNum : reverseNum


    return result < (2**31)*-1 || result > (2**31-1) ? 0 : result
};