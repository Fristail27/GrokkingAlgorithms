const quickSort = (array) => {
    if (array.length < 2) {
        return array
    }
    if (array.length === 2) {
        if (array[0] > array[1]) {
            return [array[1], array[0]]
        }
        return array
    }
    let pivot = array[0]
    let less = array.reduce((acc,el)=> {
        if (el < pivot) acc.push(el)
        return acc
    }, [])
    let more =  array.reduce((acc,el)=> {
        if (el > pivot) acc.push(el)
        return acc
    }, [])
    return [...quickSort(less), pivot, ...quickSort(more) ]
}
const test = [7, 5, 10, 56, 74, 23, 1, 3, 2]

console.log(quickSort(test))
