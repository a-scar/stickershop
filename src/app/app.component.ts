import { Component } from '@angular/core';
import { RestService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private restService: RestService) {}
  title = 'sticker-shop';

  stickerArray = this.restService.getStickers();
  
  //  stickers = this.stickerArray.forEach(element => {
  //     return element;
  //  });

  //  console.log(stickers);

  // stickers = [
  //   {name: 'Cloud', price: 3.49},
  //   {name: 'Apple', price: 3.49},
  //   {name: 'Banana', price: 8.49},
  //   {name: 'Table', price: 11.45},
  //   {name: 'Glass', price: 3.49},
  //   {name: 'Phone', price: 3.49}
  // ]
}
