function isPalindrome(x: number): boolean {
    const xInString = x.toString()

    console.log(xInString.length, Math.sqrt(xInString.length))
    for(let i = 0; i <= xInString.length / 2; i++) {
        console.log(xInString[i], xInString[xInString.length - 1 - i])
        if(xInString[i] !== xInString[xInString.length - 1 - i]) return false;
    }

    return true;
};