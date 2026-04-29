class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1
        let newArr = []

        for (let i = arr.length; i > 0; i--) {
            
            let newMax = Math.max(rightMax, ...arr.slice(i))

            newArr[i - 1] = newMax;


        }

        return newArr
    }
}
