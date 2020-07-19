<template lang="pug">
    .eg-slideshow
        slide(leave='fadeOut')
            Loader

        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=2)
            SpeechBubble(:step='step', :lines=[
                "What is your favorite part \nabout playing tabletop RPGs?"])

        slide(enterNext='slideInUp' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutDown')
            h3 It's a social thing

        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Epic tales of grand adventures
        
        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Finding unique ways to solve problems
        
        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Playing Interesting characters

        slide(enterNext='slideInRight' enterPrev='slideInUp' leaveNext='slideOutDown' leavePrev='slideOutLeft')
            h3 Random chances with lasting consequences

        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=3)
            SpeechBubble(:step='step', :lines=[
                'Now imagine that these elements can be captured...', 
                'and played as a video game'])

        slide(enterNext='slideInUp' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutDown')
            h3 Not a new idea

        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 What makes this one different?

        slide(enterNext='slideInRight' leavePrev='slideOutRight' leaveNext='fadeOut' enterPrev='fadeIn' )
            h3 3 Major interfaces
            .tri
                .sec
                    h4.subtitle Playing the Game
                .sec
                    h4.subtitle Story Creation
                .sec
                    h4.subtitle Exchange
        
        slide(enterNext='zoomInLeft' leavePrev='zoomOutLeft' leaveNext='slideOutUp' enterPrev='slideInUp')
            h3 Playing the Game (pt 1)
            h4.subtitle Making a Character
        
        slide(enterNext='slideInUp' leavePrev='slideOutDown' leaveNext='zoomOutLeft' enterPrev='zoomInLeft')
            h3 Playing the Game (pt 2)
            h4.subtitle Gameplay

        slide(enter='fadeIn' leave='fadeOut')
            h3 3 Major interfaces
            .tri
                .sec
                    h4.subtitle Playing the Game
                .sec
                    h4.subtitle Story Creation
                .sec
                    h4.subtitle Exchange
        
        slide(enterNext='zoomIn' leavePrev='zoomOut' leaveNext='slideOutUp' enterPrev='slideInUp')
            h3 Story Creation (pt 1)
            h4.subtitle Map building and layout
        
        slide(enterNext='slideInUp' leavePrev='slideOutDown' leaveNext='zoomOut' enterPrev='zoomIn')
            h3 Story Creation (pt 2)
            h4.subtitle Narrative writing
        
        slide(enter='fadeIn' leave='fadeOut')
            h3 3 Major interfaces
            .tri
                .sec
                    h4.subtitle Playing the Game
                .sec
                    h4.subtitle Story Creation
                .sec
                    h4.subtitle Exchange
        
        slide(enter='zoomInRight' leave='zoomOutRight')
            h3 Exchange

        slide(enterNext='fadeIn' leavePrev='fadeOut' leaveNext='slideOutLeft' enterPrev='slideInLeft')
            h3 3 Major interfaces
            .tri
                .sec
                    h4.subtitle Playing the Game
                .sec
                    h4.subtitle Story Creation
                .sec
                    h4.subtitle Exchange
        
        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=3)
            SpeechBubble(:step='step', :lines=[
                'What would you like to see \nin a game like this?'])
        
        slide(enter='fadeIn')
            Loader

</template>

<script>
    import { Slideshow } from 'eagle.js'
    import SpeechBubble from '~/slides/SpeechBubble.vue'
    import Loader from '~/slides/Loader.vue'

    export default {
        mixins: [Slideshow],
        components: {
            SpeechBubble,
            Loader
        },
        props: {
            repeat: {
                default: true
            }
        },
        // created: function() {
        //     setInterval(function() {
        //         this.nextStep()
        //     }.bind(this), 4000)
        // }
    }
</script>

<style scoped lang='scss'>
h3 {
    font-family: fantasy;
}

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

.subtitle {
    text-align: center;
    margin-top: -0.5em;
    color: #aaa;
    font-family: fantasy;
}
</style>