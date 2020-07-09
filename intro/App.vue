<template lang="pug">
    .eg-slideshow
        slide
            p Loading...

        slide(enter='slideInDown' leave='slideOutUp' steps='2')
            .attention
                vue-typer(
                    text='What is your favorite part \nabout playing tabletop RPGs?'
                    :repeat=0
                    :pre-type-delay=500
                    :type-delay=60
                    caret-animation='smooth'
                    v-if='step > 1'
                    )
            .speech

        slide(enter='fadeIn')
            h3 Title of this slide
            p Paragraph 1.
            p Paragraph 2.
        
        slide(:steps='3')
            h3 Slide with bullet points
            p(v-if='step >= 2') This will appear first. {{step}}
            p(v-if='step >= 3') This will appear second.
</template>

<script>
    import { Slideshow } from 'eagle.js'
    import { VueTyper } from 'vue-typer'
    export default {
        mixins: [Slideshow],
        components: {
            VueTyper
        }
    }
</script>

<style lang="scss">
    @import './styles/_variables.scss';

    .vue-typer {
        font-family: $font-headers;
        text-align: center;
        font-size: 3em;

        .char.custom.typed {
            color: $attention-font-color;
        }
    }

    .attention {
        display: flex;
        justify-content: center;
        background-color: $attention-background;
        height: 12em;
        padding-top: 4em;
        padding-bottom: 1em;
    }

    .speech {
        $size: 2em;

        width: 0;
        height: 0;
        border-left: $size solid transparent;
        border-right: $size solid transparent;
        border-top: $size solid $attention-background;
        margin: auto;
    }
</style>