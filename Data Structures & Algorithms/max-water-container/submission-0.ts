class Solution {
    maxArea(heights: number[]): number {
        let max: number = 0;
        let left: number = 0;
        let right: number = heights.length - 1;
        while (left < right){
            const curr = (right - left) * Math.min(heights[left], heights[right]);
            if (curr > max){
                max = curr;
            } 

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }

        }

        return max;
    }
}
