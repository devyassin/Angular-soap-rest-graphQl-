import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoadingButtonComponent } from './app-loading-button.component';

describe('AppLoadingButtonComponent', () => {
  let component: AppLoadingButtonComponent;
  let fixture: ComponentFixture<AppLoadingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLoadingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLoadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
