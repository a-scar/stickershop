import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sticker-cards',
  templateUrl: './sticker-cards.component.html',
  styleUrls: ['./sticker-cards.component.css']
})
export class StickerCardsComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
