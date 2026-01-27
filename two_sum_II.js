var twoSum = function(numbers, target) {
    let nums = new Set(numbers);
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }
    
        if (numbers[i] + numbers[j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return [];
};