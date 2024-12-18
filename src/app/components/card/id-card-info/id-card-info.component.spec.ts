import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardInfoComponent } from './id-card-info.component';

describe('IdCardInfoComponent', () => {
  let component: IdCardInfoComponent;
  let fixture: ComponentFixture<IdCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCardInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
