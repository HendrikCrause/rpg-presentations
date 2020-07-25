<template lang="pug">
    .eg-slideshow
        slide(leave='fadeOut')
            Loader
        template(v-for='s in slideDefinitions')
            slide(
                v-if='s.type === "SpeechBubble"'
                enter='slideInDown' 
                leave='slideOutUp'
                :steps='s.lines.length + 1'
            )
                SpeechBubble(:lines='s.lines' :step='step')
                
            slide(
                v-else-if='s.type === "Bullets"'
                :enterNext='calcTransitions(s, "enterNext")' 
                :leaveNext='calcTransitions(s, "leaveNext")' 
                :enterPrev='calcTransitions(s, "enterPrev")' 
                :leavePrev='calcTransitions(s, "leavePrev")'
                :steps='s.points.length + 1' 
            )
                Bullets(
                    :title='s.title'
                    :subtitle='s.subtitle'
                    :points='s.points'
                    :step='step'
                )

            slide(
                v-else-if='s.type === "Tiles"'
                :enterNext='calcTransitions(s, "enterNext")' 
                :leaveNext='calcTransitions(s, "leaveNext")' 
                :enterPrev='calcTransitions(s, "enterPrev")' 
                :leavePrev='calcTransitions(s, "leavePrev")'
            )
                Tiles(
                    :title='s.title'
                    :tiles='s.tiles'
                )
        
        slide(enter='fadeIn')
            Loader
</template>

<script>
    import { Slideshow } from 'eagle.js'
    import SpeechBubble from '~/components/SpeechBubble.vue'
    import Loader from '~/components/Loader.vue'
    import Bullets from '~/components/Bullets.vue'
    import Tiles from '~/components/Tiles.vue'
    import slideData from '~/slideData'

    export default {
        mixins: [Slideshow],
        components: {
            SpeechBubble,
            Loader,
            Bullets,
            Tiles
        },
        data: function() {
            return slideData
        },
        props: {
            repeat: {
                default: true
            }
        },
        methods: {
            calcTransitions: function(slide, transitionType) {
                const defaults = {
                    enterNext: 'slideInRight',
                    leaveNext: 'slideOutLeft',
                    enterPrev: 'slideInLeft',
                    leavePrev: 'slideOutRight'
                }

                if(slide.hasOwnProperty(transitionType)) return slide[transitionType]
                else return defaults[transitionType]
            }
        }
    }
</script>