function twoSum(nums, target) {
    const map = {};
    for (const index in nums) {
        let compliment = target - nums[index];
        if(compliment in map) {
            return [map[compliment], index];
        }
        map[nums[index]] = index;
    }
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] equals the target)