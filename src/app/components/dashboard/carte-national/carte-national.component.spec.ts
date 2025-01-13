import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteNationalComponent } from './carte-national.component';

describe('CarteNationalComponent', () => {
  let component: CarteNationalComponent;
  let fixture: ComponentFixture<CarteNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteNationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
