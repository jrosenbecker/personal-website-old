import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-social-icon',
    templateUrl: 'socialicon.component.html',
    styleUrls: ['socialicon.component.css']
})
export class SocialIconComponent {
    @Input()
    filename: String;

    @Input()
    href: String;
 }
