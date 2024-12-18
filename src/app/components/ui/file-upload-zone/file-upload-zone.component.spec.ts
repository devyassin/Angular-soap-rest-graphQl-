import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadZoneComponent } from './file-upload-zone.component';

describe('FileUploadZoneComponent', () => {
  let component: FileUploadZoneComponent;
  let fixture: ComponentFixture<FileUploadZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
