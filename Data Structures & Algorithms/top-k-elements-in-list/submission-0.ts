class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();
        for (const num of nums){
            counts.set(num, (counts.get(num) || 0) + 1);
        }

        const freq: number[][] = Array.from({length: nums.length + 1}, () => []);

        for (const [num, count] of counts.entries()){
            freq[count].push(num);
        }

        const res: number[] = [];
        for (let i = freq.length-1; i > 0; i--){
            for (const num of freq[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
