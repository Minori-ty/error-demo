import qs from 'qs'
var obj = {
    name: 'xx',
    a1: {
        b2: {
            c3: 1,
        },
    },
}

console.log(qs.stringify(obj))
