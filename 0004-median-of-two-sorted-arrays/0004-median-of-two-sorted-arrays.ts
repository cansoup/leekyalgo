function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedNum = nums1.concat(nums2)
    const sortedNum = mergedNum.sort((a, b) => a - b)

    const mid = Math.floor(sortedNum.length/2)

    console.log(sortedNum);

    return sortedNum.length % 2 === 0 ? (sortedNum[mid - 1] + sortedNum[mid])/2 : (sortedNum[mid])
};