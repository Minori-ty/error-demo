<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>

    <el-row>
        <el-image :src="$route.query.cover"></el-image>
    </el-row>

    <span v-for="item in list">
        <router-link
            :to="{
                name: `comic`,
                params: {
                    comic_id: path_word,
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
})

var reg = /(?<=chapter\/)([A-Za-z-]+)(?=(\?)?)/g
// console.log(str.match(reg))
var str = window.location.href
var path_word = str.match(reg)[0]

const route = useRoute()
const list = ref([])

const search = async () => {
    console.log(path_word)
    try {
        const { data } = await axios.get(
            `https://www.manga2020.com/api/v3/comic/${path_word}/group/default/chapters?limit=0&timeout=10000`
        )
        // console.log(data.results.list)
        list.value = data.results.list
    } catch (e) {
        console.log('出错了')
    }
}
search()
</script>

<style lang="less" scoped></style>
