<template>
    <div>
        <nuxt-link :to="'/products/' + product.slugForUrl">
        <div>
            <div class="h2">{{product.details.name}}</div>
            <img :src="product.details.image" :alt="product.details.description" class="product-img">
        </div>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ["product"]
    }
</script>

<style scoped>
.product-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>