import { Component } from '@angular/core';
import { fadeInAnimation } from '../animations/animations';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    animations: [fadeInAnimation],
    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class HomeComponent {
}
