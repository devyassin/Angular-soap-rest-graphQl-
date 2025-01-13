import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardHeaderComponent } from './id-card-header.component';

describe('IdCardHeaderComponent', () => {
  let component: IdCardHeaderComponent;
  let fixture: ComponentFixture<IdCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
