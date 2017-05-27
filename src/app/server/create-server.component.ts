import { Component } from '@angular/core';

@Component({
    selector: 'create-server',
    templateUrl: './create-server.component.html',
})
export class CreateServerComponent {
    server: any = {};

    public saveNewServer() {
        console.log(this.server);
    }
}
