import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestAHelloWorldComponent } from './component/test-a-hello-world/test-a-hello-world.component';
import { TestBTestAClassComponent } from './component/test-b-test-a-class/test-b-test-a-class.component';


@NgModule({
  declarations: [
    AppComponent,
    TestAHelloWorldComponent,
    TestBTestAClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
