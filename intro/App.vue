<template lang="pug">
    .eg-slideshow
        slide(leave='fadeOut')
            Loader

        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=2)
            SpeechBubble(:step='step', :lines=[
                "What is your favorite part \nabout playing tabletop RPGs?"])

        slide(enterNext='slideInUp' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutDown')
            h3 It's really a social thing

        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Epic tales of grand adventures
        
        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Random chances with lasting consequences
        
        slide(enterNext='slideInRight' enterPrev='slideInLeft' leaveNext='slideOutLeft' leavePrev='slideOutRight')
            h3 Finding unique ways to solve problems
        
        slide(enterNext='slideInRight' enterPrev='slideInUp' leaveNext='slideOutDown' leavePrev='slideOutRight')
            h3 Playing Interesting characters

        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=3)
            SpeechBubble(:step='step', :lines=[
                'Now imagine that these elements can be captured...', 
                'and played as a video game'])

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
        created: function() {
            // setInterval(function() {
            //     this.nextStep()
            // }.bind(this), 4000)
        }
    }
</script>