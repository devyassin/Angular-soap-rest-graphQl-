import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataComponent } from './client-data.component';

describe('ClientDataComponent', () => {
  let component: ClientDataComponent;
  let fixture: ComponentFixture<ClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
