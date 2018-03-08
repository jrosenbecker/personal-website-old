import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-edit-component',
    templateUrl: 'edit.component.html'
})
export class EditComponent {

    constructor(private http: HttpClient) { }

    onClick(): void {
        console.log('click');
        this.http.get('/api/admin/printrequest').subscribe(
            data => console.log(data),
            err => console.log(err)
        );
    }
}
