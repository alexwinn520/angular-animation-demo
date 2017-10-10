import { trigger, state, animate, transition, style, keyframes, AnimationStateMetadata, AnimationTransitionMetadata } from '@angular/animations';
//import { AnimationMetadata } from '@angular/core';

export const fadeInAnimation =
trigger('fadeInAnimation', [ // trigger name for attaching - [@triggerName]

    transition(':enter', [ // route 'enter' transition

      style({ opacity: 0 }), // style at start of transition

        animate('1s', style({ opacity: 1 })) // animation and styles at end of transition
    ]),
]);

export const colorChange =
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]);

export const slideInOutAnimation =
trigger('slideInOutAnimation', [
    state('*', style({ // end state styles for route container (host)
      // view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),

    transition(':enter', [
        style({
            right: '-400%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        animate('.5s ease-in-out', style({
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),

    transition(':leave', [
        animate('.5s ease-in-out', style({
            right: '-400%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);

export const multiStepFlyOut =
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ]);

export const bounce = (timing: string): any[] => [
    state('bounceOut', style({
        display: 'none'
    })),
    state('bounceOutDown', style({
        display: 'none'
    })),
    state('bounceOutLeft', style({
        display: 'none'
    })),
    state('bounceOutRight', style({
        display: 'none'
    })),
    state('bounceOutUp', style({
        display: 'none'
    })),
    transition('* => bounceIn', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
            style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
    ]),
    transition('bounceIn => void, * => bounceOut', [
        animate(timing, keyframes([
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
            style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
        ]))
    ]),
    transition('* => bounceInDown', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInDown => void, * => bounceOutDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInLeft => void, * => bounceOutRight', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInRight', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInRight => void, * => bounceOutLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInUp', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInUp => void, * => bounceOutUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1})
        ]))
    ])
];

export const fade = (timing: string): any[] => [
    state('fadeOut', style({
        display: 'none'
    })),
    state('fadeOutDown', style({
        display: 'none'
    })),
    state('fadeOutLeft', style({
        display: 'none'
    })),
    state('fadeOutRight', style({
        display: 'none'
    })),
    state('fadeOutUp', style({
        display: 'none'
    })),
    transition('* => fadeIn', [
        animate(timing, keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1})
        ]))
    ]),
    transition('fadeIn => void, * => fadeOut', [
        animate(timing, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1})
        ]))
    ]),
    transition('* => fadeInDown', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInDown => void, * => fadeOutDown', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInLeft => void, * => fadeOutRight', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInRight', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInRight => void, * => fadeOutLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInUp', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInUp => void, * => fadeOutUp', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];

export const rotate = (timing: string): any[] => [
    state('rotateOut', style({
        display: 'none'
    })),
    state('rotateOutDownLeft', style({
        display: 'none'
    })),
    state('rotateOutDownRight', style({
        display: 'none'
    })),
    state('rotateOutUpLeft', style({
        display: 'none'
    })),
    state('rotateOutUpRight', style({
        display: 'none'
    })),
    transition('* => rotateIn', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateIn => void, * => rotateOut', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownRight', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownRight => void, * => rotateOutDownRight', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpRight', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpRight => void, * => rotateOutUpRight', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ])
];

export const slide = (timing: string): any[] => [
    state('slideOutDown', style({
        display: 'none'
    })),
    state('slideOutLeft', style({
        display: 'none'
    })),
    state('slideOutRight', style({
        display: 'none'
    })),
    state('slideOutUp', style({
        display: 'none'
    })),
    transition('* => slideInDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInDown => void, * => slideOutDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInLeft', [
        animate(timing, keyframes([
            style({transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInLeft => void, * => slideOutRight', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInRight', [
        animate(timing, keyframes([
            style({transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInRight => void, * => slideOutLeft', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInUp => void, * => slideOutUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];

export const zoom = (timing: string): any[] => [
    state('zoomOut', style({
        display: 'none'
    })),
    state('zoomOutDown', style({
        display: 'none'
    })),
    state('zoomOutLeft', style({
        display: 'none'
    })),
    state('zoomOutRight', style({
        display: 'none'
    })),
    state('zoomOutUp', style({
        display: 'none'
    })),
    transition('* => zoomIn', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
    ]),
    transition('zoomIn => void, * => zoomOut', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1})
        ]))
    ]),
    transition('* => zoomInDown', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInDown => void, * => zoomOutDown', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInLeft => void, * => zoomOutRight', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInRight', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInRight => void, * => zoomOutLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInUp', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInUp => void, * => zoomOutUp', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1})
        ]))
    ])
];
