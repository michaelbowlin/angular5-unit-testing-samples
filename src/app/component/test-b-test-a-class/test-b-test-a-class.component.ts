import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-b-test-a-class',
  templateUrl: './test-b-test-a-class.component.html',
  styleUrls: ['./test-b-test-a-class.component.css']
})
export class TestBTestAClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.isAuthenticated();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
