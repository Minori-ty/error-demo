<template>
    <h1 v-for="i in a.value">a</h1>
    <h1>搜索</h1>
    <el-row>
        <el-col :span="20">
            <el-input v-model="keywords" placeholder="请输入搜索关键词" @keydown.enter="isChange" />
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="isChange">搜索</el-button>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="6" v-for="(item, index) in comicList" :key="index">
            <router-link
                :to="{
                    path: `/chapter/${item.path_word}`,
                    query: {
                        cover: item.cover,
                        path_word: item.path_word,
                    },
                }"
            >
                <el-image :src="item.cover" lazy></el-image>
                <p>{{ item.name }}</p>
            </router-link>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

let count = ref(0)
let comicList = ref([])
const keywords = ref('')
const originKeyword = ref('')

const isChange = () => {
    comicList.value = []
    count.value = 0
    search()
}

const search = async () => {
    try {
        originKeyword.value = keywords.value
        const { data } = await axios.get('https://www.manga2020.com/api/v3/search/count', {
            params: {
                offset: count.value * 30,
                platform: 2,
                limit: 30,
                q: keywords.value,
            },
        })

        count.value++

        comicList.value = [...comicList.value, ...data.results.comic?.list]

        console.log(comicList.value)
    } catch {
        console.log('请求失败')
    }
}

const a = reactive([3, 2, 1])
console.log(a)
const b = ref({ name: 'x', age: 1 })
console.log(b)

//滚动条在Y轴上的滚动距离

function getScrollTop() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0
    if (document.body) {
        bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
    return scrollTop
}

//文档的总高度

function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
    }
    scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight
    return scrollHeight
}

//浏览器视口的高度

function getWindowHeight() {
    var windowHeight = 0
    if (document.compatMode == 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
    } else {
        windowHeight = document.body.clientHeight
    }
    return windowHeight
}

window.onscroll = function () {
    // console.log(1)
    // search()
    // console.log(Math.floor(getScrollTop() + getWindowHeight()), getScrollHeight())
    if (Math.floor(getScrollTop() + getWindowHeight()) == getScrollHeight()) {
        search()
    }
}
</script>

<style lang="less" scoped>
.el-image {
    width: 200px;
    height: 250px;
    // text-align: center;
}

.el-col,
h1 {
    text-align: center;
}
</style>
