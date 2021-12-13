<template>
    <router-link to="/video">
        <el-button type="success">鬼灭之刃</el-button>
    </router-link>
    <h1>搜索</h1>
    <el-row>
        <el-col :span="20">
            <el-input v-model="keywords" placeholder="请输入漫画作品名称" @keydown.enter="isChange" />
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="isChange">搜索</el-button>
        </el-col>
    </el-row>

    <h1>轻量版漫画站</h1>
    <el-tabs v-model="activeName">
        <el-tab-pane label="星期一" name="1">
            <div>
                <el-image
                    src="https://mirrorvip.mangafunc.fun:12001/comic/drstone/cover/186d0511-3905-11e9-8ab4-024352452ce0.jpg!m_item"
                ></el-image>
                <p>石纪元</p>
            </div>
            <div>
                <el-image
                    src="https://mirrorvip.mangafunc.fun:12001/comic/zhoushuhuizhan/cover/afcab005-bb61-11e9-9069-024352452ce0.jpg!m_item"
                ></el-image>
                <p>咒术回战</p>
            </div>
            <div>
                <el-image
                    src="https://mirrorvip.mangafunc.fun:12001/comic/haizeiwang/cover/036c6473-c7bc-11e8-881a-024352452ce0.jpg!m_item"
                ></el-image>
                <p>海贼王</p>
            </div>
        </el-tab-pane>
        <el-tab-pane label="星期二" name="2">无漫画更新</el-tab-pane>
        <el-tab-pane label="星期三" name="3">
            <div>
                <el-image
                    src="https://mirrorvip2.mangafunc.fun:12001/comic/nvyouchengshuang/cover/84545b04-5973-11ea-a1dd-00163e0ca5bd.jpg!m_item"
                ></el-image>
                <p>女友成双</p>
            </div>
            <div>
                <el-image
                    src="https://mirror77.mangafuna.xyz:12001/comic/nvpengyoujiewoyixia/cover/d385087a-57d4-11ec-a996-024352452ce0.jpg!kb_w_item_webp"
                ></el-image>
                <p>租借女友</p>
            </div>
            <div>
                <el-image
                    src="https://mirrorvip.mangafunc.fun:12001/comic/huawuyu/cover/1d582244-40a5-11ec-93dd-024352452ce0.jpg!m_item"
                ></el-image>
                <p>化物语</p>
            </div>
        </el-tab-pane>
        <el-tab-pane label="星期四" name="4">
            <router-link
                target="_blank"
                to="/chapter/hydxjxrwgb?cover=https://mirror.mangafunc.fun/comic/hydxjxrwgb/cover/1ae72308-abaf-11e9-8ef6-024352452ce0.jpg!kb_m_item"
            >
                <div @click="fn">
                    <el-image
                        src="https://mirror.mangafunc.fun/comic/hydxjxrwgb/cover/1ae72308-abaf-11e9-8ef6-024352452ce0.jpg!kb_m_item"
                    ></el-image>
                    <p>辉夜大小姐想让我告白</p>
                </div>
            </router-link>
        </el-tab-pane>
        <el-tab-pane label="星期五" name="5">无漫画更新</el-tab-pane>
        <el-tab-pane label="星期六" name="6">无漫画更新</el-tab-pane>
        <el-tab-pane label="星期日" name="7">无漫画更新</el-tab-pane>
    </el-tabs>

    <el-row>
        <el-col :span="6" v-for="(item, index) in comicList" :key="index">
            <router-link
                target="_blank"
                :to="{
                    name: 'chapter',
                    query: {
                        cover: item.cover,
                        path_word: item.path_word,
                    },
                    params: {
                        id: item.path_word,
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
let activeName = new Date().getDay() + ''

const fn = () => {
    console.log('点击了')
}

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

        // console.log(comicList.value)
    } catch {
        console.log('请求失败')
    }
}

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

.el-tab-pane {
    display: flex;
}
</style>
