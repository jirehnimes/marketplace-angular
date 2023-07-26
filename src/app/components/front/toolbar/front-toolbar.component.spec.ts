import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontToolbarComponent } from './front-toolbar.component';

describe('FrontToolbarComponent', () => {
  let component: FrontToolbarComponent;
  let fixture: ComponentFixture<FrontToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontToolbarComponent]
    });
    fixture = TestBed.createComponent(FrontToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
