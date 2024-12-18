import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractedFormComponent } from './extracted-form.component';

describe('ExtractedFormComponent', () => {
  let component: ExtractedFormComponent;
  let fixture: ComponentFixture<ExtractedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractedFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
