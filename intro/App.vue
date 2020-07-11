<template lang="pug">
    .eg-slideshow
        slide(leave='fadeOut')
            Loader

        slide(enterNext='slideInDown' leaveNext='slideOutUp' enterPrev='slideInDown' leavePrev='slideOutUp' steps=2)
            SpeechBubble(:step='step')

        slide(enter='slideInUp' leave='slideOutDown')
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
    import SpeechBubble from '~/slides/SpeechBubble.vue'
    import Loader from '~/slides/Loader.vue'

    export default {
        mixins: [Slideshow],
        components: {
            SpeechBubble,
            Loader
        },
        created: function() {
            setInterval(function() {
                this.nextStep()
            }.bind(this), 4000)
        }
    }
</script>