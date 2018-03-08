import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    template: `<div>Loading...</div>`
})
export class LoginComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit(): void {
        this._authService.login();
    }
}
