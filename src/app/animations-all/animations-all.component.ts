import { Component } from '@angular/core';

import { animateFactory } from './animate-factory';

@Component({
  selector: 'animations-all',
  templateUrl: './animations-all.component.html',
  styleUrls: ['./animations-all.component.css'],
  animations: [animateFactory(500)]
})

export class AnimationsAllComponent {
    public show: boolean = true;
    public state: string = '';
    public inAnimations: any[] = [
        'fadeIn',
        'fadeInDown',
        'fadeInLeft',
        'fadeInRight',
        'fadeInUp',

        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',

        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',

        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',

        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
    ];

    public outAnimations: any[] = [
        'fadeOut',
        'fadeOutDown',
        'fadeOutLeft',
        'fadeOutRight',
        'fadeOutUp',

        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',

        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',

        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp',

        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
    ];

  constructor() {
        this.inAnimations = this.inAnimations.map(item => {
            return {
                key: item,
                show: true,
                bg: Math.floor(Math.random() * 16777215).toString(16)
            };
        });

        this.outAnimations = this.outAnimations.map(item => {
            return {
                key: item,
                bg: Math.floor(Math.random() * 16777215).toString(16)
            };
        });
    }

    onToggleInAll() {
        this.inAnimations.forEach(item => item.show = !item.show);
    }

    onToggleOutAll() {
        this.outAnimations.forEach(item => {
            item.state = item.state ? '' : item.key;
        });
    }

    onToggleOutItem(item) {
        item.state = item.state ? '' : item.key;
    }


}
