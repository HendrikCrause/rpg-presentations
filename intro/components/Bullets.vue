<template lang="pug">
    div
        h3 {{title}}
        h4.subtitle {{subtitle}}
        .content
            ul
                eg-transition(
                    enter='fadeInRight'
                    leave='fadeOutRight'
                    v-for='(point, index) in points' 
                ) 
                    li(v-if='step > index + 1') {{point}}
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        points: Array,
        step: Number
    }
}
</script>

<style scoped lang='scss'>
@import './styles/_variables.scss';

h3 {
    font-family: $font-primary;
}

ul {
    width: max(50%, 500px)
}

li {
    font-family: $font-secondary;
}

.content {
    display: flex;
    justify-content: center;
}

.subtitle {
    text-align: center;
    margin-top: -0.5em;
    color: #aaa;
    font-family: fantasy;
}
</style>

