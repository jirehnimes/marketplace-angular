import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFrontHomeComponent } from './pages-front-home.component';

describe('PagesFrontHomeComponent', () => {
  let component: PagesFrontHomeComponent;
  let fixture: ComponentFixture<PagesFrontHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesFrontHomeComponent]
    });
    fixture = TestBed.createComponent(PagesFrontHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
