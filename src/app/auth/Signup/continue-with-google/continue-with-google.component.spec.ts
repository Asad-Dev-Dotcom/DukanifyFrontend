import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWithGoogleComponent } from './continue-with-google.component';

describe('ContinueWithGoogleComponent', () => {
  let component: ContinueWithGoogleComponent;
  let fixture: ComponentFixture<ContinueWithGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinueWithGoogleComponent]
    });
    fixture = TestBed.createComponent(ContinueWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
