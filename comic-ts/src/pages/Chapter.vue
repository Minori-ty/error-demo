<template>
    <router-link to="/"><el-button type="success">回到搜索页面</el-button></router-link>

    <el-row>
        <el-image :src="cover"></el-image>
        <h1>最后更新时间: {{ list[list.length - 1]?.datetime_created }}</h1>
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
    <div class="loading" v-if="flag">
        <!-- <div class="img"></div> -->
        <el-button v-for="v in 50" class="button">&emsp;&emsp;&emsp;</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchChapter } from '../request/relacomic'
import { chapterList } from '../types/relacomic'
import { useRoute } from 'vue-router'
defineProps({
    cover: {
        type: String,
    },
})
var flag = ref(true)
var reg = /(?<=chapter\/)([A-Za-z-]+)(?=(\?)?)/g

var str = window.location.href
var path_word = str.match(reg)![0]
const list = ref<chapterList | []>([])
const cover = useRoute().query.cover
const search = async () => {
    const data = await searchChapter(path_word)
    list.value = data.results.list
    flag.value = false
}
search()
</script>

<style lang="less" scoped>
.img,
.button {
    --loading: #ededed;

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
.img {
    --width: 270px;
    --height: 360px;
    // position: absolute;
    width: var(--width);
    height: var(--height);
}
@keyframes loading {
    to {
        background-position-x: -20%;
    }
}
.el-button {
    width: 120px;
    margin: 0 10px;
}
</style>
