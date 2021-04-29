const fractalRecursion = (num) => {
    if (num === 1) return 1
    if (num === 2) return 2
    return num * fractalRecursion(num-1)
}