<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>

    <el-row>
        <el-image :src="$route.query.cover"></el-image>
    </el-row>
    <span v-for="item in list">
        <router-link
            :to="{
                path: `/comic/${item.uuid}`,
                query: {
                    comic_path_word: item.comic_path_word,
                    uuid: item.uuid,
                },
            }"
        >
            <el-button>{{ item.name }}</el-button>
        </router-link>
    </span>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
defineProps({
    cover: {
        type: String,
    },
    path_word: {
        type: String,
    },
})
const route = useRoute()
const list = ref([])

const search = async () => {
    console.log(route.query.path_word)
    try {
        const { data } = await axios.get(
            `https://www.manga2020.com/api/v3/comic/${route.query.path_word}/group/default/chapters?limit=0&timeout=10000`
        )
        console.log(data.results.list)
        list.value = data.results.list
    } catch (e) {
        console.log(e)
    }
}
search()
</script>

<style lang="less" scoped></style>
