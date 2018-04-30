import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestAHelloWorldComponent } from './component/test-a-hello-world/test-a-hello-world.component';
import { TestBTestAClassComponent } from './component/test-b-test-a-class/test-b-test-a-class.component';
import { TestCTestAPipeComponent } from './component/test-c-test-a-pipe/test-c-test-a-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    TestAHelloWorldComponent,
    TestBTestAClassComponent,
    TestCTestAPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
