import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionordinateurComponent } from './visionordinateur.component';

describe('VisionordinateurComponent', () => {
  let component: VisionordinateurComponent;
  let fixture: ComponentFixture<VisionordinateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionordinateurComponent]
    });
    fixture = TestBed.createComponent(VisionordinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
