<template lang='pug'>
    div
        h3 {{title}}
        .tri
            .sec(v-for='tile in tiles')
                h4.subtitle {{tile}}
</template>

<script>
export default {
    props: {
        title: String,
        tiles: Array
    }
}
</script>

<style scoped lang='scss'>
.tri {
    display: flex;
    flex-direction: row;
    padding-top: 1em;
}

.sec {
    text-align: center;
    margin: 1em;
    padding: 2em;
    border: 1px solid #eee;
    box-shadow: 0 0.5em 1em #ddd;
    flex-grow: 1;
    flex-basis: 0;
}
</style>