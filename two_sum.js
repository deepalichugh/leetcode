var twoSum = function(nums, target) {
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num2 = target - nums[i];
        if (indices.has(num2)) {
            return [i, indices.get(num2)];
        }
        indices.set(nums[i], i);
    }
};
