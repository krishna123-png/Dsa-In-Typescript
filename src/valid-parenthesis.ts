type OpenParenthesis = '[' | '(' | '{'
type ClosedParenthesis = ']' | ')' | '}'

function isValid(s: string): boolean | undefined {
    if (s.length < 1 || s.length > 10000) {
        throw new Error("String too big");
    }

    if (!s.includes(']') && !s.includes(')') && !s.includes('}')) {
        return false;
    }
    
    const stringsAllowed = [']', '[', '}', '{', ')', '('] as const

    type AllowedChars = typeof stringsAllowed[number];

    const validParenthesis = {
        '}': '{',
        ']': '[',
        ')': '('
    } as const

    const array: AllowedChars[] = [];

    for (let char of s) {
        if (!stringsAllowed.includes(char as AllowedChars)) {
            throw new Error("invalid characters in string");
        }
        if (Object.values(validParenthesis).includes(char as OpenParenthesis)) {
            array.push(char as AllowedChars);
        }
        if (char as ClosedParenthesis in validParenthesis) {
            if (array.length === 0) {
                return false;
            }
            if (validParenthesis[char as ClosedParenthesis] === array[array.length - 1]) {
                array.pop();
            }
            else {
                return false;
            }
        }
    }
    return true;
}



