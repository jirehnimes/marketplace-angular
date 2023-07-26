import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFrontComponent } from './pages-front.component';

describe('PagesFrontComponent', () => {
  let component: PagesFrontComponent;
  let fixture: ComponentFixture<PagesFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesFrontComponent]
    });
    fixture = TestBed.createComponent(PagesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
