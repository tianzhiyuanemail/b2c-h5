<template>
    <section class="banner_box">
        <mt-swipe :auto="0" >
            <mt-swipe-item  v-for="s in goodsImages" ><img  :src="s.html"></mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
    import { Swipe, SwipeItem  } from 'mint-ui';
    export default {
        name: "product-swipe",
        props:['goodsImages']
    }
</script>

<style scoped>
    .detail_box .banner_box {
        width: 100%;
        height: 420px;
        position: relative;
        overflow: hidden;
    }
    .detail_box .banner_box img {
        height: 100%;
        /*margin-top: 45px;*/
    }
</style>