class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left: number = 0;
        let right: number = numbers.length - 1;
        while (numbers[left] + numbers[right] !== target){
            if (numbers[left] + numbers[right] < target){
                left++;
            } else {
                right--;
            }
        }
        right++;
        left++;
        return [left, right]
    }
}
