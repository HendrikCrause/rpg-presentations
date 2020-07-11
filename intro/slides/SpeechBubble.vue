<template lang="pug">
    div
        .attention
            vue-typer(
                text='What is your favorite part \nabout playing tabletop RPGs?'
                :repeat=0
                :pre-type-delay=500
                :type-delay=40
                caret-animation='smooth'
                v-if='step > 1'
                )
        .speech
</template>

<script>
    import { VueTyper } from 'vue-typer'
    export default {
        props: ['step'],
        components: {
            VueTyper
        }
    }
</script>

<style scoped lang="scss">
    @import './styles/_variables.scss';

    .vue-typer {
        font-family: $font-headers;
        text-align: center;
        font-size: 3em;
        
        ::v-deep .typed {
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