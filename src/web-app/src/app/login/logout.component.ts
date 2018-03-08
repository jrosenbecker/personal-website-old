import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    template: `<div>Loading...</div>`
})
export class LogoutComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit(): void {
        this._authService.logout();
    }
}
