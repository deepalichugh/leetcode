var trap = function(height) {
    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let water = 0;

    while (l < r) {
        if (height[l] <= height[r]) {
            leftMax = Math.max(height[l], leftMax);
            water += leftMax - height[l];
            l++;
        } else {
            rightMax = Math.max(rightMax, height[r]);
            water += rightMax - height[r];
            r--;
        }
    }

    return water;
};