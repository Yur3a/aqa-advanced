// Sum all the numbers Of a given array(cq.list), except the highest and the lowest element(by value, not by index!
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

function sumArray(array) {
    if (!Array.isArray(array) || array.length < 2) {
        return 0;
    }

    const sorted = array.sort((a, b) => a - b);

    const lowestVal = sorted[0];
    const largestVal = sorted[sorted.length - 1];

    const arrayWithoutMinMax = sorted.slice(1, -1);
    const initialValue = 0;
    const total = arrayWithoutMinMax.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

    return total;
}

// Examples
console.log(sumArray([6, 2, 1, 8, 10])); // Outputs: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Outputs: 6
