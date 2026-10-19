class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const res = new Map<string, string[]>();
        for (const str of strs){
            const sortedStr = str.split('').sort().join('');
            if (!res.has(sortedStr)){
                res.set(sortedStr, []);
            }

            res.get(sortedStr)!.push(str)
        }

        return Array.from(res.values());
    }
}
