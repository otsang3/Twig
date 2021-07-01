const numsArr = [1, 2, 3, 4, 5];
const numOfGroups = 3;

const groupArrayElements = (numsArr, numOfGroups) => {
    // early return if first arg is not an array and length greater than 0, or if second arg is not an int greater than 0
    const argOneIsAnArr = Array.isArray(numsArr) && numsArr.length > 0;
    const argTwoIsAnInt = Number.isInteger(numOfGroups) && numOfGroups > 0;

    if (!argOneIsAnArr || !argTwoIsAnInt) return;

    // the max number of elements allowed in each array element
    const maxNumberOfElementsPerArr = Math.ceil(numsArr.length / numOfGroups);

    // temporary numCount used for tracking the loop
    let numCount = 0;

    // temporary array to store the nums within each group
    let tempArr = [];

    // array to return
    let groupArr = [];
    numsArr.forEach((num) => {
        tempArr.push(num);
        numCount++;
        // when the numCount is reached, add to the return array and reset numCount and temp array
        if (numCount === maxNumberOfElementsPerArr) {
            groupArr.push(tempArr);
            numCount = 0;
            tempArr = [];
        }
    });

    // push any remainder to the final array if not empty
    if (tempArr.length > 0) {
        groupArr.push(tempArr);
    }

    return groupArr;
};

console.log(groupArrayElements(numsArr, numOfGroups));

module.exports = groupArrayElements;
