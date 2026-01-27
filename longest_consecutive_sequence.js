var longestConsecutive = function(nums) {
    let numArr = new Set(nums);
    let longest = 0;

    for (let num of numArr) {
        if (!numArr.has(num - 1)) {
            let counter = 1;
            while (numArr.has(num + counter)) {
                counter++;
            }
            longest = Math.max(longest, counter);
        }
    }

    return longest;
};
