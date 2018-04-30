import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})

@Component({
  selector: 'app-test-c-test-a-pipe',
  templateUrl: './test-c-test-a-pipe.component.html',
  styleUrls: ['./test-c-test-a-pipe.component.css']
})
export class TestCTestAPipeComponent implements PipeTransform {

  constructor() { }

  transform(value: string, fallback: string, forceHttps: boolean) {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    if (forceHttps) {
      if (image.indexOf('https') === -1) {
        image = image.replace('http', 'https');
      }
    }
    return image;
  }

}
