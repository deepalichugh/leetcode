function minimumDifference(nums, k) {
    if (k === 1) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let minDiff = Number.MAX_VALUE;

    for (let left = 0; left < nums.length; left++) {
        let right = left + k - 1;
        if (right < nums.length) {
            if (minDiff > nums[right] - nums[left]) {
                minDiff = nums[right] - nums[left];
            } 
        } else {
            return minDiff;
        }
    }
}