class Solution {
    
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const el of tokens){
            if (!['*', '/', '+', '-'].includes(el)){
                stack.push(Number(el));
                continue;
            }
            const a = stack.pop()!;
            const b = stack.pop()!;

            switch(el){
                case "+":
                    stack.push(b + a);
                    break;
                case "-":
                    stack.push(b - a);
                    break;
                case "*":
                    stack.push(b * a);
                    break;
                case "/":
                    stack.push(Math.trunc(b / a));
                    break;
            }
        }
        return stack[0]

    }
}
