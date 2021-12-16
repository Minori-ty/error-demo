<template>
    <h1>这里是组件</h1>
    <el-row>
        <el-col :span="20">
            <el-input v-model="keywords" @keydown.enter="isChange" placeholder="请输入漫画作品名称" />
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="isChange">搜索</el-button>
        </el-col>
    </el-row>

    <Date />

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

<script setup lang="ts">
import { ref, toRefs, reactive } from 'vue'
import { search as searchComic } from '../request'
import { getScrollTop, getScrollHeight, getWindowHeight } from '../Hooks'
import type { comicList as list } from '../types'
import { ElMessage } from 'element-plus'
import Date from '../components/Date.vue'

let keywords = ref('')
let count = ref(0)
let comicList = ref<list | []>([])

const isChange = () => {
    comicList.value = []
    count.value = 0
    search()
}

const search = async () => {
    if (keywords.value == '') return
    let {
        results: {
            comic: { list },
        },
    } = await searchComic(count.value, keywords.value)
    count.value++
    console.log(list)

    if (list.length <= 0) {
        return ElMessage.error('到底了，没有新内容了')
    }

    comicList.value = [...comicList.value, ...list] as list
    // console.log(list)
}

window.onscroll = function () {
    var isBottom =
        getScrollTop() + getWindowHeight() == getScrollHeight() ||
        getScrollTop() + getWindowHeight() + 1 == getScrollHeight()
    console.log(isBottom)
    if (isBottom) {
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
</style>
