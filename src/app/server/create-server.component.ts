import { Component } from '@angular/core';
import {Server} from '../model/server';

@Component({
    selector: 'create-server',
    templateUrl: './create-server.component.html',
})
export class CreateServerComponent {
    server: Server = {
        id: '',
        name: '',
        url: '',
        apiKey: '',
    };

    public saveNewServer() {}
}
