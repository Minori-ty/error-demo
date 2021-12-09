<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>
    <el-button type="primary" @click="back">返回目录</el-button>

    <el-row style="display: flex; justify-content: space-between">
        <router-link
            :to="{
                path: `/comic/${next}`,
                query: {
                    comic_path_word: comic_path_word,
                    uuid: uuid,
                },
            }"
        >
            <el-button type="primary" v-if="prev">上一话</el-button>
        </router-link>
        <router-link
            :to="{
                path: `/comic/${next}`,
                query: {
                    comic_path_word: comic_path_word,
                    uuid: uuid,
                },
            }"
        >
            <el-button type="primary" v-if="next">下一话</el-button>
        </router-link>
    </el-row>

    <h1>{{ title }}</h1>
    <el-row v-for="item in list">
        <el-image :src="item.url"> </el-image>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
defineProps({
    comic_path_word: {
        type: String,
    },
    uuid: {
        type: String,
    },
})
const route = useRoute()
let list = ref([])
let prev = ref('')
let next = ref('')
let title = ref('')
let comic_path_word = ref('')
let uuid = ref('')

const search = async () => {
    try {
        console.log('comic_path_word---' + route.query.comic_path_word, route.query.uuid)
        const { data } = await axios.get(
            `https://www.manga2020.com/api/v3/comic/${route.query.comic_path_word}/chapter/${route.query.uuid}?timeout=10000`
        )
        // const { data } = await axios.get(
        //     `https://www.manga2020.com/api/v3/comic/hydxjxrwgb/chapter/7c51d00e-c607-11e8-879b-024352452ce0?timeout=10000`
        // )
        console.log(data)
        list.value = data?.results.chapter?.contents
        prev.value = data.results.chapter?.prev
        next.value = data.results.chapter?.next
        title.value = data.results.chapter?.name
        comic_path_word.value = data.results.comic?.path_word
        uuid.value = prev?.value
        // console.log(prev.value, next.value)
    } catch (e) {
        // console.log(e)
    }
}
search()

const router = useRouter()
const back = () => {
    router.go(-1)
}
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
</style>
