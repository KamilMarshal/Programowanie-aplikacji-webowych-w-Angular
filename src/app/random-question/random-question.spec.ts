import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuestion } from './random-question';

describe('RandomQuestion', () => {
  let component: RandomQuestion;
  let fixture: ComponentFixture<RandomQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
