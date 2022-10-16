<template>
    <div>
        <nuxt-link :to="'/series/' + serie.slugForUrl">
        <div>
            <div class="h2">{{serie.name}}</div>
            <img :src="serie.image" :alt="serie.description" class="product-img">
        </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ["serie"]
    }
</script>

<style scoped>
.product-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>