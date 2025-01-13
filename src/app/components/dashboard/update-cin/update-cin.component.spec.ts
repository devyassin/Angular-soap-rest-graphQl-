import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCinComponent } from './update-cin.component';

describe('UpdateCinComponent', () => {
  let component: UpdateCinComponent;
  let fixture: ComponentFixture<UpdateCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
