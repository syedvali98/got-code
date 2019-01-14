import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSearchFoundComponent } from './no-search-found.component';

describe('NoSearchFoundComponent', () => {
  let component: NoSearchFoundComponent;
  let fixture: ComponentFixture<NoSearchFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSearchFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSearchFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
