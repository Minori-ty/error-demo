export default [
    {
        url: '/user/info',
        type: 'get',
        response: () => {
            return {
                code: 200,
                message: '成功',
                data: {
                    age: 11,
                    name: 'xx',
                    son: {
                        age: 27,
                    },
                },
            }
        },
    },
]
