const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/test', {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('数据库连接上了')
    })
    .catch(() => {
        console.log('数据库连接失败')
    })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const User = mongoose.model('User', userSchema)

User.find()
    .select('name -_id')
    .then((res: any) => {
        console.log(res)
    })
