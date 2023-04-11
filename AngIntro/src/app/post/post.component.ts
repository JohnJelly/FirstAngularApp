import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public title = "List of Posts"
  public postMessage = "Message from post component parent"
  public childMessage = 'From child component.'
  
  @Input() fromParent: string;

  constructor() { }

  ngOnInit(): void { }
}
