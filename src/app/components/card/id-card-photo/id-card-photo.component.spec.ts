import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardPhotoComponent } from './id-card-photo.component';

describe('IdCardPhotoComponent', () => {
  let component: IdCardPhotoComponent;
  let fixture: ComponentFixture<IdCardPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdCardPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
