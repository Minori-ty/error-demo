<template>
    <router-link to="/home">
        <el-button type="primary">回到首页 </el-button>
    </router-link>
    <div id="mse"></div>
    <div v-for="(item, index) in data" :key="index">
        <h1>{{ item.title }}</h1>
        <video
            controls
            poster="https://i0.wp.com/img9.doubanio.com/view/photo/s_ratio_poster/public/p2670418692.jpg"
            :src="item.url"
        ></video>
    </div>
</template>

<script setup>
const data = [
    {
        title: '第一话',
        url: 'https://1400077015.vod2.myqcloud.com/89aa9538vodgzp1400077015/d7681cba387702292623698920/LeOMfiKnXzQA.mp4',
    },
    {
        title: '第二话',
        url: 'https://1400077015.vod2.myqcloud.com/89aa9538vodgzp1400077015/033f46ad387702292800790233/WZgB9Pig8jkA.mp4',
    },
]
// import Player from 'xgplayer'
import Player from 'xgplayer/dist/core_player'
import play from 'xgplayer/dist/controls/play'
import fullscreen from 'xgplayer/dist/controls/fullscreen'
import progress from 'xgplayer/dist/controls/progress'
import volume from 'xgplayer/dist/controls/volume'
import pip from 'xgplayer/dist/controls/pip'
import flex from 'xgplayer/dist/controls/flex'

import { onMounted } from 'vue'
onMounted(() => {
    let player = new Player({
        el: document.querySelector('#mse'),
        url: 'https://1400077015.vod2.myqcloud.com/89aa9538vodgzp1400077015/d7681cba387702292623698920/LeOMfiKnXzQA.mp4',
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        defaultPlaybackRate: 1,
        playbackRateUnit: 'x',
        // controlPlugins: [play, fullscreen, progress, volume, pip, flex],
        // pip: true, //打开画中画功能
    })
})
</script>

<style lang="less" scoped>
video {
    width: 90vw;
    height: 45vw;
}
#mse {
    width: 200px;
    height: 100px;
}
</style>
