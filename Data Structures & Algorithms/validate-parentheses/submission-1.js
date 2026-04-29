class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }


        const openBrackets = []
        for (let i = 0; i < s.length; i++) {
            if (/[\[({]/.test(s[i])) {
                openBrackets.push(s[i])
            } else {
                const equivalentBracket = pairs[s[i]]

                if (openBrackets[openBrackets.length - 1] === equivalentBracket) {
                    openBrackets.pop()
                } else {
                    return false
                }
            }
        }

     return openBrackets.length === 0 ? true : false
    }
}
