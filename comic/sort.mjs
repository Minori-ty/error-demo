// import axios from 'axios'

// var arr = []
// const getimages = async () => {
//     const { data } = await axios.get(
//         'https://api.copymanga.com/api/v3/comic/shaoniandeshenyuan/chapter2/805e42c4-58c6-11ea-ba16-00163e0ca5bd?timeout=10000'
//     )
//     console.log(data.results.chapter.contents)
//     arr = data.results.chapter.words
//     arr.sort((a, b) => a - b)
//     console.log(arr)
// }
// getimages()
var arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 43, 52, 44, 34,
    42, 45, 29, 28, 49, 31, 50, 30, 38, 39, 33, 46, 27, 40, 37, 48, 35, 32, 51, 36, 47, 41, 53,
]

var images = [
    {
        uuid: 'a517c220-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a50ce9d6-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a64b3e56-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a640f2c0-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a68b730e-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a6864e24-58c6-11ea-a72c-00163e0ca5bd.JPG!kb_m_read_large',
    },
    {
        uuid: 'a6d28e06-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a6a3f672-58c6-11ea-a451-00163e0ca5bd.JPG!kb_m_read_large',
    },
    {
        uuid: 'a6efe564-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a6e94862-58c6-11ea-a451-00163e0ca5bd.JPG!kb_m_read_large',
    },
    {
        uuid: 'a7268754-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a6ff3c58-58c6-11ea-b4a0-00163e0ca5bd.JPG!kb_m_read_large',
    },
    {
        uuid: 'a762dd3a-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a7398fb6-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a7c4daa8-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a77901f0-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a82ee01a-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a7dc4166-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a89781f6-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a849ee96-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a8f9bb1e-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a8ac6d46-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a980ccee-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a9144754-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'a9e3482e-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a993c8c6-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'aa43adae-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/a9f7df3c-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'aaa28220-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/aa582d6a-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'aae1c0b6-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/aab8f276-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ab2210c6-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/aaf5e7da-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ab59d0c4-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ab334d3c-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'abe08204-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ab6c67c0-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ac439100-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/abf6e1d4-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'aca32f48-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ac554738-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ad0750d6-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/acb6e7f4-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ad434e10-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ad1a8e08-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ad807a7e-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ad583410-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ade09dfa-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ad98dc68-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ae17bfc4-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/adefebf2-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'ae8f6632-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/ae877f1c-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b1fd5338-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b1f5da04-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b6104e3a-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b5e68186-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b6db1fb6-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b68d58ee-58c6-11ea-a451-00163e0ca5bd.JPG!kb_m_read_large',
    },
    {
        uuid: 'b4e42522-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b4968d12-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b523599a-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b4fab404-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b0d2e3d8-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b0cc7c78-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b7234e26-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b71e6b0e-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b26659aa-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b25f5f06-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b237a042-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b20ffdc6-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'af2fb65a-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/aee58ea4-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b4415734-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b3f6a14e-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b024b4d4-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/afd26df0-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b73a38b6-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b732f902-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b5cb8160-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b57e9a12-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b0bad48c-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b0749cce-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b56402c4-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b539f0a6-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b371a0b6-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b3476dbe-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b30c579c-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b2b33d9c-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'aecf8a96-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/aea4e5a2-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b66cc106-58c6-11ea-b4a0-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b62683c6-58c6-11ea-b4a0-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b70f4f48-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b6e950c2-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b3d9fa08-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b38fac96-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'afbb7ca8-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/af42e0ae-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b2937c6e-58c6-11ea-a451-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b28c3a08-58c6-11ea-a451-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b0606c5e-58c6-11ea-a72c-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b0396d5c-58c6-11ea-a72c-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b480123a-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b458fb5a-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
    {
        uuid: 'b79ed492-58c6-11ea-ba16-00163e0ca5bd',
        url: 'https://mirror2.mangafunc.fun/comic/shaoniandeshenyuan/fe860/b7540caa-58c6-11ea-ba16-00163e0ca5bd.jpg!kb_m_read_large',
    },
]

var len = arr.length
for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            //相邻元素两两对比
            var temp = arr[j + 1] //元素交换
            var t = images[j + 1]
            arr[j + 1] = arr[j]
            images[j + 1] = images[j]

            arr[j] = temp
            images[j] = t
        }
    }
}

function a(b, c) {
    return { b, c }
}
a([1], [2])
console.log(a([1], [2]).c)
