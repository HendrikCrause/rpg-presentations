<template lang="pug">
    div
        .attention
            .line(v-for='(line, index) in lines')
                vue-typer(
                    :text='line'
                    :repeat=0
                    :pre-type-delay=500
                    :type-delay=40
                    caret-animation='smooth'
                    v-if='step > index + 1'
                    )
        .speech
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    props: {
        lines: Array,
        step: Number
    },
    components: {
        VueTyper
    }
}
</script>

<style scoped lang="scss">
    @import './styles/_variables.scss';

    .line {
        display: flex;
        justify-content: center;
    }

    .vue-typer {
        font-family: $font-secondary;
        text-align: center;
        font-size: 3em;
        
        ::v-deep .typed {
            color: $attention-font-color;
        }
    }
    

    .attention {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: $attention-background;
        padding: 4em;
        height: 12em;
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