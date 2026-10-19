class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs: {[key: string]: string} = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const stack: string[] = [];

        for (let i = 0; i < s.length; i++){
            const char = s[i];

            if (char in pairs){
                const topChar = stack.pop();

                if (topChar !== pairs[char]){
                    return false
                }
            } else {
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}
