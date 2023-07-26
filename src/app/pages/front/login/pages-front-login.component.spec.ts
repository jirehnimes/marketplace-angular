import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFrontLoginComponent } from './pages-front-login.component';

describe('PagesFrontLoginComponent', () => {
  let component: PagesFrontLoginComponent;
  let fixture: ComponentFixture<PagesFrontLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesFrontLoginComponent]
    });
    fixture = TestBed.createComponent(PagesFrontLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
