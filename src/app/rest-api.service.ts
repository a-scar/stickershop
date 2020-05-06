import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Sticker {
    name: string;
    price: string;
  }

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  stickerUrl = "localhost:3000/stickers"

  getStickers() {
    return this.http.get<Sticker>(this.stickerUrl);
  }

}