<template>
    <h1>轻量版漫画站</h1>
    <el-tabs v-model="activeName">
        <el-tab-pane :label="item.date" :name="item.name" v-for="(item, index) in date" :key="index">
            <span v-if="item.list.length > 0" style="display: flex">
                <router-link target="_blank" :to="`/chapter/${v.path}`" v-for="(v, index) in item.list" :key="index">
                    <el-image :src="v.url"></el-image>
                    <p>{{ v.title }}</p>
                </router-link>
            </span>
            <p v-else>暂无漫画更新</p>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import date from '../data/date'
let activeName = new Date().getDay() + ''
</script>

<style lang="less" scoped>
.el-image {
    width: 200px;
    height: 250px;
    // text-align: center;
}
</style>
