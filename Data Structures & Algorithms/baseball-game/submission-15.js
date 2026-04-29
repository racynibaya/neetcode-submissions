class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const newArr = []

        for (let i = 0; i < operations.length; i++) {
            switch(operations[i]) {

                case "+": 

                    const latestVal = newArr.slice(-2).reduce((acc,cur) => acc + cur, 0)

                    newArr.push(latestVal)
                    break;
                case "C":
                    newArr.pop()
                    break;
                case "D":
                    const doubleTheValue = Number(newArr[newArr.length - 1] * 2)
                    newArr.push(doubleTheValue)
                    console.log(newArr)

                    break;
                default:
                    newArr.push(Number(operations[i]))
            }

        }

        return newArr.reduce((acc, cur) => acc + cur, 0)
    }
}
