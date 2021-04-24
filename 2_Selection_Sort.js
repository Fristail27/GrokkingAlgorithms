const testArray = [27, 3, 99, 23, 10, 76, 77, 34, 2, 9, 71, 98, 45, 56]

const findSmallest = (arr) => {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

const selectionSort = (array) => {
    const copyArray = [...array]
    const newArray = []
    for (let i = 0; copyArray.length; i++) {
        let smallest = findSmallest(copyArray)
        newArray.push(copyArray[smallest])
        copyArray.splice(smallest,1)
    }
    return newArray
}
