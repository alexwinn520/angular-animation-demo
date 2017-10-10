import { trigger } from '@angular/core';
import { AnimationStateMetadata, AnimationTransitionMetadata } from '@angular/animations';

import { fade } from '../animations/animations';
import { bounce } from '../animations/animations';
import { rotate } from '../animations/animations';
import { slide } from '../animations/animations';
import { zoom } from '../animations/animations';

export const animateFactory = (duration: string | number = 500, delay: string | number = 0, easing: string = 'linear'): any => {

    const timing: string = [
        typeof(duration) === 'number' ? `${duration}ms` : duration,
        typeof(delay) === 'number' ? `${delay}ms` : delay,
        easing
    ].join(' ');

    return trigger('animate', [
        ...fade(timing),
        ...bounce(timing),
        ...rotate(timing),
        ...slide(timing),
        ...zoom(timing)
    ]);
};
