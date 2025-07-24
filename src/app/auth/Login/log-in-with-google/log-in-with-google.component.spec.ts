import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInWithGoogleComponent } from './log-in-with-google.component';

describe('LogInWithGoogleComponent', () => {
  let component: LogInWithGoogleComponent;
  let fixture: ComponentFixture<LogInWithGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInWithGoogleComponent]
    });
    fixture = TestBed.createComponent(LogInWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
