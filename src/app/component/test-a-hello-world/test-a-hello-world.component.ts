import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-a-hello-world',
  templateUrl: './test-a-hello-world.component.html',
  styleUrls: ['./test-a-hello-world.component.css']
})
export class TestAHelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.helloWorld();
  }

  helloWorld() {
    return 'Hello World';
  }

}
