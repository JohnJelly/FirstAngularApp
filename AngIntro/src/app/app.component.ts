import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage = 'Message coming from parent module.';
  anotherMessage: string;
  fromChildOutput: string;
  username: string;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp)
  }

  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.anotherMessage = this.childComp.childMessage
  }

  receiveMessage($event: any) {
    this.fromChildOutput = $event;
  } 

  onKeyup() {
    console.log(this.username);
  }
}
