export default [
    {
        url: '/goods',
        type: 'get',
        response: () => {
            return {
                code: 200,
                message: '成功',
                data: [
                    {
                        name: '香蕉',
                        price: 2,
                    },
                    {
                        name: '西瓜',
                        price: 4,
                    },
                ],
            }
        },
    },
    {
        url: '/banana',
        type: 'get',
        response: () => {
            return {
                code: 200,
                message: '成功',
                data: {
                    name: '香蕉',
                    price: 2,
                },
            }
        },
    },
]
