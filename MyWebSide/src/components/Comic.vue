<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>
    <el-button type="primary" @click="back">返回目录</el-button>

    <el-row style="display: flex; justify-content: space-between">
        <el-button type="primary" v-if="prev" @click="prevChapter">上一话</el-button>
        <el-button type="primary" v-if="next" @click="nextChapter">下一话</el-button>
    </el-row>

    <h1>{{ title }}</h1>
    <!-- <el-row v-for="item in list">
        <el-image :src="item.url" lazy> </el-image>
    </el-row> -->
    <div class="wrap" ref="wrapRef">
        <div v-for="item in list">
            <div class="skeleton"></div>
            <img :data-src="item.url" src="#" />
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, onUpdated } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
let list = ref([])
let prev = ref('')
let next = ref('')
let title = ref('')

var reg1 = /(?<=comic\/)([A-Za-z-]+)(?=(\/)?)/g
var reg2 = /(?<=\/)([A-Za-z0-9-]+)(?=(\/)?)/g
// console.log(str.match(reg))
var str = ref('')
var comic_id = ref('')
var uuid = ref('')
var comic_path_word = ref('')
// console.log(comic_id, uuid)

const init = () => {
    str.value = window.location.href
    // console.log(str.value)
    comic_id.value = str.value.match(reg1)[0]
    uuid.value = str.value.match(reg2)[3]
    // console.log(uuid.value)
    // comic_path_word.value = ref('')
}
init()
const search = async () => {
    try {
        // console.log(uuid.value)
        const { data } = await axios.get(
            `https://www.manga2020.com/api/v3/comic/${comic_id.value}/chapter/${uuid.value}?timeout=10000`
        )

        list.value = data.results.chapter?.contents
        prev.value = data.results.chapter?.prev
        next.value = data.results.chapter?.next
        title.value = data.results.chapter?.name
        comic_path_word.value = data.results.comic?.path_word
    } catch (e) {
        console.log(e)
    }
}
search()

const router = useRouter()
const back = () => {
    router.push(`/chapter/${comic_path_word.value}`)
}
const prevChapter = async () => {
    await router.push(`/comic/${comic_id.value}/${prev.value}`)
    list.value = ''
    title.value = ''
    await init()
    search()
}
const nextChapter = async () => {
    await router.push(`/comic/${comic_id.value}/${next.value}`)
    list.value = ''
    title.value = ''
    await init()
    search()
}

const wrapRef = ref()
onUpdated(() => {
    console.log(document.querySelectorAll('img'))
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(entry.target.getAttribute('data-src'))
                clearInterval(timer)
                console.log(entry.target.previousElementSibling)
                var timer = setInterval(() => {
                    entry.target.setAttribute('src', entry.target.getAttribute('data-src'))
                    entry.target.previousElementSibling.removeAttribute('class')
                    clearInterval(timer)
                }, 200)
                observer.unobserve(entry.target)
            }
        })
    })
    document.querySelectorAll('img').forEach((img) => {
        console.log(img)
        observer.observe(img)
    })
})
</script>

<style lang="less" scoped>
.el-row {
    .el-image {
        margin: 0 auto;
    }
}
h1 {
    text-align: center;
}

.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    width: var(--width);
    height: var(--height);
    /* background-color: red; */
}

.skeleton {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    position: absolute;
    width: var(--width);
    height: var(--height);
    background-color: var(--loading);
    background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 60%
        )
        var(--loading);
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
    to {
        background-position-x: -20%;
    }
}
</style>
