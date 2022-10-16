<template>
    <div>
        <div class="overlay" @click="$emit('closeModal')"></div>
        <div class="video-container">
            <iframe class="video" width="100%" height="100%" :src="video.videoEmbedId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["video"]
    }
</script>

<style scoped>
.overlay{
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.199);
}

.video-container{
    /* width is set as 100% here. any width can be specified as per requirement */
    width: 70%;
    padding-top: 39.375%;
    height: 0px;
    z-index: 10;
    position: fixed;
    left: 15%
    }

.video {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    top: -60px;
    left: 0;
    z-index: 10;
}

@media(max-width: 640px){
.video-container{
    width: 100%;
    padding-top: 56.25%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
}
</style>