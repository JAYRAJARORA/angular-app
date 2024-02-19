import { Component } from '@angular/core';

@Component({
  // selector: ".app-servers",
  // selector: ['app-servers'],
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>

  // `,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Server is ' + this.serverName;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset() {
    this.username = '';
  }
 
}
