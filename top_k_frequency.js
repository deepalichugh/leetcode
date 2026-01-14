// Problem 347
// Using bucket sort
// Time Complexity: O(n)

var topKFrequent = function(nums, k) {
   let count = new Map();
   let buckets = Array.from({ length: nums.length + 1 }, () => []);
   let topKnums = [];

   for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1);
   }

   for (let [key, val] of count) {
        buckets[val].push(key);
   }

   for (let i = buckets.length - 1; i >= 0; i--) {
        if (topKnums.length === k) {
            return topKnums;
        }
        topKnums.push(...buckets[i]);
   }
};