<template>
    <router-view></router-view>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, toRefs, toRef } from 'vue'
const init = async () => {
    const {
        data: {
            results: {
                chapter: { contents },
            },
        },
    } = await axios.get(
        'https://www.manga2020.com/api/v3/comic/hydxjxrwgb/chapter/cb321fca-c608-11e8-879b-024352452ce0?timeout=10000'
    )
    img.value = contents
    console.log(contents)
}
init()
let arr = reactive({
    img: [],
})
var { img } = toRefs(arr)
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>
