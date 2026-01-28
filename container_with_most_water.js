var maxArea = function(height) {
    let maxWater = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let minHeight = Math.min(height[i], height[j]);
        maxWater = Math.max(maxWater, (j - i) * minHeight);
        if (minHeight === height[i]) {
            i++;
        } else {
            j--;
        }
    }

    return maxWater;
};