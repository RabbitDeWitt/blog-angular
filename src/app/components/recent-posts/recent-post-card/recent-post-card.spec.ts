import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostCard } from './recent-post-card';

describe('RecentPostCard', () => {
  let component: RecentPostCard;
  let fixture: ComponentFixture<RecentPostCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPostCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPostCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
