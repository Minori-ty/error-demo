<template>
    <div v-for="(item, index) in images.values" :key="index" class="wrap">
        <div class="skeleton"></div>
        <img :data-src="item.url" src="#" />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated } from 'vue'
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
// console.log(images.values)

onUpdated(() => {
    console.log(document.querySelectorAll('img'))
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(entry.target.getAttribute('data-src'))
                clearInterval(timer)

                console.log(entry.target.previousElementSibling)
                var timer = setInterval(() => {
                    entry.target.setAttribute('src', entry.target.getAttribute('data-src'))
                    entry.target.previousElementSibling.removeAttribute('class')
                    clearInterval(timer)
                }, 700)
                observer.unobserve(entry.target)
            }
        })
    })

    document.querySelectorAll('img').forEach((img) => {
        observer.observe(img)
    })
})
</script>

<style scoped lang="scss">
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    width: var(--width);
    height: var(--height);
    /* background-color: red; */
}

.skeleton {
    --loading: #ededed;
    --width: 900px;
    --height: 1270px;
    position: absolute;
    width: var(--width);
    height: var(--height);
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

@keyframes loading {
    to {
        background-position-x: -20%;
    }
}
</style>
