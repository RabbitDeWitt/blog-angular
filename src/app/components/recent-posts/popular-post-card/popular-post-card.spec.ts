import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPostCard } from './popular-post-card';

describe('PopularPostCard', () => {
  let component: PopularPostCard;
  let fixture: ComponentFixture<PopularPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
