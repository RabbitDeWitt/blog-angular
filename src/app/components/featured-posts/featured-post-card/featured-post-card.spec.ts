import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPostCard } from './featured-post-card';

describe('FeaturedPostCard', () => {
  let component: FeaturedPostCard;
  let fixture: ComponentFixture<FeaturedPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
