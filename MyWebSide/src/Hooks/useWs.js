var arr = [1, 2, 3, 4, 5]
;(() => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] > 2) return 0
    }
})()

return
arr.find((v) => {
    console.log(v)
    return v > 3
})
// console.log(a)
