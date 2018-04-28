import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestAHelloWorldComponent } from './component/test-a-hello-world/test-a-hello-world.component';


@NgModule({
  declarations: [
    AppComponent,
    TestAHelloWorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
