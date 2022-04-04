<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <el-skeleton :loading="loading" animated :count="5">
            <template #template>
                <el-skeleton-item style="height: 1270px" variant="image" :throttle="10000" />
                <div>
                    <div style="margin-top: 16px; height: 16px"></div>
                </div>
            </template>
            <template #default>
                <el-row
                    v-for="item in images.values"
                    :key="item.uuid"
                    style="display: flex; flex-direction: column; align-items: center"
                >
                    <el-image :src="item.url"></el-image>
                    <div style="margin-top: 16px; height: 16px"></div>
                </el-row>
            </template>
        </el-skeleton>
    </div>
    <!-- <fe-image
        :src="item.url"
        width="150px"
        height="150px"
        skeleton
        v-for="(item, index) in images"
        :key="index"
    ></fe-image> -->
    <!-- <el-row
        v-for="item in images.values"
        :key="item.uuid"
        style="display: flex; flex-direction: column; align-items: center"
    >
        <el-image :src="item.url" lazy>
            <template #placeholder>
                <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
        </el-image>
        <div style="margin-top: 16px; height: 16px"></div>
    </el-row> -->
    <!-- <fe-image :src="item.url" width="900px" height="1270px" skeleton maxDelay="1000"></fe-image> -->
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

let images = reactive([])
let loading = ref(true)

const getimages = async () => {
    const { data } = await axios.get(
        'https://api.copymanga.com/api/v3/comic/shaoniandeshenyuan/chapter2/805e42c4-58c6-11ea-ba16-00163e0ca5bd?timeout=10000'
    )
    var image = data.results.chapter.contents
    var arr = data.results.chapter.words
    sort(arr, image)
    images.values = sort(arr, image).image
    loading.value = false
}
getimages()

const sort = (arr, image) => {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                //相邻元素两两对比
                var temp = arr[j + 1] //元素交换
                var t = image[j + 1]
                arr[j + 1] = arr[j]
                image[j + 1] = image[j]

                arr[j] = temp
                image[j] = t
            }
        }
    }
    return { arr, image }
}
</script>

<style lang="scss" scoped>
:root {
    --width: 900px;
    --height: 1270px;
}
body {
    background-color: red;
    .el-skeleton {
        width: var(--width);
        :deep(.el-skeleton-item) {
            width: var(--width);
            // height: 1270px;
        }
    }
    .el-image {
        width: var(--width);
        // height: 1270px;
    }
}
</style>
