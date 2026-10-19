class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedText: string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let front: number = 0;
        let back: number = cleanedText.length - 1;
        while (front <= back){
            if (cleanedText[front] !== cleanedText[back]){
               return false;
            }
            front++;
            back--;
            
        }
        return true;

    }
}
