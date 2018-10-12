import { Component, OnDestroy } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnDestroy {
  public currentCount = 0;
  public connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("/game")
      .build();

    this.connection.start().catch(err => document.write(err));

    this.connection.on("receiveMessage", (username: string, message: string) => {
      console.log(username + 'says: ' + message);
    });
  }

  public incrementCounter() {
    this.currentCount++;
    this.connection.send("newMessage", "JoeMama", "hola!!");
  }

  ngOnDestroy() {
    this.connection.stop();
  }
}
