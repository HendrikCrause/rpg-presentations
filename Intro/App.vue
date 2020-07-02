<template lang="pug">
    .eg-slideshow
        slide
            h1 My slideshow
            h4 By Zulko

        slide
            h3 Title of this slide
            p Paragraph 1.
            p Paragraph 2.
        
        slide(:steps='3')
            h3 Slide with bullet points
            p(v-if='step >= 2') This will appear first.
            p(v-if='step >= 3') This will appear second.
</template>

<script>
    import { Slideshow } from 'eagle.js'
    export default {
        mixins: [Slideshow]
    }
</script>

<style scoped>
</style>