<template>
    <div class="fixed z-50 bottom-8 right-8" :class="chevron ? 'block': 'hidden'">
        <button @scroll="onScroll" @click="scrollToTop" class="text-center rounded-full shadow-lg cursor-pointer focus:outline-none h-15 w-15">
            <UiIconChevronUp />
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chevron: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll (e) {
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.chevron = top > 20
        },
        scrollToTop() {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            });
        }
    }
}
</script>
