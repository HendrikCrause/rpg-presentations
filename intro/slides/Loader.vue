<template lang="pug">
    .center
        vue-typer(
            text='...'
            :pre-type-delay=500
            :type-delay=500
            :erase-delay=50
            erase-style='backspace'
            caret-animation='smooth'
        )
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    components: {
        VueTyper
    }
}
</script>

<style scoped lang="scss">
    .center {
        height: 20em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>