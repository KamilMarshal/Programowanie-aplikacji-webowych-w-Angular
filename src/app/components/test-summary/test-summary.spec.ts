import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSummary } from './test-summary';

describe('TestSummary', () => {
  let component: TestSummary;
  let fixture: ComponentFixture<TestSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
