<template>
    <router-link to="/home">
        <el-button type="primary">回到首页 </el-button>
    </router-link>
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
</script>

<style lang="less" scoped>
video {
    width: 90vw;
    height: 45vw;
}
</style>
