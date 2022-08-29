import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentotpComponent } from './sentotp.component';

describe('SentotpComponent', () => {
  let component: SentotpComponent;
  let fixture: ComponentFixture<SentotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
