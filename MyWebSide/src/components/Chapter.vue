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
    <div class="loading" v-if="flag">
        <!-- <div class="img"></div> -->
        <el-button v-for="v in 50" class="button">&emsp;&emsp;&emsp;</el-button>
    </div>
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
var flag = ref(true)
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
        flag.value = false
    } catch (e) {
        console.log('出错了')
    }
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
</style>
