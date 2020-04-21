import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerCardsComponent } from './sticker-cards.component';

describe('StickerCardsComponent', () => {
  let component: StickerCardsComponent;
  let fixture: ComponentFixture<StickerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
