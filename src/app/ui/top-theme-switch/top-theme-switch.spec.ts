import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThemeSwitch } from './top-theme-switch';

describe('TopThemeSwitch', () => {
  let component: TopThemeSwitch;
  let fixture: ComponentFixture<TopThemeSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThemeSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThemeSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
