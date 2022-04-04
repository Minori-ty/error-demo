<template>
    <!-- <Store /> -->
    <h1>漫画轻量站</h1>
    <h2>搜索</h2>

    <el-row>
        <el-col :span="20">
            <el-input v-model="keywords" @keydown.enter="isChange" placeholder="请输入漫画作品名称" />
        </el-col>
        <el-col :span="2">
            <el-button type="primary" @click="isChange">搜索</el-button>
        </el-col>
        <!-- <el-col :span="2">
            <el-switch v-model="isR18" active-color="#13ce66" inactive-color="#ff4949" />
        </el-col> -->
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
import { ref } from 'vue'
import { search as searchComic } from '../request/relacomic'
import { search as copySearch } from '../request/copymanga'
import { getScrollTop, getScrollHeight, getWindowHeight } from '../Hooks'
import type { comicList as list } from '../types/relacomic'
import { ElMessage } from 'element-plus'
import Date from '../components/Date.vue'
import Store from './store'

let keywords = ref('')
let count = ref(0)
let comicList = ref<list | []>([])
let isR18 = ref(false)

const isChange = () => {
    comicList.value = []
    count.value = 0
    search()
}

const search = async () => {
    if (keywords.value == '') return

    const list = ref<list | []>([])

    //是否开启R18
    if (isR18.value) {
        //使用热辣漫画的搜索
        const data = await searchComic(count.value, keywords.value)
        list.value = data.results.comic.list
    } else {
        //使用拷贝漫画的搜索
        const copyData = await copySearch(count.value, keywords.value)
        list.value = copyData.results.list
    }
    count.value++

    // console.log(copyData.results.list)
    // console.log(list)

    if (list.value.length <= 0) {
        return ElMessage.error('到底了，没有新内容了')
    }

    comicList.value = [...comicList.value, ...list.value] as list
    // console.log(list)
}

window.onscroll = function () {
    var isBottom =
        getScrollTop() + getWindowHeight() == getScrollHeight() ||
        getScrollTop() + getWindowHeight() + 1 == getScrollHeight()
    // console.log(getScrollTop() + getWindowHeight(), getScrollHeight())
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
