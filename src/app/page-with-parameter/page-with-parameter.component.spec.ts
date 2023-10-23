import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithParameterComponent } from './page-with-parameter.component';

describe('PageWithParameterComponent', () => {
  let component: PageWithParameterComponent;
  let fixture: ComponentFixture<PageWithParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWithParameterComponent]
    });
    fixture = TestBed.createComponent(PageWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
