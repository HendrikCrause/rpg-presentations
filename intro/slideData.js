export default {
    slideDefinitions: [
        {
            type: 'SpeechBubble',
            lines: ['What is your favorite part \nabout playing tabletop RPGs?']
        },
        {
            type: 'Bullets',
            title: "It's a social thing",
            subtitle: '',
            points: [
                'Get together with friends for a game',
                'Meet new people',
                'Become part of a growing and passionate community',
                'Probably the most common reason for playing'
            ],
            enterNext: 'slideInUp',
            leavePrev: 'slideOutDown'
        },
        {
            type: 'Bullets',
            title: 'Epic tales of grand adventures',
            subtitle: 'Cooparative Storytelling',
            points: [
                'Create and explore a fantasy world',
                'Filled with old dungeons, towns, forests, oceans, etc.',
                'Fighting armies of creatures',
                'On a quest to save those in need *>(for a small fee of course)'
            ]
        },
        {
            type: 'Bullets',
            title: 'Finding unique ways to solve problems',
            subtitle: '',
            points: []
        },
        {
            type: 'Bullets',
            title: 'Playing Interesting characters',
            subtitle: '',
            points: []
        },
        {
            type: 'Bullets',
            title: 'Random chances with lasting consequences',
            subtitle: '',
            points: [],
            leaveNext: 'slideOutDown',
            enterPrev: 'slideInUp'
        },
        {
            type: 'SpeechBubble',
            lines: [
                'Now imagine that these elements can be captured...', 
                'and played as a video game'
            ]
        },
        {
            type: 'Bullets',
            title: 'Not a new idea',
            subtitle: '',
            points: [],
            enterNext: 'slideInUp',
            leavePrev: 'slideOutDown'
        },
        {
            type: 'Bullets',
            title: 'What makes this one different?',
            subtitle: '',
            points: []
        },
        {
            type: 'Tiles',
            title: '3 Major interfaces',
            tiles: [
                'Playing the Game',
                'Story Creation',
                'Exchange'
            ],
            leaveNext: 'fadeOut',
            enterPrev: 'fadeIn'
        },
        {
            type: 'Bullets',
            title: 'Playing the Game (pt 1)',
            subtitle: 'Making a Character',
            points: [],
            enterNext:'zoomInLeft',
            leavePrev:'zoomOutLeft',
            leaveNext:'slideOutUp',
            enterPrev:'slideInUp'
        },
        {
            type: 'Bullets',
            title: 'Playing the Game (pt 2)',
            subtitle: 'Gameplay',
            points: [],
            enterNext:'slideInUp',
            leavePrev:'slideOutDown',
            leaveNext:'zoomOutLeft',
            enterPrev:'zoomInLeft'
        },
        {
            type: 'Tiles',
            title: '3 Major interfaces',
            tiles: [
                'Playing the Game',
                'Story Creation',
                'Exchange'
            ],
            leaveNext: 'fadeOut',
            enterPrev: 'fadeIn',
            leavePrev: 'fadeOut',
            enterNext: 'fadeIn'
        },
        {
            type: 'Bullets',
            title: 'Story Creation (pt 1)',
            subtitle: 'Map building and layout',
            points: [],
            enterNext:'zoomIn',
            leavePrev:'zoomOut',
            leaveNext:'slideOutUp',
            enterPrev:'slideInUp'
        },
        {
            type: 'Bullets',
            title: 'Story Creation (pt 2)',
            subtitle: 'Narrative writing',
            points: [],
            enterNext:'slideInUp',
            leavePrev:'slideOutDown',
            leaveNext:'zoomOut',
            enterPrev:'zoomIn'
        },
        {
            type: 'Tiles',
            title: '3 Major interfaces',
            tiles: [
                'Playing the Game',
                'Story Creation',
                'Exchange'
            ],
            leaveNext: 'fadeOut',
            enterPrev: 'fadeIn',
            leavePrev: 'fadeOut',
            enterNext: 'fadeIn'
        },
        {
            type: 'Bullets',
            title: 'Exchange',
            subtitle: '',
            points: [],
            leaveNext: 'zoomOutRight',
            enterPrev: 'zoomInRight',
            leavePrev: 'zoomOutRight',
            enterNext: 'zoomInRight'
        },
        {
            type: 'Tiles',
            title: '3 Major interfaces',
            tiles: [
                'Playing the Game',
                'Story Creation',
                'Exchange'
            ],
            leaveNext: 'slideOutDown',
            enterPrev: 'slideInUp',
            leavePrev: 'fadeOut',
            enterNext: 'fadeIn'
        },
        {
            type: 'SpeechBubble',
            lines: ['What would you like to see \nin a game like this?']
        }
    ]
}