import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public title = "List of Posts"
  public postMessage = "Message from post component parent"
  public childMessage = 'From child component.'
  public outputChildMessage: string = 'Message from child component via @Output'
  
  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void { }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
